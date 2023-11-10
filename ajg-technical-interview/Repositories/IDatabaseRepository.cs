using ajg_technical_interview.Models;
using System.Collections.Generic;
using System.Threading.Tasks;
using System;
using ajg_technical_interview.Models.Requests;
using System.Threading;

namespace ajg_technical_interview.Repositories
{
    public interface IDatabaseRepository
    {
        Task<IList<SanctionedEntity>> GetSanctionedEntitiesAsync(CancellationToken cancellationToken);

        Task<SanctionedEntity> GetSanctionedEntityByIdAsync(Guid id, CancellationToken cancellationToken);

        Task<SanctionedEntity> CreateSanctionedEntityAsync(SanctionedEntity sanctionedEntity, CancellationToken cancellationToken);

        Task ValidateAddSanctionedEntityAsync(AddSanctionedEntityRequest sanctionedEntity, CancellationToken cancellationToken);
    }
}
