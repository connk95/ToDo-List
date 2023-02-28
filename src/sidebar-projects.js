//create projects tab to view and add projects

import { newTask } from "./new-task";
import { myTasks } from "./index";

export function loadProjects() {
  const sidebarProjects = document.querySelector("#sidebarProjects");

  const projectsTitle = document.createElement("div");
  projectsTitle.id = "projectsTitle";
  const title = document.createElement("h2");
  title.innerHTML = "Projects";
  projectsTitle.appendChild(title);
  sidebarProjects.appendChild(projectsTitle);

  const allProjects = document.createElement("div");
  allProjects.id = "allProjects";
  sidebarProjects.appendChild(allProjects);

  const projectList = document.createElement("ol");
  projectList.id = "projectList";
  allProjects.appendChild(projectList);

  //create link to add new task
  const addProject = document.createElement("li");
  addProject.id = "addTask";
  addProject.innerHTML = "New Project";
  projectList.appendChild(addProject);

  addProject.addEventListener("click", () => {
    newTask();
    console.log(myTasks);
  });
}
