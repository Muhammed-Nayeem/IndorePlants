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
  slidesPerView: 1,
  speed: 400,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

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

//Scroll Up Button active and implementation:
const scrollUp = () => {
  let scrollUpBtn = document.getElementById("scroll-up");
  if (this.scrollY >= 250) {
    scrollUpBtn.classList.remove("-bottom-1/2");
    scrollUpBtn.classList.add("bottom-4");
  } else {
    scrollUpBtn.classList.add("-bottom-1/2");
    scrollUpBtn.classList.remove("bottom-4");
  }
};

window.addEventListener("scroll", scrollUp);

//Scroll Header Style active and implementation:
const scrollHeader = () => {
  let header = document.getElementById("header");
  if (this.scrollY >= 50) {
    header.classList.add("border-b", "border-yellow-500");
  } else {
    header.classList.remove("border-b", "border-yellow-500");
  }
};

window.addEventListener("scroll", scrollHeader);

//Active Link implementation:
const activeLink = () => {
  let sections = document.querySelectorAll("section");
  let navLinks = document.querySelectorAll(".nav-link");
  let current = "home";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (this.scrollY >= sectionTop - 60) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.href.includes(current)) {
      link.classList.add("active");
    }
  });
};

window.addEventListener("scroll", activeLink);

//Scroll Reveal Animation Activation and Implementation:
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 300,
  reset: true
});

sr.reveal(`.home__content, .review__slide-card, .newsletter__card, .footer__icon, .footer__content .footer__copyright`);
sr.reveal(`.home__image`, {delay: 500, scale: 0.5});

sr.reveal(`.section__title`);
sr.reveal(`.service__card, .popular__card`, {interval: 100});

sr.reveal(`.about__leaf, .customer__leaf`, {delay: 1000, origin: "right"});
sr.reveal(`.about__item__1-content, .about__item__2-image`, {origin: "right"});
sr.reveal(`.about__item__2-content, .about__item__1-image, .footer__floral-image`, {origin: "left"});

sr.reveal(`.popular__leaf`, {delay: 100, origin: "left"});
