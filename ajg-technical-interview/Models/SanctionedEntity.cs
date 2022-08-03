using System;
using System.ComponentModel.DataAnnotations;

namespace ajg_technical_interview.Models
{
    /* would never do this "in real life" - should have seperate class and mapper for view model */
    public class SanctionedEntity
    {
        public Guid Id => Guid.NewGuid();
        
        [Required]
        public string Name { get; set; }
        
        [Required]
        public string Domicile { get; set; }
        
        public bool Accepted { get; set; }
    }
}
