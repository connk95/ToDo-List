// //create home tabs **future version**

// import { displayThisDay } from "./display-newproject";

// export function loadHome() {
//   const sidebarHome = document.querySelector("#sidebarHome");

//   const homeTitle = document.createElement("div");
//   homeTitle.id = "homeTitle";
//   const title = document.createElement("h2");
//   title.innerHTML = "Home";
//   homeTitle.appendChild(title);
//   sidebarHome.appendChild(homeTitle);

//   const homeDays = document.createElement("div");
//   homeDays.id = "homeDays";
//   sidebarHome.appendChild(homeDays);

//   const homeList = document.createElement("ol");
//   homeDays.appendChild(homeList);

//   //create "all projects" tab
//   const allProjects = document.createElement("li");
//   allProjects.innerHTML = "All Projects";
//   homeList.appendChild(allProjects);

//   //create "today" tab
//   const today = document.createElement("li");
//   today.innerHTML = "Today";
//   today.addEventListener("click", () => {
//     displayThisDay(0);
//   });
//   homeList.appendChild(today);

//   //create "7 days" tab
//   const sevenDays = document.createElement("li");
//   sevenDays.innerHTML = "7 Days";
//   sevenDays.addEventListener("click", () => {
//     displayThisDay(7);
//   });
//   homeList.appendChild(sevenDays);

//   //create "30 days" tab
//   const thirtyDays = document.createElement("li");
//   thirtyDays.innerHTML = "30 Days";
//   today.addEventListener("click", () => {
//     displayThisDay(30);
//   });
//   homeList.appendChild(thirtyDays);
// }
