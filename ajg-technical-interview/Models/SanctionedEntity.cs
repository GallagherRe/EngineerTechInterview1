using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using ajg_technical_interview.ClientApp.Repositories;

namespace ajg_technical_interview.Models
{
    public class SanctionedEntity: Entity
    {
        
        public string Name { get; set; }
        public string Domicile { get; set; }
        public bool Accepted { get; set; }
    }
}
