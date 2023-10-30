using System;

namespace ajg_technical_interview.Exceptions
{
    public class DuplicatedSanctionedEntityException: SanctionedEntityException
    {
        public DuplicatedSanctionedEntityException() : base("Unable to add Sanctioned Entity, a sanctioned entity with the same name and domicile already exists.")
        {
        }
    }
}