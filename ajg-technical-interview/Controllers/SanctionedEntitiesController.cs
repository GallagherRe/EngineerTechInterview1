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
    [Route("api/sanctionedentities")]
    public class SanctionedEntitiesController : ControllerBase
    {
        private readonly IDatabaseService _databaseService;

        public SanctionedEntitiesController(IDatabaseService databaseService)
        {
            _databaseService = databaseService;
        }


        [HttpGet]
        public async Task<ActionResult<IEnumerable<SanctionedEntity>>> GetSanctionedEntities()
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
        public async Task<ActionResult<SanctionedEntity>> AddEntity(SanctionedEntity sanctionedEntity)
        {
            try
            {                
                if (_databaseService.EntityExists(sanctionedEntity))
                    return Conflict("Entity already exists");

                var newEntity = await _databaseService.CreateSanctionedEntityAsync(sanctionedEntity);
                return Ok(newEntity);
            }
            catch (Exception ex)
            {
                return Problem(ex.Message);
            }
        }

    }
}
