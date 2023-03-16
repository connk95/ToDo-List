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

export function displayThisDay(period) {
  const today = new Date();
  const isoDate = today.toISOString().slice(0, -14);
  for (let i = myProjects.length - 1; i < myProjects.length; i++) {
    const diffTime = Math.abs(myProjects[i].dueDate - isoDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    while (diffDays <= period) {
      const taskspace = document.querySelector("#taskspace");
      const todayList = document.createElement("ol");
      const thisProject = document.createElement("li");
      thisProject.innerHTML = myProjects[i].title;
      thisProject.id = `${myProjects[i].title}Period`;
      todayList.appendChild(thisProject);
      taskspace.appendChild(todayList);
      addListener(`${myProjects[i].title}Today`);
      // } else if (diffDays < 8) {
      //   const taskspace = document.querySelector("#taskspace");
      //   const todayList = document.createElement("ol");
      //   const thisProject = document.createElement("li");
      //   thisProject.innerHTML = myProjects[i].title;
      //   thisProject.id = `${myProjects[i].title}Week`;
      //   todayList.appendChild(thisProject);
      //   taskspace.appendChild(todayList);
      //   addListener(`${myProjects[i].title}Week`);
    }
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
