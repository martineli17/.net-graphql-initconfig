'use client';
import { useEffect, useState } from 'react';
import { useModalContext } from "@/contexts/modal.context"
import { ClientPayments } from "./client-payments.component";
import { ClientPaymentsModel } from '@/models/client.model';
import { getClientPaymentsAsync } from '@/services/api/client.service';

export const ClientPaymentsToogle: React.FC = () => {
    const { modal: { isOpen, type }, clientId } = useModalContext();
    const [clientPayments, setClientPayments] = useState<ClientPaymentsModel[]>([]);

    useEffect(() => {
        async function handle() {
            const response = await getClientPaymentsAsync(clientId);
            setClientPayments(response);
        }
        if (clientId && isOpen && type === 'payments')
            handle();
    }, [clientId]);

    return (
        <>
            {isOpen && type === 'payments' && <ClientPayments clientPayments={clientPayments} />}
        </>
    )
}