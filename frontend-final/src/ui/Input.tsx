import {ChangeEvent, FormEvent} from "react";

interface IInputProps {
    dataTestId: string;
    placeholderText: string;
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({ dataTestId, placeholderText, value, onChange }: IInputProps) => {
    
    return (
        <>
            <input className="p-2 h-auto w-full rounded-lg focus-visible:outline-none" onChange={onChange} value={value} placeholder={placeholderText} data-testid={dataTestId} type="text"/>
        </>
    )
}