using System;

namespace ajg_technical_interview.Models
{
    public class BaseEntity
    {
        public BaseEntity()
        {
            Id = Guid.NewGuid();
        }
        public Guid Id { get; private set; }
    }
}
