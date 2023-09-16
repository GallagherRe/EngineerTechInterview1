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
        private object GetSanctionedEntityById;

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
            // Perform validation, check for any duplicate and if no duplicate found then add the entity to your data store (e.g., database)
            try
            {
                // 1. Perform Validation and Check for Duplicates
                if (newEntity == null)
                {
                    return BadRequest("Invalid input. The new entity is null.");
                }

                // Add additional validation logic here as needed.
                if(newEntity.Name == null || newEntity.Domicile == null)
                {
                    return BadRequest("Invalid input. The new entity name or domicile is null.");
                }
                // Check for duplicates based on your business logic
                if (await IsDuplicateSanctionedEntityAsync(newEntity.Name, newEntity.Domicile))
                {
                    return BadRequest("Duplicate entity. This entity already exists.");
                }

                // 2. Add the Entity to the Data Store
                var result = await _databaseService.CreateSanctionedEntityAsync(newEntity);

                // 3. Return Appropriate Action Results
                if (result != null)
                {
                    // Entity was successfully added
                    return CreatedAtAction(nameof(GetSanctionedEntityById), new { id = result.Id }, result);
                }
                else
                {
                    // An error occurred while adding the entity
                    return StatusCode(500, "An error occurred while adding the sanctioned entity.");
                }
            }
            catch (Exception ex)
            {
                // Handle any unexpected exceptions
                return StatusCode(500, $"An unexpected error occurred: {ex.Message}");
            }
           
        }

        public async Task<bool> IsDuplicateSanctionedEntityAsync(string Name, string Domicile)
        {
            var result = await _databaseService.GetSanctionedEntityByNameAndDomicileAsync(
                Name,
                Domicile);
            return result != null; 
        }
    }
 }
