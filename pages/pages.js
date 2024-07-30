document.addEventListener("DOMContentLoaded", () => {
  const element = document.querySelector(".info");
  const element2 = document.querySelector(".main_hero");

  const checkSlideIn = () => {
    const elementTop = element.getBoundingClientRect().top;
    const elementTop2 = element2.getBoundingClientRect().top;
    const elementVisible = window.innerHeight / 1.2;

    if (elementTop < elementVisible) {
      element.classList.add("info-active");

      window.removeEventListener("scroll", checkSlideIn);
    }

    if (elementTop2 < elementVisible) {
      element2.classList.add("main_hero-active");

      window.removeEventListener("scroll", checkSlideIn);
    }
  };

  const checkOpacityIn = () => {
    const elementTop2 = element2.getBoundingClientRect().top;
    const elementVisible = window.innerHeight / 1.2;

    if (elementTop2 < elementVisible) {
      element2.classList.add("main_hero-active");

      window.removeEventListener("scroll", checkOpacityIn);
    }
  };

  window.addEventListener("scroll", checkSlideIn);
  window.addEventListener("scroll", checkOpacityIn);
  checkSlideIn();
});

document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const menu = document.querySelector(".menu");
  const close = document.getElementById("close");
  const content = document.getElementById("content");
  const body = document.querySelector(".body");

  hamburger.addEventListener("click", () => {
    menu.classList.add("menu-active");
    menu.classList.remove("menu-inactive");
    body.classList.add("body-inactive");
  });

  close.addEventListener("click", () => {
    content.style.display = "flex";
    menu.classList.remove("menu-active");
    menu.classList.add("menu-inactive");
    body.classList.remove("body-inactive");
  });
});
