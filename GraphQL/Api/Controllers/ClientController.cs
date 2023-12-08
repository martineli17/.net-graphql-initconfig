using Domain.Entities;
using Domain.Interfaces.Repositories;
using Microsoft.AspNetCore.Mvc;
using System.Threading;
using System.Threading.Tasks;

namespace Api.Controllers
{
    [Route("api/client")]
    public class ClientController : ControllerBase
    {
        [HttpPost]
        public async Task<IActionResult> Add([FromServices] IClientRepository repository,
            [FromServices] IUnitOfWork unitOfWork,
            [FromBody] Client client, 
            CancellationToken cancellationToken)
        {
            await repository.AddAsync(client, cancellationToken);
            await unitOfWork.CommitAsync(cancellationToken);

            return Ok();
        }
    }
}
