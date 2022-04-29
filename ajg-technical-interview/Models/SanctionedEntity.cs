using System;
using System.ComponentModel.DataAnnotations;

namespace ajg_technical_interview.Models
{
    public class SanctionedEntity
    {
        public Guid Id { get; set; }

        [Required]
        public string Name { get; set; }

        [Required]
        public string Domicile { get; set; }

        public bool Accepted { get; set; }
    }
}
