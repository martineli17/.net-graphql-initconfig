interface Props {
    children: React.ReactNode;
}

export const ClientTable: React.FC<Props> = ({ children }) => {
    return (
        <>
            <ul role="list" className="divide-y divide-gray-100">
                {children}
            </ul>
        </>
    )
}