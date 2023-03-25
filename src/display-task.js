import { myProjects } from "./index";
import { taskComplete } from "./complete";

//display new task on project page
export function displayTaskInfo(projectTitle) {
  for (let i = myProjects.length - 1; i < myProjects.length; i++) {
    if (myProjects[i].title === projectTitle) {
      let taskArray = myProjects[i].tasks;
      for (let j = taskArray.length - 1; j < taskArray.length; j++) {
        const taskList = document.getElementById(`${projectTitle}List`);
        const newTask = document.createElement("div");
        newTask.id = `${taskArray[j].title}Div`;
        const titleDiv = document.createElement("div");
        const newTitle = document.createElement("h3");
        newTitle.innerHTML = taskArray[j].title;
        const newDate = document.createElement("p");
        newDate.innerHTML = taskArray[j].dueDate;
        titleDiv.appendChild(newTitle);
        titleDiv.appendChild(newDate);
        const descDiv = document.createElement("div");
        const newDesc = document.createElement("p");
        newDesc.innerHTML = taskArray[j].description;
        const finishButton = document.createElement("button");
        finishButton.innerHTML = "Complete";
        finishButton.addEventListener("click", () => {
          taskComplete(projectTitle, taskArray[j].title);
        });
        descDiv.appendChild(newDesc);
        descDiv.appendChild(finishButton);
        newTask.appendChild(titleDiv);
        newTask.appendChild(descDiv);
        taskList.appendChild(newTask);
      }
    }
  }
}
