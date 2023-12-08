import { ClientDetailsModel, ClientModel, ClientPaymentsModel } from "@/models/client.model";

export async function getClientsAsync(skip: number = 0, take: number = 10): Promise<ClientModel[]> {
    const query = {
        query: `{
        clients
            (
                skip: ${skip},
                take: ${take},
                order: [{ name: ASC }]
            )
            {
                items {
                    name
                    id
                }
            }
        }
        `
    }

    const response = await fetch("http://localhost:5075/graphql",
        {
            method: "POST",
            body: JSON.stringify(query),
            headers: {
                "Content-Type": "application/json",
            },
            cache: 'no-store'
        });

    const content = await response.json();

    return content.data?.clients?.items as ClientModel[];
}

export async function getClientDetailsAsync(idClient: string): Promise<ClientDetailsModel> {
    const query = {
        query: `{
        clients
            (
                where: {
                    id: {eq: "${idClient}"}
                }
            )
            {
                items {
                    name
                    email
                }
            }
        }
        `
    }

    const response = await fetch("http://localhost:5075/graphql",
        {
            method: "POST",
            body: JSON.stringify(query),
            headers: {
                "Content-Type": "application/json",
            },
            cache: 'no-store'
        });

    const content = await response.json();

    return content.data?.clients?.items?.[0] as ClientDetailsModel;
}

export async function getClientPaymentsAsync(idClient: string): Promise<ClientPaymentsModel[]> {
    const query = {
        query: `{
        payments
            (
                where: {
                    clientId: {eq: "${idClient}"}
                }
            )
            {
                items {
                    value
                    paidWhen
                }
            }
        }
        `
    }

    const response = await fetch("http://localhost:5075/graphql",
        {
            method: "POST",
            body: JSON.stringify(query),
            headers: {
                "Content-Type": "application/json",
            },
            cache: 'no-store'
        });

    const content = await response.json();
    return content.data?.payments?.items as ClientPaymentsModel[];
}