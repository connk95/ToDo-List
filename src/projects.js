import { myProjects } from "./index";

//factory function to make projects
export const makeProject = (
  title,
  description,
  dueDate,
  priority,
  complete,
  tasks
) => {
  const project = {};
  project.title = title;
  project.description = description;
  project.dueDate = dueDate;
  project.priority = priority;
  project.complete = complete;
  project.tasks = [];
  return project;
};

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
  let tasksArray = [];

  let newProject = makeProject(
    titleValue,
    descriptionValue,
    dateValue,
    priorityValue,
    completeValue
  );
  console.log(newProject);
  myProjects.push(newProject);
}
