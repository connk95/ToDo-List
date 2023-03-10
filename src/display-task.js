import { newProject } from "./new-project";
import { myProjects } from "./index";
import { removeForm } from "./new-project";

export function displayTaskInfo(projectTitle) {
  for (let i = myProjects.length - 1; i < myProjects.length; i++) {
    if (myProjects[i].title === projectTitle) {
      let taskArray = myProjects[i].tasks;
      for (let j = taskArray.length - 1; j < taskArray.length; j++) {
        const taskList = document.getElementById(`${projectTitle}List`);
        const newTask = document.createElement("li");
        newTask.innerHTML = taskArray[j].title;
        taskList.appendChild(newTask);
      }
    }
  }
}
