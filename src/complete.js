import { displayNewProject } from "./display-newproject";
import { myProjects } from "./index";

export function projectComplete(projectTitle) {
  if (confirm("Complete this project?") == true) {
    for (let i = myProjects.length - 1; i < myProjects.length; i++) {
      if (myProjects[i].title === projectTitle) {
        myProjects.splice(i, 1);
        updateProjects(projectTitle);
        const taskspace = document.querySelector("#taskspace");
        while (taskspace.firstChild) {
          taskspace.removeChild(taskspace.firstChild);
        }
      }
    }
  } else {
    return;
  }
}

export function taskComplete(projectTitle, taskTitle) {
  if (confirm("Complete this task?") == true) {
    for (let i = myProjects.length - 1; i < myProjects.length; i++) {
      if (myProjects[i].title === projectTitle) {
        let taskArray = myProjects[i].tasks;
        for (let j = taskArray.length - 1; j < taskArray.length; j++) {
          if (taskArray[j].title === taskTitle) {
            taskArray.splice(j, 1);
            updateTasks(taskTitle);
          }
        }
      }
    }
  } else {
    return;
  }
}

function updateProjects(projectTitle) {
  let thisTitle = document.querySelector(`#${projectTitle}`);
  thisTitle.remove();
}

function updateTasks(taskTitle) {
  let thisTitle = document.querySelector(`#${taskTitle}Div`);
  thisTitle.remove();
}
