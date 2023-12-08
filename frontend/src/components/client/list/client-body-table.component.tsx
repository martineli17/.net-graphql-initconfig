import { ClientModel } from "@/models/client.model";
import { getClientsAsync } from "@/services/api/client.service";
import { ClientBodyDetails } from "./client-body-details.component";
import { ClientBodyPayments } from "./client-body-payments.component";

async function getDataAsync(): Promise<ClientModel[]> {
    return await getClientsAsync();
}

export const ClientBodyTable: React.FC = async () => {
    const clients = await getDataAsync();

    return (
        <>
            {
                clients?.map((client) => (
                    <li key={client.id} className="flex justify-between py-3 px-5 pl-12 pr-12">
                        <div className="mt-1 w-20 truncate text-sm text-ellipsis text-gray-400">
                            {client.name}
                        </div>
                        <div className="mt-1 w-22 truncate text-ellipsis leading-5 text-gray-400">
                            <ClientBodyDetails clientId={client.id} />
                        </div>
                        <div className="mt-1 w-18 truncate text-ellipsis leading-5 text-gray-400">
                            <ClientBodyPayments clientId={client.id} />
                        </div>
                    </li>
                ))
            }
        </>
    )
}