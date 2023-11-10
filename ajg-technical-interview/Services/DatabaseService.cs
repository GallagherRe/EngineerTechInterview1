using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using ajg_technical_interview.Models;
using ajg_technical_interview.Models.Requests;
using ajg_technical_interview.Models.ViewModels;
using ajg_technical_interview.Repositories;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;

namespace ajg_technical_interview.Services
{
    public class DatabaseService : IDatabaseService
    {
        private readonly IDatabaseRepository _databaseRepository;
        private readonly IMapper _mapper;

        public DatabaseService(
            IDatabaseRepository databaseRepository,
            IMapper mapper)
        {
            _databaseRepository = databaseRepository;
            _mapper = mapper;
        }

        public async Task<IList<SanctionedEntityWebVM>> GetSanctionedEntitiesAsync(CancellationToken cancellationToken)
        {
            var entities = await _databaseRepository.GetSanctionedEntitiesAsync(cancellationToken);

            return _mapper.Map<IList<SanctionedEntityWebVM>>(entities);
        }

        public async Task<SanctionedEntityWebVM> GetSanctionedEntityByIdAsync(Guid id, CancellationToken cancellationToken)
        {
            var entity = await _databaseRepository.GetSanctionedEntityByIdAsync(id, cancellationToken);

            return _mapper.Map<SanctionedEntityWebVM>(entity);
        }

        public async Task<SanctionedEntityWebVM> CreateSanctionedEntityAsync(AddSanctionedEntityRequest sanctionedEntityRequest, CancellationToken cancellationToken)
        {
            var newEntity = _mapper.Map<SanctionedEntity>(sanctionedEntityRequest);

            var createdEntity = await _databaseRepository.CreateSanctionedEntityAsync(newEntity, cancellationToken);

            return _mapper.Map<SanctionedEntityWebVM>(createdEntity);
        }

        public async Task ValidateAddSanctionedEntityAsync(AddSanctionedEntityRequest sanctionedEntity, CancellationToken cancellationToken)
        {
            await _databaseRepository.ValidateAddSanctionedEntityAsync(sanctionedEntity, cancellationToken);
        }
    }
}