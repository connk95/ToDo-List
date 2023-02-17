export function createTasks() {
  const bodyDiv = document.querySelector("#bodyDiv");

  //create div for editing and displaying tasks
  const tasks = document.createElement("div");
  tasks.id = "tasks";
  bodyDiv.appendChild(tasks);
}
