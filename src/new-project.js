//create form to add both new projects and tasks, and call functions to push values to myProjects array

import { submitProject } from "./projects";
import { displayNewProject } from "./display-newproject";
import { submitTask } from "./tasks";

export function newProject() {
  const taskspace = document.querySelector("#taskspace");

  const taskForm = document.createElement("form");
  taskForm.id = "taskForm";
  taskspace.appendChild(taskForm);

  //create title and priority header
  const titlePriorityDiv = document.createElement("div");
  titlePriorityDiv.id = "titlePriorityDiv";
  const titlePriorityHeader = document.createElement("div");
  titlePriorityHeader.id = "titlePriorityHeader";
  const title = document.createElement("p");
  title.classList.add("formText");
  title.innerHTML = "Title:";
  const priority = document.createElement("p");
  priority.classList.add("formText");
  priority.innerHTML = "High priority:";
  titlePriorityHeader.appendChild(title);
  titlePriorityHeader.appendChild(priority);
  titlePriorityDiv.appendChild(titlePriorityHeader);

  //title and priority inputs
  const titlePriorityInput = document.createElement("div");
  titlePriorityInput.id = "titlePriorityInput";
  const titleInput = document.createElement("input");
  titleInput.id = "titleInput";
  titleInput.setAttribute("type", "text");
  const priorityInput = document.createElement("input");
  priorityInput.id = "priorityInput";
  priorityInput.setAttribute("type", "checkbox");
  titlePriorityInput.appendChild(titleInput);
  titlePriorityInput.appendChild(priorityInput);
  titlePriorityDiv.appendChild(titlePriorityInput);

  //description input
  const descriptionDiv = document.createElement("div");
  descriptionDiv.id = "descriptionDiv";
  const description = document.createElement("p");
  description.classList.add("formText");
  description.innerHTML = "Description:";
  const descriptionInput = document.createElement("textarea");
  descriptionInput.id = "descriptionInput";
  descriptionInput.setAttribute("rows", "8");
  descriptionDiv.appendChild(description);
  descriptionDiv.appendChild(descriptionInput);

  //due date input
  const dateDiv = document.createElement("div");
  const date = document.createElement("p");
  date.classList.add("formText");
  date.innerHTML = "Date:";
  const dateInput = document.createElement("input");
  dateInput.id = "dateInput";
  dateInput.setAttribute("type", "date");
  dateInput.id = "dateInput";
  dateDiv.appendChild(date);
  dateDiv.appendChild(dateInput);

  //submit button
  const submit = document.createElement("button");
  submit.innerHTML = "Submit";
  submit.setAttribute("type", "submit");

  taskForm.appendChild(titlePriorityDiv);
  taskForm.appendChild(descriptionDiv);
  taskForm.appendChild(dateDiv);
  taskForm.appendChild(submit);

  //project form submission
  submit.addEventListener("click", handleForm);

  //event handler for project & task form submission (prevent page refresh & clear display)
  const subtitle = document.querySelector("#subtitle");

  function handleForm(event) {
    if (subtitle.innerHTML == "New Project") {
      submitProject();
      displayNewProject();
      event.preventDefault();
      removeForm();
    } else if (subtitle.innerHTML !== "New Project") {
      submitTask();
      displayNewTask();
      event.preventDefault();
      removeForm();
    }
  }
}

//clear form display
export function removeForm() {
  while (taskspace.firstChild) {
    taskspace.removeChild(taskspace.lastChild);
  }
}
