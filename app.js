window.addEventListener("DOMContentLoaded", () => {
  const spinner = document.getElementById("loader");
  const content = document.getElementById("main_container");

  spinner.classList.add("hidden");
  content.style.display = "block";
});

document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const menu = document.querySelector(".menu");
  const close = document.getElementById("close");
  const content = document.getElementById("main_container");
  const body = document.querySelector(".body");

  hamburger.addEventListener("click", () => {
    menu.classList.add("menu-active");
    menu.classList.remove("menu-inactive");
    body.classList.add("body-inactive");
  });

  close.addEventListener("click", () => {
    content.style.display = "block";
    menu.classList.remove("menu-active");
    menu.classList.add("menu-inactive");
    body.classList.remove("body-inactive");
  });
});
