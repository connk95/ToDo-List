import { myTasks } from "./tasks";

export function displayTask() {
  for (let i = myTasks.length - 1; i < myTasks.length; i++) {
    const projectList = document.querySelector("#projectList");
    const newSidebar = document.createElement("li");
    newSidebar.innerHTML = `${titleValue}`;
    newSidebar.id = `task${myLibrary.length - 1}`;
    projectList.appendChild(newSidebar);
  }
}
