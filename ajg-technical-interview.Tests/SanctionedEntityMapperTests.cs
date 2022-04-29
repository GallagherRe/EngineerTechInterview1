using ajg_technical_interview.Domain;
using ajg_technical_interview.Mappers;
using FluentAssertions;
using System;
using System.Collections.Generic;
using System.Text;
using Xunit;

namespace ajg_technical_interview.Tests
{
    public class SanctionedEntityMapperTests
    {
        [Fact]
        public void Map_WithPopulatedSanctionedEntityDomainObject_ReturnsPopulatedSanctionedEntityDto()
        {
            //Arrange
            var sanctionedEntity = new SanctionedEntity
            {
                Name = "Mycogen",
                Domicile = "Trantor",
                Accepted = true
            };

            ISanctionedEntityMapper mapper = new SanctionedEntityMapper();

            //Act
            var mappedSanctionedEntity = mapper.Map(sanctionedEntity);

            //Assert
            mappedSanctionedEntity.Should().BeEquivalentTo(sanctionedEntity);
        }

        [Fact]
        public void Map_WithNullSanctionedEntityDomainObject_ReturnsNull()
        {
            //Arrange
            ISanctionedEntityMapper mapper = new SanctionedEntityMapper();

            //Act
            var mappedSanctionedEntity = mapper.Map((SanctionedEntity)null);

            //Assert
            mappedSanctionedEntity.Should().BeNull();
        }

        [Fact]
        public void Map_WithPopulatedSanctionedEntityDto_ReturnsPopulatedSanctionedEntityDomainObject()
        {
            //Arrange
            var sanctionedEntity = new Models.SanctionedEntity
            {
                Name = "Mycogen",
                Domicile = "Trantor",
                Accepted = true
            };

            ISanctionedEntityMapper mapper = new SanctionedEntityMapper();

            //Act
            var mappedSanctionedEntity = mapper.Map(sanctionedEntity);

            //Assert
            mappedSanctionedEntity.Should().BeEquivalentTo(sanctionedEntity);
        }

        [Fact]
        public void Map_WithNullSanctionedEntityDto_ReturnsNull()
        {
            //Arrange
            ISanctionedEntityMapper mapper = new SanctionedEntityMapper();

            //Act
            var mappedSanctionedEntity = mapper.Map((Models.SanctionedEntity)null);

            //Assert
            mappedSanctionedEntity.Should().BeNull();
        }
    }
}
