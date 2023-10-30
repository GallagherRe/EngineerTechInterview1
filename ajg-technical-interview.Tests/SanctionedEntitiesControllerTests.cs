using ajg_technical_interview.Controllers;
using ajg_technical_interview.Models;
using ajg_technical_interview.Services;
using Microsoft.Extensions.Logging;
using Moq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ajg_technical_interview.Tests
{
    public class SanctionedEntitiesControllerTests
    {
        private SanctionedEntitiesController _controller;
        private Mock<IDatabaseService> _mockDatabaseService;
        public SanctionedEntitiesControllerTests()
        {
            _mockDatabaseService = new Mock<IDatabaseService>();
            _controller = new SanctionedEntitiesController(_mockDatabaseService.Object);
        }


        [Fact]
        public async Task Should_Call_Add_Method_From_Database_Service()
        {
            //Arrange
            var entity = new SanctionedEntity();

            //Act
            await _controller.AddSanctionedEntity(entity);

            //Assert
            _mockDatabaseService.Verify(x => x.CreateSanctionedEntityAsync(It.IsAny<SanctionedEntity>()), Times.Once);
        }
    }

}
