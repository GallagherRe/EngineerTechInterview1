using ajg_technical_interview.Domain;
using ajg_technical_interview.Domain.Interfaces;
using ajg_technical_interview.Services;
using FluentAssertions;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Xunit;

namespace ajg_technical_interview.Tests
{
    public class DatabaseServiceTests
    {
        [Fact]
        public async Task GetSanctionedEntitiesAsync_WhenEntitiesPresent_ReturnsListOfEntitiesAsync()
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
    }
}
