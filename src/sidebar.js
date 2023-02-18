import { loadHome } from "./sidebar-home";
import { loadProjects } from "./sidebar-projects";

export function createSidebar() {
  const bodyDiv = document.querySelector("#bodyDiv");

  //create sidebar
  const sidebar = document.createElement("div");
  sidebar.id = "sidebar";
  bodyDiv.appendChild(sidebar);

  //create home div for periods of tasks
  const sidebarHome = document.createElement("div");
  sidebarHome.id = "sidebarHome";
  sidebar.appendChild(sidebarHome);
  loadHome();

  //create task list to hold all tasks
  const sidebarProjects = document.createElement("div");
  sidebarProjects.id = "sidebarProjects";
  sidebar.appendChild(sidebarProjects);
  loadProjects();
}
