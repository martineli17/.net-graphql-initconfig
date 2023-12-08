
interface ModalFooterProps {
    children: React.ReactNode;
}

export const ModalFooter: React.FC<ModalFooterProps> = (props) => {
    return (
        <>
            <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b">
                {props.children}
            </div>
        </>
    )
}