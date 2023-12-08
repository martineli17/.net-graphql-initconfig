using Domain.Entities;

namespace Domain.Interfaces.Repositories
{
    public interface IPaymentRepository
    {
        Task AddAsync(Payment client, CancellationToken cancellationToken);
        IQueryable<Payment> GetAll();
    }
}
