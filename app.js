// script.js
window.addEventListener("load", () => {
  const spinner = document.getElementById("loader");
  const content = document.getElementById("main_container");

  spinner.classList.add("hidden");
  content.style.display = "block";
});
