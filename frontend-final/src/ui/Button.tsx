import {MouseEventHandler} from "react";

interface IButtonProps {
    buttonText: string;
    dataTestId: string;
    onClick: MouseEventHandler<HTMLButtonElement>;
}

export const Button = ({buttonText, dataTestId, onClick}: IButtonProps) => {
    return (
        <>
            <button
                type="button"
                data-testid={dataTestId}
                onClick={onClick}
                className="button"
            >
                {buttonText}
            </button>
        </>
    )
}