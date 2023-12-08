﻿using Domain.Entities;
using Domain.Interfaces.Repositories;
using HotChocolate;
using HotChocolate.Data;
using HotChocolate.Types;
using System.Linq;

namespace Api.GraphQL.Queries
{
    [ExtendObjectType("query")]
    public class PaymentQueryType
    {
        [GraphQLName("payments")]
        [UseOffsetPaging]
        [UseProjection]
        [UseFiltering]
        [UseSorting]
        public IQueryable<Payment> GetPayments([Service] IPaymentRepository repository)
        {
            return repository.GetAll();
        }
    }

    //OTHER POSSIBILITY TO USE
    //public class ClientQueryType : ObjectType 
    //{
    //    protected override void Configure(IObjectTypeDescriptor descriptor)
    //    {
    //        descriptor
    //            .Field("clients")
    //            .UseOffsetPaging<ObjectType<Client>>()
    //            .UseProjection()
    //            .UseFiltering()
    //            .UseSorting()
    //            .Resolve<IQueryable<Client>>(context =>
    //            {
    //                var repository = context.Service<IClientRepository>();
    //                return repository.GetAll();
    //            });
    //    }
    //}
}
