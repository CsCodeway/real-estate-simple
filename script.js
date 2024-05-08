let hamburger = document.querySelector(".hamburger");
let hamburgerIcon = document.querySelector(".hamburgerIcon");
let hamburger_menu = document.querySelector(".hamburger-menu");

hamburger.addEventListener("click", function () {
  if (hamburger_menu.style.display === "none") {
    hamburger_menu.style.display = "block";
  } else {
    hamburger_menu.style.display = "none";
  }
});
hamburgerIcon.addEventListener("click", function () {
  if (hamburger_menu.style.display === "block") {
    hamburger_menu.style.display = "none";
  } else {
    hamburger_menu.style.display = "block";
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll('a[href^="#"]');

  navLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();

      const targetId = this.getAttribute("href");
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        const offsetTop = targetSection.offsetTop;
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });
      }
    });
  });
});
