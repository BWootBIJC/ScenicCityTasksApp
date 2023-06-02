interface ITaskDescriptionProps {
    title: string;
    description: string;
    dataTestId: string;
}

export const TaskDescription = ({title, description, dataTestId}: ITaskDescriptionProps) => {
    return (
        <>
            <div data-testid={dataTestId}>
                <h1>{title}</h1>
                <p>{description}</p>
            </div>
        </>
    )
}