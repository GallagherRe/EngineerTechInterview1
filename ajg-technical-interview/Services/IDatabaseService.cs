using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using ajg_technical_interview.Models;

namespace ajg_technical_interview.Services
{
    public interface IDatabaseService
    {
        Task<IList<SanctionedEntity>> GetSanctionedEntitiesAsync();

        Task<SanctionedEntity> GetSanctionedEntityByIdAsync(Guid id);

        Task<SanctionedEntity> CreateSanctionedEntityAsync(SanctionedEntity sanctionedEntity);

        Task<SanctionedEntity> GetSanctionedEntityByNameAndDomicileAsync(SanctionedEntity sanctionedEntity);
    }
}