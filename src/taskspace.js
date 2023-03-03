//create task space and load dynamic subheader

import { loadSubheader } from "./subheader";

export function createTaskspace() {
  const bodyDiv = document.querySelector("#bodyDiv");

  //create div for editing and displaying tasks
  const taskspace = document.createElement("div");
  taskspace.id = "taskspace";
  bodyDiv.appendChild(taskspace);
}
