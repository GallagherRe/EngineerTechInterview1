using System;

namespace ajg_technical_interview.Models
{
    public class CreateSanctionedEntity
    {
        public string Name { get; set; }
        public string Domicile { get; set; }
        public bool Accepted { get; set; }

        public SanctionedEntity MapToSanctionedEntity () => new SanctionedEntity
            {
                Accepted = Accepted,
                Domicile = Domicile,
                Name = Name
            };
    }
}
