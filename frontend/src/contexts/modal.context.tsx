'use client';
import { createContext, useContext, useState } from 'react';

interface ModalContextProviderProps {
    children: React.ReactNode;
}

interface ModalContextPropsType {
    clientId: string;
    modal: { isOpen: boolean, type?: 'details' | 'payments' | null };
    handleOpenModal(type: 'details' | 'payments'): void;
    handleCloseModal(): void;
    handleSetClientId(clientId: string): void;
}

const ModalContext = createContext<ModalContextPropsType>({} as ModalContextPropsType);

export function ModalContextProvider({ children }: ModalContextProviderProps) {
    const [modal, setModal] = useState<{ isOpen: boolean, type?: 'details' | 'payments' | null }>({ isOpen: false });
    const [clientId, setClientId] = useState<string>("");

    function handleOpenModal(type: 'details' | 'payments') {
        setModal({ isOpen: true, type });
    }

    function handleCloseModal() {
        setModal({ isOpen: false });
    }

    function handleSetClientId(clientId: string) {
        setClientId(clientId);
    }

    return (
        <ModalContext.Provider value={{ modal, clientId, handleOpenModal, handleCloseModal, handleSetClientId }}>
            {children}
        </ModalContext.Provider>
    )
}

export function useModalContext() {
    const context = useContext(ModalContext);
    return context;
}