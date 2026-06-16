// scripts/app.js

const typingText = "Software Systems student who loves creating new projects and inspiring others."


document.getElementById('header').innerHTML = `
<div class="header-wrapper">
  <div class="header-left"></div>

  <div class="header-center">
    <h1>Jaycie Say</h1>
    <p class="typing"><span id="typing-text"></span></p>
    <nav>
      <a href="index.html">Home</a>
      <a href="experience.html">Experience</a>
      <a href="projects.html">Projects</a>
    </nav>
  </div>

  <div class="header-right">
    <button id="theme-toggle">☽</button>
  </div>
</div>
`;

let i = 0;
function typeEffect() {
  if(i < typingText.length) {
    document.getElementById("typing-text").innerHTML += typingText.charAt(i);
    i++;
    setTimeout(typeEffect, 50);
  }
}

typeEffect();


document.getElementById('footer').innerHTML = `
  <p>&copy; 2026 Jaycie Say</p>
 
  <div class="footer-links">
    <a href="mailto:jaycie.say@outlook.com" target="_blank" title="Email">
      <i class="fas fa-envelope"></i>
    </a>
    <a href="https://github.com/jdysay" target="_blank" title="GitHub">
      <i class="fab fa-github"></i>
    </a>
    <a href="https://www.linkedin.com/in/jaycie-say-923611274" target="_blank" title="LinkedIn">
      <i class="fab fa-linkedin"></i>
    </a>

    </div> 



`

document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".scroll-in");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target); // animate once
        }
      });
    },
    {
      threshold: 0.15,
    }
  );

  elements.forEach((el) => observer.observe(el));
});

const button = document.getElementById("theme-toggle");

// Load saved theme
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
  button.textContent = "☀";
}

button.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  const isDark = document.body.classList.contains("dark");

  if (isDark) {
    button.textContent = "☀";
    localStorage.setItem("theme", "dark");
  } else {
    button.textContent = "☽";
    localStorage.setItem("theme", "light");
  }
});