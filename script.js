document.addEventListener("DOMContentLoaded", () => {
  const navButton = document.querySelector(".nav-button");
  const primaryButton = document.querySelector(".primary-btn");

  const buttonClick = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  navButton?.addEventListener("click", buttonClick);
  primaryButton?.addEventListener("click", buttonClick);
});