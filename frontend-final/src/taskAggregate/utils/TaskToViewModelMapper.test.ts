import {TaskCreateViewModel} from "../viewModels/TaskCreateViewModel";
import {Task} from "../domain/Task";
import {TaskToViewModelMapper} from "./TaskToViewModelMapper";

describe("TaskToViewModelMapper", () => {
   let task: Task;
   let taskCreateViewModel: TaskCreateViewModel;
   
   beforeEach(() => {
       task = new Task(1, "task", "description");
   });
   
   it("Calling MapTaskToTaskCreateViewModel maps correctly", () => {
       const result = TaskToViewModelMapper.MapTaskToTaskCreateViewModel(task);
       expect(result.id).toBe(1);
       expect(result.title).toBe("task");
       expect(result.description).toBe("description");
   });
});