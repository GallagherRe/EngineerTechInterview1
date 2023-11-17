namespace ajg_technical_interview.Models
{
    public class SanctionedEntity: BaseEntity
    {
        public string Name { get; set; }
        public string Domicile { get; set; }
        public bool Accepted { get; set; }
    }
}
