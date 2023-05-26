interface IButtonProps {
    buttonText: string;
    dataTestId: string;
}

export const Button = ({buttonText, dataTestId}: IButtonProps) => {
    return (
        <>
            <button data-testid={dataTestId} className="bg-gray-900 py-3 px-8 text-white rounded-lg hover:bg-gray-400 duration-300 hover:shadow-lg hover:shadow-bg-gray-900 hover:text-zinc-950">{buttonText}</button>
        </>
    )
}