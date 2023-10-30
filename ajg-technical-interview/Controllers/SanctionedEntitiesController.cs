using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
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
        [Route("add")]
        public async Task<ActionResult> AddSanctionedEntity([FromBody] SanctionedEntity entity)
        {
            try
            {
                var newEntity = await _databaseService.CreateSanctionedEntityAsync(entity);
                return Ok(newEntity);
            }
            catch (Exception ex)
            {
                return Problem(ex.Message);
            }
        }

    }
}
