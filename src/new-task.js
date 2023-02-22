//create form to add new tasks, and call functions to pussh values to myTasks array

import { pushTask } from "./tasks";
import { Task } from "./tasks";
import { myTasks } from "./tasks";
import { displayTask } from "./display-task";

export function newTask() {
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
  const descriptionInput = document.createElement("input");
  descriptionInput.id = "descriptionInput";
  descriptionInput.setAttribute("type", "text");
  descriptionDiv.appendChild(description);
  descriptionDiv.appendChild(descriptionInput);

  //due date input
  const dateDiv = document.createElement("div");
  const date = document.createElement("p");
  date.classList.add("formText");
  date.innerHTML = "Date:";
  const dateInput = document.createElement("input");
  dateInput.id = "dateInput";
  dateInput.setAttribute("type", "datetime-local");
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

  //push input values to myTask array
  submit.addEventListener("click", () => {
    titleValue = document.querySelector("#titleInput").value;
    descriptionValue = document.querySelector("#descriptionInput").value;
    dateValue = document.querySelector("#dateInput").value;
    completeValue = false;
    const priorityCheck = document.querySelector("#priorityInput");
    if (priorityCheck.checked == false) {
      priorityValue = false;
    } else if (readCheck.checked == true) {
      priorityValue = true;
    }
    pushTask(
      titleValue,
      descriptionValue,
      dateValue,
      priorityValue,
      completeValue
    );
    displayTask();
  });
}
