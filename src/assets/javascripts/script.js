//Mobile Responsive Menubar Active & Implementation:
const navbar = document.getElementById("nav-menu");
const navLinks = document.querySelectorAll(".nav-link");
const hamburgerBtn = document.getElementById("hamburger");

hamburgerBtn.addEventListener("click", () => {
  navbar.classList.toggle("left-[0]");
  hamburgerBtn.classList.toggle("ri-close-large-line");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navbar.classList.toggle("left-[0]");
    hamburgerBtn.classList.toggle("ri-close-large-line");
  });
});
