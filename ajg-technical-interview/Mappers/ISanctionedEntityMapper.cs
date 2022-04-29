using ajg_technical_interview.Domain;

namespace ajg_technical_interview.Mappers
{
    public interface ISanctionedEntityMapper
    {
        Models.SanctionedEntity Map(SanctionedEntity entity);
        SanctionedEntity Map(Models.SanctionedEntity entity);
    }
}
