using Data.Base;
using Domain.Entities;
using Domain.Interfaces.Repositories;
using Microsoft.EntityFrameworkCore;

namespace Data.Repositories
{
    public class ClientRepository : IClientRepository
    {
        private readonly DataBaseContext _context;

        public ClientRepository(DataBaseContext context)
        {
            _context = context;
        }

        public async Task AddAsync(Client client, CancellationToken cancellationToken)
        {
            await _context.Client.AddAsync(client, cancellationToken);
        }

        public IQueryable<Client> GetAll()
        {
            return _context.Client.Include(x => x.Payments).AsQueryable();
        }
    }
}
