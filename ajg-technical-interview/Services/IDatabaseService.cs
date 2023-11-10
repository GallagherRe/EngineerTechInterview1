using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using ajg_technical_interview.Models.Requests;
using ajg_technical_interview.Models.ViewModels;

namespace ajg_technical_interview.Services
{
    public interface IDatabaseService
    {
        Task<IList<SanctionedEntityWebVM>> GetSanctionedEntitiesAsync(CancellationToken cancellationToken);

        Task<SanctionedEntityWebVM> GetSanctionedEntityByIdAsync(Guid id, CancellationToken cancellationToken);

        Task<SanctionedEntityWebVM> CreateSanctionedEntityAsync(AddSanctionedEntityRequest sanctionedEntity, CancellationToken cancellationToken);
        Task ValidateAddSanctionedEntityAsync(AddSanctionedEntityRequest sanctionedEntity, CancellationToken cancellationToken);
    }
}