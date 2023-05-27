import {MouseEventHandler} from "react";

interface IButtonProps {
    buttonText: string;
    dataTestId: string;
    onClick: MouseEventHandler<HTMLButtonElement>;
}

export const Button = ({buttonText, dataTestId, onClick}: IButtonProps) => {
    return (
        <>
            <button type="button" data-testid={dataTestId} onClick={onClick} className="bg-gray-900 py-3 px-8 text-white rounded-lg hover:bg-gray-400 duration-300 hover:shadow-lg hover:shadow-bg-gray-900 hover:text-zinc-950">{buttonText}</button>
        </>
    )
}