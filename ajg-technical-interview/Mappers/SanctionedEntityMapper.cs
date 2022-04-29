namespace ajg_technical_interview.Mappers
{
    public class SanctionedEntityMapper : ISanctionedEntityMapper
    {
        public Models.SanctionedEntity Map(Domain.SanctionedEntity entity) => entity == null ? null
            : new Models.SanctionedEntity
            {
                Id = entity.Id,
                Name = entity.Name,
                Domicile = entity.Domicile,
                Accepted = entity.Accepted
            };

        public Domain.SanctionedEntity Map(Models.SanctionedEntity entity) => entity == null ? null
            : new Domain.SanctionedEntity
            {
                Id = entity.Id,
                Name = entity.Name,
                Domicile = entity.Domicile,
                Accepted = entity.Accepted
            };
    }
}
