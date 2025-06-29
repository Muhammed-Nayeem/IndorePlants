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


//Reviews Swiper Slider Active and Implementation:
const swiper = new Swiper('.swiper', {
  // Optional parameters
  slidesPerView: 1,
  speed: 400,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  grabCursor: true,
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});
