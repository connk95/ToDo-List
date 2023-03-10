import { displayProjectInfo, displayProject } from "./display-project";
import { myProjects } from "./index";

export function displayNewProject() {
  for (let i = myProjects.length - 1; i < myProjects.length; i++) {
    const projectList = document.querySelector("#projectList");
    const newSidebar = document.createElement("li");
    newSidebar.innerHTML = myProjects[i].title;
    newSidebar.id = `${myProjects[i].title}`;
    projectList.appendChild(newSidebar);
    addListener(myProjects[i].title);
  }
}

function addListener(title) {
  let thisProject = document.getElementById(`${title}`);
  thisProject.addEventListener("click", () => {
    displayProject(title);
    for (let i = myProjects.length - 1; i < myProjects.length; i++) {
      if (myProjects[i].title === title) {
        displayProjectInfo(
          myProjects[i].title,
          myProjects[i].description,
          myProjects[i].dueDate
        );
      }
    }
  });
}
