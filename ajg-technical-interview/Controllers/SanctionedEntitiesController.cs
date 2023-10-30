using System;
using System.Threading.Tasks;
using ajg_technical_interview.Exceptions;
using ajg_technical_interview.Models;
using ajg_technical_interview.Services;
using Microsoft.AspNetCore.Mvc;

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
        public async Task<IActionResult> GetSanctionedEntities()
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
        
        [HttpPost]
        public async Task<IActionResult> PostSanctionedEntity([FromBody] SanctionedEntity sanctionedEntity)
        {
            try
            {
                if (!ModelState.IsValid)
                {
                    return BadRequest(ModelState);
                }

                var entity = await _databaseService.CreateSanctionedEntityAsync(sanctionedEntity);
                return CreatedAtAction(nameof(PostSanctionedEntity), entity);
            }
            catch (DuplicatedSanctionedEntityException ex)
            {
                return Conflict(ex.Message);
            }
            catch (Exception ex)
            {
                return Problem(ex.Message);
            }
        }
    }
}
