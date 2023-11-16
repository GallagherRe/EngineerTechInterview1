using System;
using System.Xml.Linq;

namespace ajg_technical_interview.Models
{
    public class SanctionedEntity
    {
        public Guid Id => Guid.NewGuid();
        public string Name { get; set; }
        public string Domicile { get; set; }
        public bool Accepted { get; set; }
    }
}

