using ajg_technical_interview.Domain;
using ajg_technical_interview.Domain.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ajg_technical_interview.Services
{
    public class DatabaseService : IDatabaseService
    {
        private readonly IList<SanctionedEntity> SanctionedEntities = new List<SanctionedEntity>
        {
            new SanctionedEntity { Id = new Guid("add30d1e-5b02-43fc-9bf7-9275839bd0dd"), Name = "Forbidden Company", Domicile = "Mars", Accepted = false },
            new SanctionedEntity { Id = new Guid("513d4250-7033-4190-9a8d-616161185b1e"), Name = "Allowed Company", Domicile = "Venus", Accepted = true },
            new SanctionedEntity { Id = new Guid("1e8b00cc-6799-4983-bc5a-cdd84107e67e"), Name = "Good Ltd", Domicile = "Saturn", Accepted = true },
            new SanctionedEntity { Id = new Guid("7586e825-b3bb-4cd0-a5c3-7e9a4533bbb7"), Name = "Evil Plc", Domicile = "Venus", Accepted = false }
        };

        public async Task<IList<SanctionedEntity>> GetSanctionedEntitiesAsync()
        {
            var entities = SanctionedEntities
                .OrderBy(e => e.Name)
                .ThenBy(e => e.Domicile)
                .ToList();

            return await Task.FromResult(entities);
        }

        public async Task<SanctionedEntity> GetSanctionedEntityByIdAsync(Guid id)
        {
            return await Task.FromResult(SanctionedEntities.SingleOrDefault(e => e.Id.Equals(id)));
        }

        public async Task<SanctionedEntity> CreateSanctionedEntityAsync(SanctionedEntity sanctionedEntity)
        {
            if (sanctionedEntity.Id != Guid.Empty)
                throw new ArgumentException($"{nameof(sanctionedEntity)} cannot have an ID on create");

            sanctionedEntity.Id = Guid.NewGuid();
            SanctionedEntities.Add(sanctionedEntity);
            return await Task.FromResult(sanctionedEntity);
        }
    }
}