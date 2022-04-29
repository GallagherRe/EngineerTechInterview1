using ajg_technical_interview.Controllers;
using ajg_technical_interview.Domain;
using ajg_technical_interview.Domain.Interfaces;
using ajg_technical_interview.Mappers;
using FluentAssertions;
using Microsoft.AspNetCore.Mvc;
using Moq;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Text.Json;
using System.Threading.Tasks;
using Xunit;

namespace ajg_technical_interview.Tests
{
    public class SanctionedEntitiesControllerTests
    {
        [Fact]
        public async Task GetSanctionedEntities_ReturnsListOfSanctionedEntities()
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
            
            var controller = new SanctionedEntitiesController(databaseService.Object, new SanctionedEntityMapper());

            //Act
            var result = (await controller.GetSanctionedEntities()) as OkObjectResult;

            //Assert
            result.Should().NotBeNull();
            result.Value.Should().BeEquivalentTo(expected);
        }

        [Fact]
        public async void GetSanctionedEntityById_WithExistingId_ReturnsEntity()
        {
            //Arrange
            Guid id = new Guid("add30d1e-5b02-43fc-9bf7-9275839bd0dd");
            var expected = new SanctionedEntity
            {
                Id = id,
                Name = "Stanmark",
                Domicile = "Terminus",
                Accepted = false
            };

            var databaseService = new Mock<IDatabaseService>();
            databaseService
                .Setup(s => s.GetSanctionedEntityByIdAsync(id))
                .ReturnsAsync(expected);

            var controller = new SanctionedEntitiesController(databaseService.Object, new SanctionedEntityMapper());

            //Act
            var result = (await controller.GetSanctionedEntityById(id)) as OkObjectResult;

            //Assert
            result.Should().NotBeNull();
            result.Value.Should().BeEquivalentTo(expected);
        }

        [Fact]
        public async void GetSanctionedEntityById_WithNonExistingId_ReturnsNotFound()
        {
            //Arrange
            Guid id = new Guid("add30d1e-5b02-43fc-9bf7-9275839bd0dd");

            var databaseService = new Mock<IDatabaseService>();
            databaseService
                .Setup(s => s.GetSanctionedEntityByIdAsync(id))
                .ReturnsAsync((SanctionedEntity)null);

            var controller = new SanctionedEntitiesController(databaseService.Object, new SanctionedEntityMapper());

            //Act
            var result = await controller.GetSanctionedEntityById(id);

            //Assert
            result.Should().BeOfType<NotFoundResult>();
        }

        [Fact]
        public async Task CreateSanctionedEntity_WithEntity_CallsCreateEntityAndReturnsCreatedAtResultWithId()
        {
            //Arrange
            var entity = new Models.SanctionedEntity
            {
                Name = "Terminus City",
                Domicile = "Terminus",
                Accepted = true
            };

            Guid newId = Guid.NewGuid();
            var entityDomainObject = new SanctionedEntity
            {
                Id = newId,
                Name = "Terminus City",
                Domicile = "Terminus",
                Accepted = true
            };

            var databaseService = new Mock<IDatabaseService>();
            databaseService
                .Setup(s => s.CreateSanctionedEntityAsync(It.IsAny<SanctionedEntity>()))
                .ReturnsAsync(entityDomainObject)
                .Verifiable();

            var controller = new SanctionedEntitiesController(databaseService.Object, new SanctionedEntityMapper());

            //Act
            var result = (await controller.CreateSanctionedEntity(entity)) as CreatedAtActionResult;

            //Assert
            result.Should().NotBeNull();
            
            string resultBody = JsonConvert.SerializeObject(result.Value);
            var definition = new { id = Guid.NewGuid() };
            var anonymousResult = JsonConvert.DeserializeAnonymousType(resultBody, definition);
            anonymousResult.id.Should().Be(newId);

            databaseService.Verify();
        }

        [Fact]
        public async Task CreateSanctionedEntity_WithEntityThatAlreadyExists_ReturnsBadRequest()
        {
            //Arrange
            var entity = new Models.SanctionedEntity
            {
                Name = "Terminus City",
                Domicile = "Terminus",
                Accepted = true
            };

            var databaseService = new Mock<IDatabaseService>();
            databaseService
                .Setup(s => s.SanctionedEntityExistsAsync(It.IsAny<SanctionedEntity>()))
                .ReturnsAsync(true);

            var controller = new SanctionedEntitiesController(databaseService.Object, new SanctionedEntityMapper());

            //Act
            var result = (await controller.CreateSanctionedEntity(entity)) as BadRequestObjectResult;

            //Assert
            result.Should().NotBeNull();
            result.Value.Should().Be("Entity already exists");
        }
    }
}
