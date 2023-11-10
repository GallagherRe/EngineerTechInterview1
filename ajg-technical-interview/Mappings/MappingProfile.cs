using ajg_technical_interview.Models;
using ajg_technical_interview.Models.Requests;
using ajg_technical_interview.Models.ViewModels;
using AutoMapper;

namespace ajg_technical_interview.Mappings
{
    public class MappingProfile : Profile
    {
        public MappingProfile() {
            CreateMap<SanctionedEntity, SanctionedEntityWebVM>();
            CreateMap<SanctionedEntity, AddSanctionedEntityRequest>();
            CreateMap<AddSanctionedEntityRequest, SanctionedEntityWebVM>();
            CreateMap<AddSanctionedEntityRequest, SanctionedEntity>();
        }
    }
}
