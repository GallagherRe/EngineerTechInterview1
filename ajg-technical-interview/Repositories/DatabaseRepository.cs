using ajg_technical_interview.Models;
using ajg_technical_interview.Models.Requests;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace ajg_technical_interview.Repositories
{
    public class DatabaseRepository : IDatabaseRepository
    {
        private static readonly IList<SanctionedEntity> SanctionedEntities = new List<SanctionedEntity>
        {
            new SanctionedEntity { Name = "Forbidden Company", Domicile = "Mars", Accepted = false },
            new SanctionedEntity { Name = "Allowed Company", Domicile = "Venus", Accepted = true },
            new SanctionedEntity { Name = "Good Ltd", Domicile = "Saturn", Accepted = true },
            new SanctionedEntity { Name = "Evil Plc", Domicile = "Venus", Accepted = false }
        };

        public async Task<SanctionedEntity> CreateSanctionedEntityAsync(SanctionedEntity sanctionedEntity, CancellationToken cancellationToken)
        {
            cancellationToken.ThrowIfCancellationRequested();

            SanctionedEntities.Add(sanctionedEntity);

            return await Task.FromResult(sanctionedEntity);
        }

        public Task ValidateAddSanctionedEntityAsync(AddSanctionedEntityRequest sanctionedEntity, CancellationToken cancellationToken)
        {
            cancellationToken.ThrowIfCancellationRequested();

            HashSet<(string Name, string Domicile)> namesAndDomicilesCombination = SanctionedEntities.Select(e => (e.Name, e.Domicile)).ToHashSet();

            // If validation works with FluentValidation, this is not needed
            //
            //foreach (var property in typeof(AddSanctionedEntityRequest).GetProperties())
            //{
            //    if (property.GetValue(sanctionedEntity) == null ||
            //        (property.PropertyType == typeof(string) && string.IsNullOrEmpty(property.GetValue(sanctionedEntity) as string)))
            //    {
            //        throw new InvalidOperationException("Properties of Sanctioned Entity must not be null.");
            //    }
            //}

            if (namesAndDomicilesCombination.Contains((sanctionedEntity.Name, sanctionedEntity.Domicile)))
            {
                throw new InvalidOperationException("Name and domicile combination already exists.");
            }

            return Task.CompletedTask;
        }

        public async Task<IList<SanctionedEntity>> GetSanctionedEntitiesAsync(CancellationToken cancellationToken)
        {
            cancellationToken.ThrowIfCancellationRequested();

            var entities = SanctionedEntities
             .OrderBy(e => e.Name)
             .ThenBy(e => e.Domicile)
             .ToList();

            return await Task.FromResult(entities);
        }

        public async Task<SanctionedEntity> GetSanctionedEntityByIdAsync(Guid id, CancellationToken cancellationToken)
        {
            cancellationToken.ThrowIfCancellationRequested();

            return await Task.FromResult(SanctionedEntities.First(e => e.Id.Equals(id)));
        }
    }
}
