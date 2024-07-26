document.addEventListener("DOMContentLoaded", () => {
  const element = document.querySelector(".info");
  const element2 = document.querySelector(".main_hero");

  const checkSlideIn = () => {
    const elementTop = element.getBoundingClientRect().top;
    const elementVisible = window.innerHeight / 1.2;

    if (elementTop < elementVisible) {
      element.classList.add("info-active");
      element2.classList.add("main_hero-active");
      window.removeEventListener("scroll", checkSlideIn); // Optional: stop listening after the first animation
    }
  };

  window.addEventListener("scroll", checkSlideIn);
  checkSlideIn();
});
