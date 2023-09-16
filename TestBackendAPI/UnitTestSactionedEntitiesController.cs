using ajg_technical_interview.Controllers;
using ajg_technical_interview.Models;
using ajg_technical_interview.Services;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Threading.Tasks;
using Xunit;

namespace TestBackendAPI
{
    public class UnitTestSactionedEntitiesController
    {
        [Fact]
        public async Task AddSanctionedEntity_ReturnsCreatedResponse()
        {
            // Arrange

            IDatabaseService databaseService = new DatabaseService();
            var controller = new SanctionedEntitiesController(databaseService);
            var newEntity = new SanctionedEntity { Name = "Test", Domicile = "Test" , Accepted = false
            };

            // Act
            var result = await controller.AddSanctionedEntity(newEntity);

            // Assert
            Assert.IsType<CreatedAtActionResult>(result);
        }

       
    }
}
