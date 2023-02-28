import { myTasks } from "./index";

//factory function to make tasks
export const makeProject = (
  title,
  description,
  dueDate,
  priority,
  complete
) => {
  const project = {};
  project.title = title;
  project.description = description;
  project.dueDate = dueDate;
  project.priority = priority;
  project.complete = complete;
  return project;
};

//push tasks to array
export function pushTask(title, description, dueDate, priority, complete) {
  let newProject = makeProject(title, description, dueDate, priority, complete);
  myTasks.push(newProject);
}

//retrieve values for object
export function submitProject() {
  let titleValue = document.querySelector("#titleInput").value;
  let descriptionValue = document.querySelector("#descriptionInput").value;
  let dateValue = document.querySelector("#dateInput").value;
  let completeValue = false;
  const priorityCheck = document.querySelector("#priorityInput");
  let priorityValue = false;
  if (priorityCheck.checked == true) {
    priorityValue = true;
  }
  pushTask(
    titleValue,
    descriptionValue,
    dateValue,
    priorityValue,
    completeValue
  );
}
