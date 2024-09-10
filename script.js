// navbar fixed
window.onscroll = () => {
  const header = document.querySelector("header");
  const absoluteNav = header.offsetTop;

  if (window.pageYOffset > absoluteNav) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
};

// hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});
