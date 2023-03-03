// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
// on click
document.querySelector("#h-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// click empty side
const hb = document.querySelector("#h-menu");

document.addEventListener("click", function (e) {
  if (!hb.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
