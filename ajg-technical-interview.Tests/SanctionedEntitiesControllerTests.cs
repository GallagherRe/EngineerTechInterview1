using ajg_technical_interview.Controllers;
using ajg_technical_interview.Domain;
using ajg_technical_interview.Domain.Interfaces;
using FluentAssertions;
using Microsoft.AspNetCore.Mvc;
using Moq;
using System.Collections.Generic;
using System.Threading.Tasks;
using Xunit;

namespace ajg_technical_interview.Tests
{
    public class SanctionedEntitiesControllerTests
    {
        [Fact]
        public async Task GetSanctionedEntities_ReturnsListOfSanctionedEntitiesAsync()
        {
            //Arrange
            var expected = new List<SanctionedEntity>
            {
                new SanctionedEntity
                {
                    Name = "Terminus City",
                    Domicile = "Terminus",
                    Accepted = true
                },
                new SanctionedEntity
                {
                    Name = "Stanmark",
                    Domicile = "Terminus",
                    Accepted = false
                },
                new SanctionedEntity
                {
                    Name = "Mycogen",
                    Domicile = "Trantor",
                    Accepted = true
                },

            };
            var databaseService = new Mock<IDatabaseService>();
            databaseService
                .Setup(s => s.GetSanctionedEntitiesAsync())
                .ReturnsAsync(expected);
            
            var controller = new SanctionedEntitiesController(databaseService.Object);

            //Act
            var result = (await controller.GetSanctionedEntities()) as OkObjectResult;

            //Assert
            result.Should().NotBeNull();
            result.Value.Should().BeEquivalentTo(expected);
        }
    }
}
