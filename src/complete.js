import { myProjects, updateLocalStorage } from "./index";

//project complete button with check
export function projectComplete(projectTitle) {
  if (confirm("Complete this project?") == true) {
    for (let i = 0; i < myProjects.length; i++) {
      if (myProjects[i].title === projectTitle) {
        myProjects.splice(i, 1);
        updateProjects(projectTitle);
        updateLocalStorage();
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

//task complete button with check
export function taskComplete(projectTitle, taskTitle) {
  if (confirm("Complete this task?") == true) {
    for (let i = 0; i < myProjects.length; i++) {
      if (myProjects[i].title === projectTitle) {
        let taskArray = myProjects[i].tasks;
        for (let j = 0; j < taskArray.length; j++) {
          if (taskArray[j].title === taskTitle) {
            taskArray.splice(j, 1);
            updateTasks(taskTitle);
            updateLocalStorage();
          }
        }
      }
    }
  } else {
    return;
  }
}

//remove project or task from page
function updateProjects(projectTitle) {
  const thisTitle = document.querySelector(`#${projectTitle}`);
  thisTitle.remove();
}

function updateTasks(taskTitle) {
  const thisTitle = document.querySelector(`#${taskTitle}Div`);
  thisTitle.remove();
}
