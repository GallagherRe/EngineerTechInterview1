using ajg_technical_interview.ClientApp.Repositories;
using ajg_technical_interview.ClientApp.ResponseTypes;
using ajg_technical_interview.Models;
using OneOf;
using OneOf.Types;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ajg_technical_interview.Services
{
    public class DatabaseService : IDatabaseService
    {
        readonly IRepository<SanctionedEntity> _repository;
        public DatabaseService(IRepository<SanctionedEntity> repository)
        {
            _repository = repository;

            _repository.Add(new SanctionedEntity { Name = "Forbidden Company", Domicile = "Mars", Accepted = false });
            _repository.Add(new SanctionedEntity { Name = "Allowed Company", Domicile = "Venus", Accepted = true });
            _repository.Add(new SanctionedEntity { Name = "Good Ltd", Domicile = "Saturn", Accepted = true });
            _repository.Add(new SanctionedEntity { Name = "Evil Plc", Domicile = "Venus", Accepted = false });
        }

        public async Task<IList<SanctionedEntity>> GetSanctionedEntitiesAsync()
        {
            var entities = _repository.GetAll()
                .OrderBy(e => e.Name)
                .ThenBy(e => e.Domicile)
                .ToList();

            return await Task.FromResult(entities);
        }



        public async Task<OneOf<SanctionedEntity, IsNotUnique>> CreateSanctionedEntityAsync(SanctionedEntity sanctionedEntity)
        {
            bool isUnique = await IsUniqueAsync(sanctionedEntity);
            if (!isUnique)
            {
                return new IsNotUnique();
            }

            _repository.Add(sanctionedEntity);
            return await Task.FromResult(sanctionedEntity);
        }

        private async Task<bool> IsUniqueAsync(SanctionedEntity entity)
        {
            bool isUnique = !_repository.Get(x => x.Name == entity.Name && x.Domicile == entity.Domicile).Any();
            return await Task.FromResult(isUnique);
        }

        public async Task<OneOf<SanctionedEntity, NotFound>> GetSanctionedEntityByIdAsync(Guid id)
        {
            var res = await Task.FromResult(_repository.GetById(id));

            if (res == null)
            {
                new NotFound();
            }

            return res;
        }
    }
}