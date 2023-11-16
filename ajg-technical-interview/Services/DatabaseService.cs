using ajg_technical_interview.ClientApp.Repositories;
using ajg_technical_interview.Models;
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

        public async Task<SanctionedEntity> GetSanctionedEntityByIdAsync(Guid id)
        {
            return await Task.FromResult(_repository.GetById(id));
        }

        public async Task<SanctionedEntity> CreateSanctionedEntityAsync(SanctionedEntity sanctionedEntity)
        {
            _repository.Add(sanctionedEntity);
            return await Task.FromResult(sanctionedEntity);
        }
    }
}