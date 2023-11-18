using ajg_technical_interview;
using ajg_technical_interview.Models;
using ajg_technical_interview_tests.Extensions;
using Microsoft.AspNetCore.Mvc.Testing;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Net;
using System.Threading.Tasks;
using Xunit;

namespace ajg_technical_interview_tests.NewFolder
{
    public class SanctionedEntitiesControllerTests : IClassFixture<WebApplicationFactory<Startup>>
    {
        private const string SanctionApi = "/api/sanctioned-entities";
        private readonly WebApplicationFactory<Startup> _factory;

        public SanctionedEntitiesControllerTests(WebApplicationFactory<Startup> factory)
        { 
            _factory = factory;
        }

        [Fact]
        public async Task GetSanctionedEntitiesAsync_ReturnsOkResult_WithListOfSanctionedEntities()
        {
            var client = _factory.CreateClient();

            var entities = await client.GetAsJsonAsync<List<SanctionedEntity>>(SanctionApi);

            Assert.True(entities.Count == 4);
        }

        [Fact]
        public async Task CreateAsync_ReturnsCreatedResult_WithNewSanctionedEntity()
        {
            var client = _factory.CreateClient();

            var newEntity = new CreateSanctionedEntity { Domicile ="Entity", Name="Name" };
            var response = await client.PostAsJsonAsync(SanctionApi,newEntity);

            Assert.Equal(HttpStatusCode.Created, response.StatusCode);    

            string content = await response.Content.ReadAsStringAsync();
            var createdEntity = JsonConvert.DeserializeObject<SanctionedEntity>(content);
            Assert.IsType<Guid>(createdEntity.Id);
            Assert.NotEqual(new Guid(), createdEntity.Id);
        }

        [Fact]
        public async Task CreateAsync_ReturnsCreatedBadResult_WithInvalidNewSanctionedEntity()
        {
            var client = _factory.CreateClient();

            var newEntity = new CreateSanctionedEntity();
            var response = await client.PostAsJsonAsync(SanctionApi, newEntity);

            Assert.Equal(HttpStatusCode.BadRequest, response.StatusCode);
        }

        [Fact]
        public async Task CreateAsync_ReturnsCreatedBadResult_WithDuplicateSanctionedEntity()
        {
            var client = _factory.CreateClient();

            var newEntity = new CreateSanctionedEntity { Domicile = "Entity", Name = "Name" };
            await client.PostAsJsonAsync(SanctionApi, newEntity);
            var response = await client.PostAsJsonAsync(SanctionApi, newEntity);

            Assert.Equal(HttpStatusCode.BadRequest, response.StatusCode);

            string content = await response.Content.ReadAsStringAsync();
            Assert.Equal("Duplicate Name and Domicle", content);
        
        }
    }
}
