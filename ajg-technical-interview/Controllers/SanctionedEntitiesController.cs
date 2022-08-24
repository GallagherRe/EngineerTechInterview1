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
        public async Task<IActionResult> CreateSanctionedEntity([FromBody] SanctionedEntity sanctionedEntity)
        {
            try
            {
                if (!ModelState.IsValid) { return BadRequest(ModelState); }

                var entity = await _databaseService.CreateSanctionedEntityAsync(sanctionedEntity);
                return Ok(entity);
            }
            catch (Exception ex)
            {
                return Problem(ex.Message);
            }

        }

    }
}
