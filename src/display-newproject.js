import { displayProjectInfo, displayProject } from "./display-project";
import { myProjects } from "./index";
import { clearPage } from "./new-project";

// display new projects on sidebar
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

// for future version with period view
// export function displayThisDay(period) {
//   const today = new Date();
//   //const isoDate = today.toISOString().slice(0, -14);
//   for (let i = myProjects.length - 1; i < myProjects.length; i++) {
//     const deadline = new Date(`${myProjects[i].dueDate}`);
//     const diffDays = (deadline - today) / (1000 * 60 * 60 * 24);
//     if (diffDays <= period) {
//       const taskspace = document.querySelector("#taskspace");
//       const todayDiv = document.createElement("div");
//       todayDiv.id = "subheader";
//       const thisProject = document.createElement("h3");
//       thisProject.id = `${myProjects[i].title}Today`;
//       thisProject.innerHTML = myProjects[i].title;
//       const thisDueDate = document.createElement("p");
//       thisDueDate.innerHTML = myProjects[i].dueDate;
//       todayDiv.appendChild(thisProject);
//       todayDiv.appendChild(thisDueDate);
//       taskspace.appendChild(todayDiv);
//       addListener(`${myProjects[i].title}Today`);
//       // } else if (diffDays < 8) {
//       //   const taskspace = document.querySelector("#taskspace");
//       //   const todayList = document.createElement("ol");
//       //   const thisProject = document.createElement("li");
//       //   thisProject.innerHTML = myProjects[i].title;
//       //   thisProject.id = `${myProjects[i].title}Week`;
//       //   todayList.appendChild(thisProject);
//       //   taskspace.appendChild(todayList);
//       //   addListener(`${myProjects[i].title}Week`);
//     }
//   }
// }

function addListener(title) {
  let thisProject = document.getElementById(`${title}`);
  thisProject.addEventListener("click", () => {
    if (document.querySelector("#subtitle") != null) {
      clearPage();
    }
    displayProject(title);
    for (let i = 0; i < myProjects.length; i++) {
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
