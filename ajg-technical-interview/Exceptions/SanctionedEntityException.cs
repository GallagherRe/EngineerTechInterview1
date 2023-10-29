using System;

namespace ajg_technical_interview.Exceptions
{
    public class SanctionedEntityException: Exception
    {
        protected SanctionedEntityException(string message) : base(message)
        {
        }
    }
}