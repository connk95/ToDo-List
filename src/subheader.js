export function loadSubheader() {
  const taskspace = document.querySelector("#taskspace");

  const subheader = document.createElement("div");
  subheader.id = "subheader";

  const taskName = document.createElement("h2");
  taskName.id = taskName;
  taskName.innerHTML = "temp"; //current tab; Today, New Project, etc
  subheader.appendChild(taskName);

  taskspace.appendChild(subheader);
}
