export function newTask() {
  const addTask = document.querySelector("#addTask");
  const taskspace = document.querySelector("#taskspace");

  const taskForm = document.createElement("form");
  taskForm.id = "taskForm";
  taskspace.appendChild(taskForm);

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

  const titlePriorityInput = document.createElement("div");
  titlePriorityInput.id = "titlePriorityInput";
  const titleInput = document.createElement("input");
  titleInput.setAttribute("type", "text");
  const priorityInput = document.createElement("input");
  priorityInput.setAttribute("type", "checkbox");
  titlePriorityInput.appendChild(titleInput);
  titlePriorityInput.appendChild(priorityInput);
  titlePriorityDiv.appendChild(titlePriorityInput);

  const descriptionDiv = document.createElement("div");
  const description = document.createElement("p");
  description.classList.add("formText");
  description.innerHTML = "Description:";
  const descriptionInput = document.createElement("input");
  descriptionInput.setAttribute("type", "text");
  descriptionDiv.appendChild(description);
  descriptionDiv.appendChild(descriptionInput);

  const dateDiv = document.createElement("div");
  const date = document.createElement("p");
  date.classList.add("formText");
  date.innerHTML = "Date:";
  const dateInput = document.createElement("input");
  dateInput.setAttribute("type", "datetime-local");
  dateDiv.appendChild(date);
  dateDiv.appendChild(dateInput);

  taskForm.appendChild(titlePriorityDiv);
  taskForm.appendChild(descriptionDiv);
  taskForm.appendChild(dateDiv);
}

// title = document.getElementById("addTitle").value;
// let newTask = new Book(title, author, pages, read);
// myTasks.push(newBook);
