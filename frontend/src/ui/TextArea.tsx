interface ITextAreaProps {
    placeholderText: string;
    dataTestId: string;
}
export const TextArea = ({ placeholderText, dataTestId  }: ITextAreaProps) => {
    return (
        <>
            <textarea className="px-2 pt-2 pb-32 h-auto w-full rounded-lg focus-visible:outline-none" placeholder={placeholderText} data-testid={dataTestId}/>
        </>
    )
}