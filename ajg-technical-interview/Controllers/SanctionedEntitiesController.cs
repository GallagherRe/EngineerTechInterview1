using System;
using System.Threading;
using System.Threading.Tasks;
using ajg_technical_interview.Models.Requests;
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
        public async Task<IActionResult> GetSanctionedEntities(CancellationToken cancellationToken)
        {
            try
            {      
                var entities = await _databaseService.GetSanctionedEntitiesAsync(cancellationToken);

                return Ok(entities);
            }
            catch (Exception ex)
            {
                return Problem(ex.Message);
            }
        }

        [HttpPost]
        public async Task<IActionResult> AddSanctionedEntity([FromBody] AddSanctionedEntityRequest request, CancellationToken cancellationToken)
        {
            try
            {
                await _databaseService.ValidateAddSanctionedEntityAsync(request, cancellationToken);
                var entities = await _databaseService.CreateSanctionedEntityAsync(request, cancellationToken);

                return Ok(entities);
            }
            catch (Exception ex)
            {
                return Problem(ex.Message);
            }
        }
    }
}
