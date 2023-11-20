using ajg_technical_interview.ClientApp.ResponseTypes;
using ajg_technical_interview.Models;
using ajg_technical_interview.Services;
using Microsoft.AspNetCore.Http;
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
        [ProducesResponseType(typeof(IList<SanctionedEntity>), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
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
        [ProducesResponseType(typeof(SanctionedEntity), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public async Task<IActionResult> GetByIdAsync(Guid id)
        {
            try
            {
                OneOf<SanctionedEntity, NotFound> entity = await _databaseService.GetSanctionedEntityByIdAsync(id);

                return entity.Match<IActionResult>(
                   sanctionedEntity => Ok(sanctionedEntity),
                   notFound => NotFound());
            }
            catch (Exception ex)
            {
                return Problem(ex.Message);
            }
        }

        [HttpPost]
        [ProducesResponseType(typeof(SanctionedEntity), 201)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public async Task<IActionResult> CreateAsync(CreateSanctionedModel createSanctioned)
        {
            try
            {
                SanctionedEntity sanctionedEntity = createSanctioned.MapToSanctionedEntity();
                OneOf<SanctionedEntity, IsNotUnique> result = await _databaseService.CreateSanctionedEntityAsync(sanctionedEntity);

                return result.Match<IActionResult>(
                    sanctionedEntity => CreatedAtAction(nameof(GetByIdAsync), new { id = sanctionedEntity.Id }, createSanctioned),
                    IsNotUnique => BadRequest("Duplicate Name and Domicle"));
            }
            catch (Exception ex)
            {
                return Problem(ex.Message);
            }
        }
    }
}
