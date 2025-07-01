// script.js

// 1. Smooth scroll to Features section
function scrollToFeatures() {
  const featuresSection = document.getElementById("features");
  if (featuresSection) {
    featuresSection.scrollIntoView({ behavior: "smooth" });
  }
}

// 2. Reveal elements on scroll
const revealElements = document.querySelectorAll('.reveal');

function revealOnScroll() {
  const triggerBottom = window.innerHeight * 0.85;
  revealElements.forEach(el => {
    const boxTop = el.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      el.classList.add('active');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// 3. Optional loading screen (hidden after page loads)
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  if (loader) loader.style.display = 'none';
});
// Typing animation for hero text
const heroText = "Welcome to Entertainment Hub";
const heroElement = document.getElementById("hero-text");

let charIndex = 0;
function typeHeroText() {
  if (charIndex < heroText.length) {
    heroElement.textContent += heroText.charAt(charIndex);
    charIndex++;
    setTimeout(typeHeroText, 100); // Typing speed
  }
}
window.addEventListener('load', typeHeroText);
