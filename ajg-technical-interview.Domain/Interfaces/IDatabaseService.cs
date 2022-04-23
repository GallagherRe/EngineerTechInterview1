using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace ajg_technical_interview.Domain.Interfaces
{
    public interface IDatabaseService
    {
        Task<IList<SanctionedEntity>> GetSanctionedEntitiesAsync();

        Task<SanctionedEntity> GetSanctionedEntityByIdAsync(Guid id);

        Task<SanctionedEntity> CreateSanctionedEntityAsync(SanctionedEntity sanctionedEntity);
    }
}
