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
            <textarea className="px-2 pt-2 pb-32 h-auto w-full rounded-lg focus-visible:outline-none" placeholder={placeholderText} data-testid={dataTestId} value={value} onChange={onChange}/>
        </>
    )
}