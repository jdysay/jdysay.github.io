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
    <button id="theme-toggle" aria-label="Toggle theme">
      <span class="theme-icon">☽</span>
    </button>
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

const header = document.getElementById('header');

function setActiveNavLink(link) {
  document.querySelectorAll('nav a').forEach((navLink) => {
    navLink.classList.remove('active');
  });

  if (link) {
    link.classList.add('active');
    localStorage.setItem('active-nav-link', link.getAttribute('href'));
  }
}

function updateMouseGlow(event) {
  document.documentElement.style.setProperty('--mouse-x', `${event.clientX}px`);
  document.documentElement.style.setProperty('--mouse-y', `${event.clientY}px`);

  if (header) {
    const rect = header.getBoundingClientRect();
    const relativeX = ((event.clientX - rect.left) / rect.width) * 100;
    const relativeY = ((event.clientY - rect.top) / rect.height) * 100;

    header.style.setProperty('--header-mouse-x', `${Math.max(0, Math.min(100, relativeX))}%`);
    header.style.setProperty('--header-mouse-y', `${Math.max(0, Math.min(100, relativeY))}%`);
  }
}

window.addEventListener('pointermove', updateMouseGlow);

const navLinks = document.querySelectorAll('nav a');

navLinks.forEach((link) => {
  link.addEventListener('click', () => setActiveNavLink(link));
});

const currentPage = window.location.pathname.split('/').pop() || 'index.html';
const savedNavLink = localStorage.getItem('active-nav-link');
const matchingLink = Array.from(navLinks).find((link) => {
  const href = link.getAttribute('href');
  return href === savedNavLink || href === currentPage || href === `./${currentPage}`;
});

if (matchingLink) {
  setActiveNavLink(matchingLink);
}

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
const icon = button.querySelector(".theme-icon");

// Load saved theme
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
  icon.textContent = "☀";
}

button.addEventListener("click", () => {
  button.classList.remove("theme-switching");
  void button.offsetWidth;
  button.classList.add("theme-switching");

  document.body.classList.toggle("dark");

  const isDark = document.body.classList.contains("dark");

  if (isDark) {
    icon.textContent = "☀";
    localStorage.setItem("theme", "dark");
  } else {
    icon.textContent = "☽";
    localStorage.setItem("theme", "light");
  }

  setTimeout(() => {
    button.classList.remove("theme-switching");
  }, 300);
});