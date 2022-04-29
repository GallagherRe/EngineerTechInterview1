using System;
using System.Linq;
using System.Threading.Tasks;
using ajg_technical_interview.Domain.Interfaces;
using ajg_technical_interview.Mappers;
using Microsoft.AspNetCore.Mvc;

namespace ajg_technical_interview.Controllers
{
    [ApiController]
    [Route("api/sanctioned-entities")]
    public class SanctionedEntitiesController : ControllerBase
    {
        private readonly IDatabaseService _databaseService;
        private readonly ISanctionedEntityMapper _sanctionedEntityMapper;

        public SanctionedEntitiesController(IDatabaseService databaseService, ISanctionedEntityMapper sanctionedEntityMapper)
        {
            _databaseService = databaseService;
            _sanctionedEntityMapper = sanctionedEntityMapper;
        }


        [HttpGet]
        public async Task<IActionResult> GetSanctionedEntities()
        {
            try
            {
                var entities = await _databaseService.GetSanctionedEntitiesAsync();
                return Ok(entities.Select(_sanctionedEntityMapper.Map));
            }
            catch (Exception ex)
            {
                return Problem(ex.Message);
            }
            
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetSanctionedEntityById(Guid id)
        {
            try
            {
                var entity = await _databaseService.GetSanctionedEntityByIdAsync(id);
                
                if(entity == null) return NotFound();

                return Ok(_sanctionedEntityMapper.Map(entity));
            }
            catch (Exception ex)
            {
                return Problem(ex.Message);
            }
        }

        [HttpPost]
        public async Task<IActionResult> CreateSanctionedEntity(Models.SanctionedEntity entity)
        {
            try
            {
                Domain.SanctionedEntity mappedEntity = _sanctionedEntityMapper.Map(entity);

                if (await _databaseService.SanctionedEntityExistsAsync(mappedEntity)) return BadRequest("Entity already exists");

                var savedEntity = await _databaseService.CreateSanctionedEntityAsync(mappedEntity);

                return CreatedAtAction(nameof(GetSanctionedEntityById), new { id = savedEntity.Id });
            }
            catch (Exception ex)
            {
                return Problem(ex.Message);
            }
        }
    }
}
