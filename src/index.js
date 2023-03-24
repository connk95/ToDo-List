import { createHeader } from "./header";
import { createBody } from "./body";
import { displayNewProject } from "./display-newproject";

createHeader();
createBody();

//array of all tasks
export const myProjects = [];

(() => {
  const storedProjects = JSON.parse(localStorage.getItem("projects"));

  while (storedProjects.length) {
    myProjects.push(storedProjects.shift());
    displayNewProject();
  }
})();

export function updateLocalStorage() {
  localStorage.setItem("projects", JSON.stringify(myProjects));
}
