export function createHeader() {
  const content = document.querySelector("#content");

  //create header
  const headerDiv = document.createElement("div");
  headerDiv.id = "headerDiv";

  const title = document.createElement("h1");
  title.id = "title";
  title.innerHTML = "CanDo";
  headerDiv.appendChild(title);

  const menu = document.createElement("div");
  menu.id = "menu";
  headerDiv.appendChild(menu);

  content.appendChild(headerDiv);
}
