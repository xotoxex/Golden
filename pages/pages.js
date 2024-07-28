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

      window.removeEventListener("scroll", checkSlideIn); // Optional: stop listening after the first animation
    }
  };

  const checkOpacityIn = () => {
    const elementTop2 = element2.getBoundingClientRect().top;
    const elementVisible = window.innerHeight / 1.2;

    if (elementTop2 < elementVisible) {
      element2.classList.add("main_hero-active");

      window.removeEventListener("scroll", checkOpacityIn); // Optional: stop listening after the first animation
    }
  };

  window.addEventListener("scroll", checkSlideIn);
  window.addEventListener("scroll", checkOpacityIn);
  checkSlideIn();
});
