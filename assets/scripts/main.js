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


// ===============================
// BACK TO TOP BUTTON (FIXED)
// ===============================

// Get the button:
const mybutton = document.getElementById("myBtn");

// Show / hide button on scroll
window.addEventListener("scroll", scrollFunction);

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// Smooth + slow scroll to top
if (mybutton) {
  mybutton.addEventListener("click", scrollToTop);
}

function scrollToTop() {
  const start = document.documentElement.scrollTop || document.body.scrollTop;
  const duration = 50; // büyüt = daha yavaş
  const startTime = performance.now();

  function easeOutCubic(t) {
    return 1 - Math.pow(1 - t, 3);
  }

  function animateScroll(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);

    const eased = easeOutCubic(progress);

    document.documentElement.scrollTop = start * (1 - eased);
    document.body.scrollTop = start * (1 - eased);

    if (progress < 1) {
      requestAnimationFrame(animateScroll);
    }
  }

  requestAnimationFrame(animateScroll);
}