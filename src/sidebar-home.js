//create home tabs

export function loadHome() {
  const sidebarHome = document.querySelector("#sidebarHome");

  const homeTitle = document.createElement("div");
  homeTitle.id = "homeTitle";
  const title = document.createElement("h2");
  title.innerHTML = "Home";
  homeTitle.appendChild(title);
  sidebarHome.appendChild(homeTitle);

  const homeDays = document.createElement("div");
  homeDays.id = "homeDays";
  sidebarHome.appendChild(homeDays);

  const homeList = document.createElement("ol");
  homeDays.appendChild(homeList);

  //create "all tasks" tab
  const allTasks = document.createElement("li");
  allTasks.innerHTML = "All Tasks";
  homeList.appendChild(allTasks);

  //create "today" tab
  const today = document.createElement("li");
  today.innerHTML = "Today";
  homeList.appendChild(today);

  //create "7 days" tab
  const sevenDays = document.createElement("li");
  sevenDays.innerHTML = "7 Days";
  homeList.appendChild(sevenDays);

  //create "30 days" tab
  const thirtyDays = document.createElement("li");
  thirtyDays.innerHTML = "30 Days";
  homeList.appendChild(thirtyDays);
}
