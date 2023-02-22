//array of all tasks
export const myTasks = [];

//factory function to make tasks
export function Task(title, description, dueDate, priority, complete) {
  this.title = title;
  this.description = description;
  this.dueDate = dueDate;
  this.priority = priority;
  this.complete = complete;
}

//push tasks to array
export function pushTask(title, description, dueDate, priority, complete) {
  let newTask = new Task(title, description, dueDate, priority, complete);
  myTasks.push(newTask);
}
