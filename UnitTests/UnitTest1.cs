using ajg_technical_interview.Controllers;
using ajg_technical_interview.Models;
using ajg_technical_interview.Services;
using AutoFixture;
using Microsoft.AspNetCore.Mvc;
using Moq;

namespace UnitTests
{
    public class UnitTest1
    {
        Mock<IDatabaseService> _mockDatabaseService = new();
        Fixture _fixture = new Fixture();

        public UnitTest1()
        {            
            _fixture = new Fixture();
            var data = _fixture.Create<List<SanctionedEntity>>();

            _mockDatabaseService.Setup(x => x.GetSanctionedEntitiesAsync()).ReturnsAsync(data);
            _mockDatabaseService.Setup(x => x.CreateSanctionedEntityAsync(It.IsAny<SanctionedEntity>())).ReturnsAsync(data.First());
        }

        [Fact]
        public async Task Get_return_OK()
        {
            SanctionedEntitiesController sanctionedEntitiesController = new SanctionedEntitiesController(_mockDatabaseService.Object);

            var actual = await sanctionedEntitiesController.GetSanctionedEntities();

            Assert.NotNull(actual);
            Assert.IsType<OkObjectResult>(actual.Result);
        }

        [Fact]
        public async Task Get_return_listOfEntities()
        {
            SanctionedEntitiesController sanctionedEntitiesController = new SanctionedEntitiesController(_mockDatabaseService.Object);

            var actual = await sanctionedEntitiesController.GetSanctionedEntities();

            Assert.NotNull(actual);
            Assert.IsType<List<SanctionedEntity>>(((OkObjectResult)actual.Result).Value);
        }

        [Fact]
        public async Task create_new_entity()
        {
            SanctionedEntitiesController sanctionedEntitiesController = new SanctionedEntitiesController(_mockDatabaseService.Object);

            var newEntity = _fixture.Create<SanctionedEntity>();

            var actual = await sanctionedEntitiesController.AddEntity(newEntity);

            Assert.NotNull(actual);
            Assert.IsType<OkObjectResult>(actual.Result);
            Assert.IsType<SanctionedEntity>(((OkObjectResult)actual.Result).Value);
        }

        [Fact]
        public async Task create_entityExists_returns_conflict()
        {
            Mock<IDatabaseService> localMockDatabaseService = new();
            localMockDatabaseService.Setup(x => x.EntityExists(It.IsAny<SanctionedEntity>())).Returns(true);

            SanctionedEntitiesController sanctionedEntitiesController = new SanctionedEntitiesController(localMockDatabaseService.Object);

            var newEntity = _fixture.Create<SanctionedEntity>();

            var actual = await sanctionedEntitiesController.AddEntity(newEntity);

            Assert.NotNull(actual);
            Assert.IsType<ConflictObjectResult>(actual.Result);
        }
    }
}