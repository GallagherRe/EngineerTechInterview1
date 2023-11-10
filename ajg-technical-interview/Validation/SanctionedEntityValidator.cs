using ajg_technical_interview.Models.Requests;
using FluentValidation;

namespace ajg_technical_interview.Validation
{
    public class SanctionedEntityValidator : AbstractValidator<AddSanctionedEntityRequest>
    {
        public SanctionedEntityValidator()
        {
            RuleFor(entity => entity.Name).NotEmpty().WithMessage("Entity name must not be empty.");
            RuleFor(entity => entity.Domicile).NotEmpty().WithMessage("Entity domicile must not be empty.");
            RuleFor(entity => entity.Accepted).NotEmpty().WithMessage("Entity accepted status must not be empty.");
        }
    }
}
