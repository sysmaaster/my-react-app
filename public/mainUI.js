const menuOpen = document.getElementById("menu_open");
const menuClose = document.getElementById("menu_close");
const sideBar = document.querySelector(".container .left-section");
const sidebarItems = document.querySelectorAll(
  ".container .left-section .sidebar .item"
);

menuOpen.addEventListener("click", () => {
  console.log("ss2s");
  sideBar.style.top = "0";
});

menuClose.addEventListener("click", () => {
  console.log("sss");
  sideBar.style.top = "-60vh";
});

let activeItem = sidebarItems[0];

sidebarItems.forEach((element) => {
  element.addEventListener("click", () => {
    console.log("ss21s");
    if (activeItem) {
      activeItem.removeAttribute("id");
      console.log("ss121s");
    }

    element.setAttribute("id", "active");
    activeItem = element;
  });
});
