'use client';
import { useEffect, useState } from 'react';
import { useModalContext } from "@/contexts/modal.context"
import { ClientDetails } from "./client-details.component";
import { ClientDetailsModel } from '@/models/client.model';
import { getClientDetailsAsync } from '@/services/api/client.service';

export const ClientDetailsToogle: React.FC = () => {
    const { modal: { isOpen, type }, clientId } = useModalContext();
    const [clientDetails, setClientDetails] = useState<ClientDetailsModel>({} as ClientDetailsModel);

    useEffect(() => {
        async function handle() {
            const response = await getClientDetailsAsync(clientId);;
            setClientDetails(response);
        }
        if (clientId && isOpen && type === 'details')
            handle();
    }, [clientId]);

    return (
        <>
            {isOpen && type === 'details' && <ClientDetails clientDetails={clientDetails} />}
        </>
    )
}