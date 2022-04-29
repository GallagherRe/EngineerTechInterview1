using System;

namespace ajg_technical_interview.Domain
{
    public class SanctionedEntity
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Domicile { get; set; }
        public bool Accepted { get; set; }
    }
}
