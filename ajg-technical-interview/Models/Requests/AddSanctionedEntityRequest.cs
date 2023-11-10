namespace ajg_technical_interview.Models.Requests
{
    public class AddSanctionedEntityRequest
    {
        public string Name { get; set; }
        public string Domicile { get; set; }
        public bool Accepted { get; set; }
    }
}
