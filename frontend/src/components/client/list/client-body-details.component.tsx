'use client';
import { useModalContext } from "@/contexts/modal.context";

interface ClientBodyDetailsProps {
    clientId: string;
}

export const ClientBodyDetails: React.FC<ClientBodyDetailsProps> = (props) => {
    const { handleOpenModal, handleSetClientId } = useModalContext();

    function handleOnClick() {
        handleSetClientId(props.clientId);
        handleOpenModal("details");
    }

    return (
        <button type="button"
            className="hover:bg-emerald-500 hover:transition-all py-2 px-3
                        bg-emerald-400 text-white text-xs font-semibold 
                        rounded-md shadow focus:outline-none"
            tabIndex={-1}
            onClick={handleOnClick}
        >
            Detalhes
        </button>
    )
}