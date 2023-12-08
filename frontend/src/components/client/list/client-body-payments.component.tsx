'use client';
import { useModalContext } from "@/contexts/modal.context";

interface ClientBodyPaymentsProps {
    clientId: string;
}

export const ClientBodyPayments: React.FC<ClientBodyPaymentsProps> = (props) => {
    const { handleOpenModal, handleSetClientId } = useModalContext();

    function handleOnClick() {
        handleSetClientId(props.clientId);
        handleOpenModal("payments");
    }

    return (
        <button type="button"
            className="hover:bg-emerald-500 hover:transition-all py-2 px-3
                        bg-emerald-400 text-white text-xs font-semibold 
                        rounded-md shadow focus:outline-none"
            tabIndex={-1}
            onClick={handleOnClick}
        >
            Pagamentos
        </button>
    )
}