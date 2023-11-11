import {TaskCreateViewModel} from "../viewModels/TaskCreateViewModel";
import {TaskCard} from "../domain/TaskCard";
import {TaskToViewModelMapper} from "./TaskToViewModelMapper";

describe("TaskToViewModelMapper", () => {
   let task: TaskCard;
   let taskCreateViewModel: TaskCreateViewModel;
   
   beforeEach(() => {
       task = new TaskCard(1, "task", "description");
   });
   
   it("Calling MapTaskToTaskCreateViewModel maps correctly", () => {
       const result = TaskToViewModelMapper.MapTaskToTaskCreateViewModel(task);
       expect(result.id).toBe(1);
       expect(result.title).toBe("task");
       expect(result.description).toBe("description");
   });
});