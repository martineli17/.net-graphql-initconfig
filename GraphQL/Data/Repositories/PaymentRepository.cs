using Data.Base;
using Domain.Entities;
using Domain.Interfaces.Repositories;

namespace Data.Repositories
{
    public class PaymentRepository : IPaymentRepository
    {
        private readonly DataBaseContext _context;

        public PaymentRepository(DataBaseContext context)
        {
            _context = context;
        }

        public async Task AddAsync(Payment payment, CancellationToken cancellationToken)
        {
            await _context.Payment.AddAsync(payment, cancellationToken);
        }

        public IQueryable<Payment> GetAll()
        {
            return _context.Payment.AsQueryable();
        }
    }
}
