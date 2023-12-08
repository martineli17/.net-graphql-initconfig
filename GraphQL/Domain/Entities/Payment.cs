namespace Domain.Entities
{
    public class Payment
    {
        public Guid Id { get; set; }
        public Guid ClientId { get; set; }
        public decimal Value { get; set; }
        public DateTime PaidWhen { get; set; }
        public Client Client { get; set; }
    }
}
