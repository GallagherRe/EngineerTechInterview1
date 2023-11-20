using ajg_technical_interview.ClientApp.ResponseTypes;
using ajg_technical_interview.Models;
using ajg_technical_interview.Services;
using Microsoft.AspNetCore.Mvc;
using OneOf;
using OneOf.Types;
using System;
using System.Collections.Generic;
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
                IList<SanctionedEntity> entities = await _databaseService.GetSanctionedEntitiesAsync();
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
            OneOf<SanctionedEntity, NotFound> entity = await _databaseService.GetSanctionedEntityByIdAsync(id);

            return entity.Match<IActionResult>(
               sanctionedEntity => Ok(entity),
               notFound => NotFound());
        }

        [HttpPost]
        public async Task<IActionResult> CreateAsync(CreateSanctionedModel createSanctioned)
        {
            SanctionedEntity sanctionedEntity = createSanctioned.MapToSanctionedEntity();
            OneOf<SanctionedEntity, IsNotUnique> result = await _databaseService.CreateSanctionedEntityAsync(sanctionedEntity);

            return result.Match<IActionResult>(
                sanctionedEntity => CreatedAtAction(nameof(GetByIdAsync), new { id = sanctionedEntity.Id }, createSanctioned),
                IsNotUnique => BadRequest("Duplicate Name and Domicle"));
        }
    }
}
