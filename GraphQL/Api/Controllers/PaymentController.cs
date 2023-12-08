using Domain.Entities;
using Domain.Interfaces.Repositories;
using Microsoft.AspNetCore.Mvc;
using System.Threading;
using System.Threading.Tasks;

namespace Api.Controllers
{
    [Route("api/payment")]
    public class PaymentController : ControllerBase
    {
        [HttpPost]
        public async Task<IActionResult> Add([FromServices] IPaymentRepository repository, 
            [FromBody] Payment payment,
            [FromServices] IUnitOfWork unitOfWork,
            CancellationToken cancellationToken)
        {
            await repository.AddAsync(payment, cancellationToken);
            await unitOfWork.CommitAsync(cancellationToken);

            return Ok();
        }
    }
}
