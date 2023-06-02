import {ChangeEvent} from "react";

interface ITextAreaProps {
    placeholderText: string;
    dataTestId: string;
    value: string;
    onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}
export const TextArea = ({ placeholderText, dataTestId, value, onChange }: ITextAreaProps) => {
    return (
        <>
            <textarea className="text-area" placeholder={placeholderText} data-testid={dataTestId} value={value} onChange={onChange}/>
        </>
    )
}