using ajg_technical_interview.Models;
using ajg_technical_interview.Services;

namespace ajg_technical_interview.Tests
{
    public class DatabaseServiceTests
    {
        [Fact]
        public async Task Should_Add_New_Entity()
        {
            //Arrange
            var dbService = new DatabaseService();
            var entity = new SanctionedEntity() { Name = "Test", Domicile = "Domicile" };

            //Act
            await dbService.CreateSanctionedEntityAsync(entity);

            //Assert
            var entities = await dbService.GetSanctionedEntitiesAsync();

            Assert.True(entities.Contains(entity));
        }
    }
}