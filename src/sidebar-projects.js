import { newTask } from "./newTask";

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
  allProjects.appendChild(projectList);

  const addProject = document.createElement("li");
  addProject.id = "addTask";
  addProject.innerHTML = "New Project";
  projectList.appendChild(addProject);

  addProject.addEventListener("click", () => {
    newTask();
  });
}
