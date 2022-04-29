using ajg_technical_interview.Domain;
using ajg_technical_interview.Domain.Interfaces;
using ajg_technical_interview.Services;
using FluentAssertions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Xunit;

namespace ajg_technical_interview.Tests
{
    public class DatabaseServiceTests
    {
        [Fact]
        public async Task GetSanctionedEntitiesAsync_WhenEntitiesPresent_ReturnsListOfEntities()
        {
            //Arrange
            var expected = new List<SanctionedEntity>
            {
                new SanctionedEntity { Id = new Guid("add30d1e-5b02-43fc-9bf7-9275839bd0dd"), Name = "Forbidden Company", Domicile = "Mars", Accepted = false },
                new SanctionedEntity { Id = new Guid("513d4250-7033-4190-9a8d-616161185b1e"), Name = "Allowed Company", Domicile = "Venus", Accepted = true },
                new SanctionedEntity { Id = new Guid("1e8b00cc-6799-4983-bc5a-cdd84107e67e"), Name = "Good Ltd", Domicile = "Saturn", Accepted = true },
                new SanctionedEntity { Id = new Guid("7586e825-b3bb-4cd0-a5c3-7e9a4533bbb7"), Name = "Evil Plc", Domicile = "Venus", Accepted = false }
            };

            IDatabaseService service = new DatabaseService();

            //Act
            var actual = await service.GetSanctionedEntitiesAsync();

            //Assert
            actual.Should().BeEquivalentTo(expected);
        }

        [Fact]
        public async Task GetSanctionedEntityByIdAsync_WithExistingId_ReturnsEntity()
        {
            //Arrange
            Guid id = new Guid("1e8b00cc-6799-4983-bc5a-cdd84107e67e");
            var expected = new SanctionedEntity { Id = id, Name = "Good Ltd", Domicile = "Saturn", Accepted = true };

            IDatabaseService service = new DatabaseService();

            //Act
            var actual = await service.GetSanctionedEntityByIdAsync(id);

            //Assert
            actual.Should().BeEquivalentTo(expected);
        }

        [Fact]
        public async Task GetSanctionedEntityByIdAsync_WithNonExistingId_ReturnsNull1()
        {
            //Arrange
            Guid id = Guid.NewGuid();

            IDatabaseService service = new DatabaseService();

            //Act
            var actual = await service.GetSanctionedEntityByIdAsync(id);

            //Assert
            actual.Should().BeNull();
        }

        [Fact]
        public async Task CreateSanctionedEntityAsync_WithSanctionEntityNotHavingId_SavesEntityAndPopulatesId()
        {
            //Arrange
            IDatabaseService service = new DatabaseService();

            var expectedEntitesBeforeCreate = new List<SanctionedEntity>
            {
                new SanctionedEntity { Id = new Guid("add30d1e-5b02-43fc-9bf7-9275839bd0dd"), Name = "Forbidden Company", Domicile = "Mars", Accepted = false },
                new SanctionedEntity { Id = new Guid("513d4250-7033-4190-9a8d-616161185b1e"), Name = "Allowed Company", Domicile = "Venus", Accepted = true },
                new SanctionedEntity { Id = new Guid("1e8b00cc-6799-4983-bc5a-cdd84107e67e"), Name = "Good Ltd", Domicile = "Saturn", Accepted = true },
                new SanctionedEntity { Id = new Guid("7586e825-b3bb-4cd0-a5c3-7e9a4533bbb7"), Name = "Evil Plc", Domicile = "Venus", Accepted = false }
            };

            var actualEntitesBeforeCreate = await service.GetSanctionedEntitiesAsync();

            actualEntitesBeforeCreate.Should().BeEquivalentTo(expectedEntitesBeforeCreate);

            var entity = new SanctionedEntity
            {
                Name = "Another Company",
                Domicile = "Mars",
                Accepted = true
            };

            //Act
            var savedEntity = await service.CreateSanctionedEntityAsync(entity);

            //Assert
            var actualEntitiesAfterCreate = await service.GetSanctionedEntitiesAsync();
            actualEntitiesAfterCreate.Count().Should().Be(actualEntitesBeforeCreate.Count()+1);
            actualEntitiesAfterCreate.Should().Contain(entity);
            savedEntity.Id.Should().NotBeEmpty();
        }

        [Fact]
        public async Task CreateSanctionedEntityAsync_WithSanctionEntityHavingId_ThrowsArgumentException()
        {
            //Arrange
            IDatabaseService service = new DatabaseService();

            var entity = new SanctionedEntity
            {
                Id = Guid.NewGuid(),
                Name = "Another Company",
                Domicile = "Mars",
                Accepted = true
            };

            //Act//Assert
            await Assert.ThrowsAsync<ArgumentException>(() => service.CreateSanctionedEntityAsync(entity));
        }

        [Fact]
        public async Task SanctionedEntityExistsAsync_WhenSanctionedEntityWithSameNameAndDomicileExists_ReturnsTrue()
        {
            //Arrange
            IDatabaseService service = new DatabaseService();

            var entity = new SanctionedEntity
            {
                Name = "Forbidden Company",
                Domicile = "Mars",
                Accepted = true
            };

            //Act
            var actual = await service.SanctionedEntityExistsAsync(entity);

            //Assert
            actual.Should().BeTrue();
        }

        [Fact]
        public async Task SanctionedEntityExistsAsync_WhenSanctionedEntityWithSameNameAndDifferentDomicileExists_ReturnsFalse()
        {
            //Arrange
            IDatabaseService service = new DatabaseService();

            var entity = new SanctionedEntity
            {
                Name = "Forbidden Company",
                Domicile = "Venus",
                Accepted = true
            };

            //Act
            var actual = await service.SanctionedEntityExistsAsync(entity);

            //Assert
            actual.Should().BeFalse();
        }

        [Fact]
        public async Task SanctionedEntityExistsAsync_WhenSanctionedEntityWithDifferentNameAndSameDomicileExists_ReturnsFalse()
        {
            //Arrange
            IDatabaseService service = new DatabaseService();

            var entity = new SanctionedEntity
            {
                Name = "Allowed Company",
                Domicile = "Mars",
                Accepted = true
            };

            //Act
            var actual = await service.SanctionedEntityExistsAsync(entity);

            //Assert
            actual.Should().BeFalse();
        }

        [Fact]
        public async Task SanctionedEntityExistsAsync_WhenSanctionedEntityWithSameNameAndDomicileDoesNotExist_ReturnsFalse()
        {
            //Arrange
            IDatabaseService service = new DatabaseService();

            var entity = new SanctionedEntity
            {
                Name = "Terminus City",
                Domicile = "Terminus",
                Accepted = true
            };

            //Act
            var actual = await service.SanctionedEntityExistsAsync(entity);

            //Assert
            actual.Should().BeFalse();
        }
    }
}
