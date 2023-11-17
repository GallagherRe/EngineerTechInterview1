using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using ajg_technical_interview.ClientApp.ResponseTypes;
using ajg_technical_interview.Models;
using OneOf;
using OneOf.Types;

namespace ajg_technical_interview.Services
{
    public interface IDatabaseService
    {
        Task<IList<SanctionedEntity>> GetSanctionedEntitiesAsync();

        Task<OneOf<SanctionedEntity, NotFound>> GetSanctionedEntityByIdAsync(Guid id);

        Task<OneOf<SanctionedEntity, IsNotUnique>> CreateSanctionedEntityAsync(SanctionedEntity sanctionedEntity);
    }
}