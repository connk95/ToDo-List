//create subheader for task space

export function loadSubheader(subtitle) {
  const taskspace = document.querySelector("#taskspace");

  const subheader = document.createElement("div");
  subheader.id = "subheader";

  const taskName = document.createElement("h2");
  taskName.id = "subtitle";
  taskName.innerHTML = `${subtitle}`;
  subheader.appendChild(taskName);

  taskspace.appendChild(subheader);
}
