import { newProject } from "./new-project";
import { myProjects } from "./index";

export function displayTaskInfo(projectTitle) {
  let obj = myProjects.find((o) => o.title === projectTitle);

  for (let i = obj.tasks.length - 1; i < obj.tasks.length; i++) {
    const taskList = document.getElementById(`${projectTitle}List`);
    const newTask = document.createElement("li");
    newTask.innerHTML = obj.tasks[i].title;
    newTask.id = `${obj.tasks[i].title}`;
    taskList.appendChild(newTask);
  }
}
