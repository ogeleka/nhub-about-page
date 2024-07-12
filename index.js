document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu-toggle");
  const navMenu = document.getElementById("nav-links");

  menuToggle.addEventListener("click", function () {
    navMenu.classList.toggle("active");
  });
});
