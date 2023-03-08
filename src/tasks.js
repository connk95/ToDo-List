import { myProjects } from "./index";

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
  let currentProject = document.querySelector("#subtitle").value;
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

  let obj = myProjects.find((o) => o.title === currentProject);
  console.log(newTask);
  console.log(obj);
  myProjects.push(obj.tasks);
}
