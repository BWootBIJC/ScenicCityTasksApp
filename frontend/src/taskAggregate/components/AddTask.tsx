import {Input} from "../../ui/Input";
import {TextArea} from "../../ui/TextArea";
import {Button} from "../../ui/Button";

interface IAddTaskProps {
    dataTestId: string;
}

export const AddTask = ({ dataTestId }: IAddTaskProps) => {
    
    return (
        <>
            <div className="p-10 bg-slate-300 rounded-lg shadow-lg mb-20">
                <h1 className="mb-7 text-zinc-950" role="h1">Add Task</h1>
                <div className="flex justify-between items-center"
                    data-testid={dataTestId}>
                    <div className="flex flex-col space-y-5 w-96">
                        <Input dataTestId="input" placeholderText="Title"/>
                        <TextArea placeholderText="Description..." dataTestId="textArea"/>
                    </div>
                    <Button
                        buttonText="Add Task"
                        dataTestId="button"/>
                </div>
            </div>
        </>
    )
}