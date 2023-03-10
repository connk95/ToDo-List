import { myProjects } from "./index";
import { displayTaskInfo } from "./display-task";

//factory function to make projects
export const makeTask = (title, description, dueDate, priority, complete) => {
  const task = {};
  task.title = title;
  task.description = description;
  task.dueDate = dueDate;
  task.priority = priority;
  task.complete = complete;
  return task;
};

//retrieve values for object
export function submitTask() {
  let titleValue = document.querySelector("#titleInput").value;
  let descriptionValue = document.querySelector("#descriptionInput").value;
  let dateValue = document.querySelector("#dateInput").value;
  let completeValue = false;
  const priorityCheck = document.querySelector("#priorityInput");
  let priorityValue = false;
  if (priorityCheck.checked == true) {
    priorityValue = true;
  }

  let newTask = makeTask(
    titleValue,
    descriptionValue,
    dateValue,
    priorityValue,
    completeValue
  );

  const currentProject = document.querySelector("#subtitle").innerHTML;
  for (let i = myProjects.length - 1; i < myProjects.length; i++) {
    if (myProjects[i].title === currentProject) {
      let taskArray = myProjects[i].tasks;
      taskArray.push(newTask);
    }
    console.log(newTask);
    console.log(myProjects[i]);

    displayTaskInfo(currentProject);
  }
}
