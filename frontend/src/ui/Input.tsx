interface IInputProps {
    dataTestId: string;
    placeholderText: string;
}

export const Input = ({ dataTestId, placeholderText }: IInputProps) => {
    return (
        <>
            <input className="p-2 h-auto w-full rounded-lg focus-visible:outline-none" placeholder={placeholderText} data-testid={dataTestId} type="text"/>
        </>
    )
}