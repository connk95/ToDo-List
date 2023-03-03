//create projects tab to view and add projects

import { newProject } from "./new-project";
import { loadSubheader } from "./subheader";
import { removeForm } from "./new-project";

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

  //create link to add new project
  const addProject = document.createElement("li");
  addProject.id = "addProject";
  addProject.innerHTML = "New Project";
  projectList.appendChild(addProject);

  addProject.addEventListener("click", () => {
    loadSubheader(addProject.innerHTML);
    newProject();
  });
}
