interface ModalContentProps {
    children: React.ReactNode;
}

export const ModalContent: React.FC<ModalContentProps> = (props) => {
    return (
        <>
            <div className="p-4 md:p-5 space-y-4">
                {props.children}
            </div>
        </>
    )
}