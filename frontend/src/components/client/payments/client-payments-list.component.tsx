import { ClientPaymentsModel } from "@/models/client.model";

interface ClientPaymentsListProps {
    clientPayments: ClientPaymentsModel[];
}

export const ClientPaymentsList: React.FC<ClientPaymentsListProps> = (props) => {
    return (
        <ul role="list" className="divide-y divide-gray-100">
            <li className="flex justify-between py-3 px-5">
                <div className="w-24 text-gray-400">
                    Data
                </div>
                <div className="w-24 text-gray-400">
                    Valor
                </div>
            </li>
            {
                props.clientPayments.map((payment) => (
                    <>
                        <li key={payment.id} className="flex justify-between py-3 px-5">
                            <div className="mt-1 w-full text-sm  text-gray-500">
                                {new Date(payment.paidWhen).toLocaleDateString("pt-BR", {
                                    day: '2-digit',
                                    year: 'numeric',
                                    month: 'short'
                                })}
                            </div>
                            <div className="mt-1 w-28 text-sm text-ellipsis text-gray-500">
                                {payment.value.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}
                            </div>
                        </li>
                    </>
                ))
            }
        </ul>
    )
}