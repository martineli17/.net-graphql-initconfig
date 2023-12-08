import { useModalContext } from "@/contexts/modal.context";

export const ClientPaymentsFooterClose: React.FC = () => {
    const { handleCloseModal } = useModalContext();
    return (
        <>
            <button type="button"
                className="text-white bg-emerald-400 hover:bg-emerald-500
                        font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                onClick={handleCloseModal}
            >
                Fechar
            </button>
        </>
    )
}