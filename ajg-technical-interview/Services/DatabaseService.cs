using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ajg_technical_interview.Models;

namespace ajg_technical_interview.Services
{
    public class DatabaseService : IDatabaseService
    {
        private static readonly IList<SanctionedEntity> SanctionedEntities = new List<SanctionedEntity>
        {
            new SanctionedEntity { Name = "Forbidden Company", Domicile = "Mars", Accepted = false },
            new SanctionedEntity { Name = "Allowed Company", Domicile = "Venus", Accepted = true },
            new SanctionedEntity { Name = "Good Ltd", Domicile = "Saturn", Accepted = true },
            new SanctionedEntity { Name = "Evil Plc", Domicile = "Venus", Accepted = false }
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
            return await Task.FromResult(SanctionedEntities.First(e => e.Id.Equals(id)));
        }

        public async Task<SanctionedEntity> CreateSanctionedEntityAsync(SanctionedEntity sanctionedEntity)
        {
            if (string.IsNullOrWhiteSpace(sanctionedEntity.Name))
            {
                throw new ArgumentNullException(nameof(SanctionedEntity.Name));
            }
            if (string.IsNullOrWhiteSpace(sanctionedEntity.Domicile))
            {
                throw new ArgumentNullException(nameof(SanctionedEntity.Domicile));
            }
            if (SanctionedEntities.Any(x => x.Name.Trim() == sanctionedEntity.Name.Trim() && x.Domicile.Trim() == sanctionedEntity.Domicile.Trim()))
            {
                throw new Exception("There cannot be more than one entity with the same name and domicile");
            }
            SanctionedEntities.Add(sanctionedEntity);
            return await Task.FromResult(sanctionedEntity);
        }
    }
}