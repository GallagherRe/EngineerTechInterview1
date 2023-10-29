using System;
using System.Collections.Generic;
using System.Net;
using System.Threading.Tasks;
using ajg_technical_interview.Controllers;
using ajg_technical_interview.Models;
using ajg_technical_interview.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Infrastructure;
using Moq;
using Xunit;

namespace ajg_technical_interview.Tests.Controllers
{
    public class SanctionedEntitiesControllerTest
    {
        [Fact]
        public async Task ReturnListOfEntitiesReturnsListTest()
        {
            var sanctionedEntities = new List<SanctionedEntity>
            {
                new SanctionedEntity {Name = "Forbidden Company", Domicile = "Mars", Accepted = false},
                new SanctionedEntity {Name = "Allowed Company", Domicile = "Venus", Accepted = true},
                new SanctionedEntity {Name = "Good Ltd", Domicile = "Saturn", Accepted = true},
                new SanctionedEntity {Name = "Evil Plc", Domicile = "Venus", Accepted = false}
            };

            var databaseServiceMock = new Mock<IDatabaseService>();
            databaseServiceMock.Setup(dbs => dbs.GetSanctionedEntitiesAsync()).ReturnsAsync(sanctionedEntities);


            var sanctionedEntityController = new SanctionedEntitiesController(databaseServiceMock.Object);
            var result = await sanctionedEntityController.GetSanctionedEntities() as ObjectResult;


            Assert.IsType<OkObjectResult>(result);
            var viewResult = result.Value as List<SanctionedEntity>;
            Assert.NotNull(viewResult);
            Assert.NotEmpty(viewResult);
            Assert.Equal(4, sanctionedEntities.Count);
        }

        [Fact]
        public async Task ReturnListOfEntitiesReturnsProblemTest()
        {
            var databaseServiceMock = new Mock<IDatabaseService>();
            databaseServiceMock.Setup(dbs => dbs.GetSanctionedEntitiesAsync()).Throws(new Exception());

            var problemDetailsFactoryMock = CreateProblemDetailsFactory(HttpStatusCode.InternalServerError);

            var sanctionedEntityController = new SanctionedEntitiesController(databaseServiceMock.Object)
            {
                ProblemDetailsFactory = problemDetailsFactoryMock.Object
            };
            var result = await sanctionedEntityController.GetSanctionedEntities();

            Assert.NotNull(result);
            Assert.Equal(typeof(ObjectResult), result.GetType());
            var responseValue = result as ObjectResult;
            Assert.Equal((int?) HttpStatusCode.InternalServerError, responseValue!.StatusCode);
        }

        private Mock<ProblemDetailsFactory> CreateProblemDetailsFactory(HttpStatusCode httpCode)
        {
            var problemDetailsFactoryMock = new Mock<ProblemDetailsFactory>();
            problemDetailsFactoryMock
                .Setup(pd => pd.CreateProblemDetails(
                    It.IsAny<HttpContext>(),
                    It.IsAny<int?>(),
                    It.IsAny<string>(),
                    It.IsAny<string>(),
                    It.IsAny<string>(),
                    It.IsAny<string>())
                )
                .Returns(new ProblemDetails {Status = (int) httpCode})
                .Verifiable();

            return problemDetailsFactoryMock;
        }
    }
}