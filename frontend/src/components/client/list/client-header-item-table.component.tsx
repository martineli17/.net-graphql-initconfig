interface Props {
    children: React.ReactNode;
}

export const ClientHeaderItemTable: React.FC<Props> = ({ children }) => {
    return (
        <>
            <div>
                <p className="italic text-xl">{children}</p>
            </div>
        </>
    )
}