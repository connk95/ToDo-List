//create sidebar with home tabs and project list

import { loadHome } from "./sidebar-home";
import { loadProjects } from "./sidebar-projects";

export function createSidebar() {
  const bodyDiv = document.querySelector("#bodyDiv");

  //create sidebar
  const sidebar = document.createElement("div");
  sidebar.id = "sidebar";
  bodyDiv.appendChild(sidebar);

  // //create home div for periods of projects **for future version**
  // const sidebarHome = document.createElement("div");
  // sidebarHome.id = "sidebarHome";
  // sidebar.appendChild(sidebarHome);
  // loadHome();

  //create project list to hold all projects
  const sidebarProjects = document.createElement("div");
  sidebarProjects.id = "sidebarProjects";
  sidebar.appendChild(sidebarProjects);
  loadProjects();
}
