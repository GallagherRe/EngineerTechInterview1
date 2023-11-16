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

        public async Task<SanctionedEntity> GetSanctionedEntityByIdAsync(Guid id) => 
            await Task.FromResult(SanctionedEntities.First(e => e.Id.Equals(id)));
        

        public bool EntityExists(SanctionedEntity sanctionedEntity) => 
            SanctionedEntities.Any(x => 
                                   x.Name.Trim().ToLower() == sanctionedEntity.Name.Trim().ToLower() && 
                                   x.Domicile.Trim().ToLower() == sanctionedEntity.Domicile.Trim().ToLower());
        

        public async Task<SanctionedEntity> CreateSanctionedEntityAsync(SanctionedEntity sanctionedEntity)
        {
            if (!EntityExists(sanctionedEntity))
            {
                SanctionedEntities.Add(sanctionedEntity);
                return await Task.FromResult(sanctionedEntity);
            }
            else
            {
                throw new Exception($"Entity {sanctionedEntity.Name} already exists");
            }
        }
    }
}