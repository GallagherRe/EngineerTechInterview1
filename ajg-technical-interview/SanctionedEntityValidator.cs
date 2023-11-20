using ajg_technical_interview.Models;
using FluentValidation;

namespace ajg_technical_interview
{

    public class SanctionedEntityValidator : AbstractValidator<CreateSanctionedModel>
    {
        public SanctionedEntityValidator()
        {
            RuleFor(x => x.Name).NotEmpty().WithMessage("Name cannot be empty");
            RuleFor(x => x.Domicile).NotEmpty().WithMessage("Domicile cannot be empty");
            RuleFor(x => x.Accepted).NotNull().WithMessage("Accepted cannot be null");
        }
    }

}
