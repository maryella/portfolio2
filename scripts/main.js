const openNavButton = document.querySelector("#toggleNavOpen");
const closeNavButton = document.querySelector("#toggleNavClosed");

openNavButton.addEventListener("click", function(e) {
  const navWindow = document.querySelector(".modal");
  navWindow.classList.toggle("open");
  const menu = document.querySelector(".menu");
  menu.classList.toggle("closed");
});

closeNavButton.addEventListener("click", function(e) {
  e.preventDefault;
  const navWindow = document.querySelector(".modal");
  navWindow.classList.toggle("open");
  const menu = document.querySelector(".menu");
  menu.classList.toggle("closed");
});

window.onscroll = () => {
  const body = document.querySelector("body");
  if (this.scrollY <= 10) body.className = "";
  else body.className = "scroll";
};
