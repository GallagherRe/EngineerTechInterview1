
using ajg_technical_interview.ClientApp.Repositories;
using ajg_technical_interview.Models;
using System;
using Xunit;

namespace ajg_technical_interview_tests.RepositoriesTests
{

    public class RepositoryTests
    {
        private readonly Repository<SanctionedEntity> _repository;

        public RepositoryTests()
        {
            _repository = new Repository<SanctionedEntity>();
        }

        [Fact]
        public void GivenANewEntity_ItAddsEntity_ToRepository()
        {
            var entity = new SanctionedEntity { Name = "Entity1", Domicile = "Domicile1", Accepted = true };

            _repository.Add(entity);

            Assert.Contains(entity, _repository.GetAll());
        }

        [Fact]
        public void GivenAddingTwoSameEnity_EntityToRepository_ThrowsAnInvalidException()
        {
            var entity = new SanctionedEntity { Name = "Entity1", Domicile = "Domicile1", Accepted = true };

            _repository.Add(entity);
            Assert.Throws<InvalidOperationException>(() => _repository.Add(entity));


        }

        [Fact]
        public void GetById_ReturnsEntityWithGivenId()
        {
            var entity = new SanctionedEntity { Name = "Entity2", Domicile = "Domicile2", Accepted = false };
            _repository.Add(entity);

            var retrievedEntity = _repository.GetById(entity.Id);

            Assert.Equal(entity, retrievedEntity);
        }

        [Fact]
        public void Delete_RemovesEntityWithGivenId()
        {
            var entity = new SanctionedEntity { Name = "Entity3", Domicile = "Domicile3", Accepted = true };
            _repository.Add(entity);

            _repository.Delete(entity.Id);

            Assert.DoesNotContain(entity, _repository.GetAll());
        }
    }
}
