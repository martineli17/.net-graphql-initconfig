
'use client';

import { useModalContext } from "@/contexts/modal.context";

interface ModalHeaderProps {
    children: React.ReactNode;
}

export const ModalHeader: React.FC<ModalHeaderProps> = (props) => {
    const { handleCloseModal } = useModalContext();
    return (
        <>
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
                {props.children}
                <button type="button"
                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg 
                                text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
                    data-modal-hide="default-modal"
                    onClick={handleCloseModal}
                >
                    <svg className="w-3 h-3" aria-hidden="true" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                    </svg>
                    <span className="sr-only">Close modal</span>
                </button>
            </div>
        </>
    )
}