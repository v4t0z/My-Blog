// Checks if JavaScript is working
console.log("JS is working");

// Toggles the website theme between dark and light on button click
const toggleButton = document.getElementById("theme-toggle");
const root = document.documentElement;
const STORAGE_KEY = "theme";

const savedTheme = localStorage.getItem(STORAGE_KEY);
if (savedTheme) {
  root.setAttribute("data-theme", savedTheme);
}

if (toggleButton) {
  toggleButton.addEventListener("click", () => {
    const currentTheme = root.getAttribute("data-theme");
    const nextTheme = currentTheme === "dark" ? "light" : "dark";

    root.setAttribute("data-theme", nextTheme);
    localStorage.setItem(STORAGE_KEY, nextTheme);
  });
}

// Active navbar link
const navLinks = document.querySelectorAll(".navbar a");
const currentPath = window.location.pathname;

navLinks.forEach((link) => {
  if (link.classList.contains("home-link")) return;

  const linkPath = new URL(link.href).pathname;

  if (currentPath === linkPath || currentPath.startsWith(linkPath)) {
    link.classList.add("active");
  }
});

// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
