import { projectComplete } from "./complete";
import { newProject } from "./new-project";
import { loadSubheader } from "./subheader";

export function displayProject(title) {
  loadSubheader(title);
}

export function displayProjectInfo(title, desc, time) {
  const taskspace = document.querySelector("#taskspace");
  const descDiv = document.createElement("div");
  descDiv.id = "taskDesc";
  const thisDesc = document.createElement("p");
  thisDesc.id = "projectDesc";
  thisDesc.innerHTML = `${desc}`;
  const finishProject = document.createElement("button");
  finishProject.innerHTML = "Complete";
  finishProject.id = `${title}Complete`;
  finishProject.addEventListener("click", () => {
    console.log(title);
    projectComplete(title);
  });
  descDiv.appendChild(thisDesc);
  descDiv.appendChild(finishProject);
  taskspace.appendChild(descDiv);

  const subheader = document.querySelector("#subheader");
  const dueDiv = document.createElement("div");
  const thisTime = document.createElement("p");
  thisTime.innerHTML = `Due: ${time}`;
  dueDiv.appendChild(thisTime);
  subheader.appendChild(dueDiv);

  const taskList = document.createElement("ol");
  taskList.id = `${title}List`;
  const addTask = document.createElement("li");
  addTask.id = "addTask";
  addTask.innerHTML = "New Task";
  taskList.appendChild(addTask);
  taskspace.appendChild(taskList);

  addTask.addEventListener("click", () => {
    newProject();
  });
}
