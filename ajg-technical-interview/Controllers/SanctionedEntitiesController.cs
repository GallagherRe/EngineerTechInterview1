using System;
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

        // ideally these two not in controller, but time....
        private bool ValidateEntity(SanctionedEntity sanctionedEntity) => (
            !String.IsNullOrWhiteSpace(sanctionedEntity.Name)
            &&
            !String.IsNullOrWhiteSpace(sanctionedEntity.Domicile)
        );

        // would normally go to the backing store for this check - but not touching the database service for the purpose of this test
        // though this is not efficient...
        private async Task<bool> CheckDuplicateEntityAsync(SanctionedEntity sanctionedEntity) => (
            !(await _databaseService.GetSanctionedEntitiesAsync())
                .Any(existingEntity => existingEntity.Name == sanctionedEntity.Name && existingEntity.Domicile == sanctionedEntity.Domicile)
        );

        [HttpGet]
        public async Task<IActionResult> GetSanctionedEntitiesAsync()
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

        [HttpPost("Check")]
        public async Task<IActionResult> CheckEntityAsync([FromBody] SanctionedEntity sanctionedEntity)
        {
            // try is ugly, but rushing, should use exceptionhandler and error controller
            try
            {
                if (!this.ValidateEntity(sanctionedEntity))
                {
                    return ValidationProblem("Name or Domicile Blank");
                }
                return Ok(await this.CheckDuplicateEntityAsync(sanctionedEntity));
            }
            catch (Exception ex)
            {
                return Problem(ex.Message);
            }
        }

        [HttpPost]
        public async Task<IActionResult> AddSanctionedEntity([FromBody] SanctionedEntity sanctionedEntity)
        {
            try
            {
                if (!this.ValidateEntity(sanctionedEntity))
                {
                    return ValidationProblem("Name or Domicile Blank");
                }
                if (!await this.CheckDuplicateEntityAsync(sanctionedEntity))
                {
                    return ValidationProblem("Name and Domicile match existing");
                }
                return Ok(await _databaseService.CreateSanctionedEntityAsync(sanctionedEntity));
            }
            catch (Exception ex)
            {
                return Problem(ex.Message);
            }
        }
    }
}
