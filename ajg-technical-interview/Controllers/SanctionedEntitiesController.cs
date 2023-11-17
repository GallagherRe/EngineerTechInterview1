using ajg_technical_interview.Models;
using ajg_technical_interview.Services;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Threading.Tasks;

namespace ajg_technical_interview.Controllers
{
    [ApiController]
    [Route("api/sanctioned-entities")]
    public class SanctionedEntitiesController : ControllerBase
    {
        private readonly IDatabaseService _databaseService;

        public SanctionedEntitiesController(IDatabaseService databaseService)
        {
            _databaseService = databaseService;
        }

        [HttpGet]
        public async Task<IActionResult> GetSanctionedEntitiesASync()
        {
            try
            {
                var entities = await _databaseService.GetSanctionedEntitiesAsync();
                return Ok(entities);
            }
            catch (Exception ex)
            {
                return Problem(ex.Message);
            }

        }

        [HttpGet("{id:Guid}")]
        public async Task<IActionResult> GetByIdAsync(Guid id)
        {
            var entity = await _databaseService.GetSanctionedEntityByIdAsync(id);

            return entity.Match<IActionResult>(
               sanctionedEntity => Ok(entity),
               notFound => NotFound());
        }

        [HttpPost]
        public async Task<IActionResult> CreateAsync(CreateSanctionedEntity entity)
        {
            SanctionedEntity sanctionedEntity = entity.MapToSanctionedEntity();
            var result = await _databaseService.CreateSanctionedEntityAsync(sanctionedEntity);

            return result.Match<IActionResult>(
                sanctionedEntity => CreatedAtAction(nameof(GetByIdAsync), new { id = sanctionedEntity.Id }, entity),
                IsNotUnique => BadRequest("Duplicate Name and Domicle"));
        }
    }
}
