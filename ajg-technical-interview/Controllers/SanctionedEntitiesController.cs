using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
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

        [HttpGet("{id}")]
        public async Task<IActionResult> GetSanctionedEntitiesById(Guid id)
        {
            try
            {
                var entity = await _databaseService.GetSanctionedEntityByIdAsync(id);
                
                if(entity is null)
                {
                    return NotFound();
                }

                return Ok(entity);
            }
            catch (Exception ex)
            {
                return Problem(ex.Message);
            }

        }

        [HttpPost]
        public async Task<IActionResult> AddSanctionedEntity([FromBody] SanctionedEntity sanctionedEntity)
        {
            /*
             * The validation done in the frontend if the entity already has name and domicily should be done here as well if critical for the system
             * as the frontend being clientside can't be manipulated.
             */
            try
            {
                var entity = await _databaseService.CreateSanctionedEntityAsync(sanctionedEntity);
                return Ok();
            }
            catch (Exception ex)
            {
                return Problem(ex.Message);
            }
        }

    }
}
