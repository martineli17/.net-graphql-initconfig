using Domain.Entities;

namespace Domain.Interfaces.Repositories
{
    public interface IClientRepository
    {
        Task AddAsync(Client client, CancellationToken cancellationToken);
        IQueryable<Client> GetAll();
    }
}
