interface ModalProps {
    children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = (props) => {
    return (
        <>
            <div tabIndex={-1} aria-hidden="true" 
                className="overflow-y-auto overflow-x-auto fixed z-50 justify-center w-full">
                <div className="relative p-4 w-full max-w-2xl max-h-full m-auto">
                    <div className="relative bg-white rounded-lg shadow ">
                        {props.children}
                    </div>
                </div>
            </div>
        </>
    )
}