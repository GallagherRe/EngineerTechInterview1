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
        public async Task<IActionResult> AddSanctionedEntity(SanctionedEntity newEntity)
        {
            // Perform validation and add the entity to your data store (e.g., database)



            // If the entity is successfully added, return a CreatedAtActionResult
            // return await CreatedAtAction(nameof(GetSanctionedEntityById), new { id = newEntity.Id }, newEntity);
            return await CreatedAtActionResult();
        }

        private Task<IActionResult> CreatedAtActionResult()
        {
            throw new NotImplementedException();
        }
    }
}
