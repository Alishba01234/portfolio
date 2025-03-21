const hamburger = document.getElementById('hamburger');
const links = document.querySelector('.links');

hamburger.addEventListener('click', () => {
  links.classList.toggle('active');
});

const skills = ["WEB DEVELOPER", "C++ PROGRAMMER", "PYTHON PROGRAMMER", "A.I. SCIENTIST"];
let index = 0;
let charIndex = 0;
let deleting = false;
const skillText = document.getElementById("skill-text");
function typeEffect() {
let currentSkill = skills[index];
if (!deleting) {
  skillText.textContent = currentSkill.slice(0, charIndex++);
  skillText.style.width = charIndex + "ch";
  if (charIndex > currentSkill.length) {
    deleting = true;
    setTimeout(typeEffect, 1500); // Pause before deleting
    return;
  }
} else {
    skillText.textContent = currentSkill.slice(0, charIndex--);
    skillText.style.width = charIndex + "ch";
    if (charIndex === 0) {
      deleting = false;
      index = (index + 1) % skills.length;
    }
  }
  setTimeout(typeEffect, deleting ? 100 : 100); // Typing and deleting speed
}        
typeEffect();

document.addEventListener("DOMContentLoaded", function () {
  let links = document.querySelectorAll(".links a");
  let currentURL = window.location.pathname.split("/").pop(); // Get current page name

  links.forEach(link => {
      if (link.getAttribute("href") === currentURL) {
          link.classList.add("active");
      } else {
          link.classList.remove("active");
      }
  });
});

const hire = document.querySelector("#hire");
hire.addEventListener("click",()=>{
  window.location.href = "mailto:alishbajawaid1234@gmail.com?subject=Job%20Opportunity&body=Hello,%20I%20am%20interested%20in%20hiring%20you.";
});

const contact = document.querySelector("#contact");
contact.addEventListener("click", function(event) {
  event.preventDefault(); // Prevent default anchor behavior
  document.getElementById("body5").scrollIntoView({ behavior: "smooth" });
});

window.addEventListener("load", function() {
  document.querySelector(".links").classList.add("loaded");
});

window.addEventListener("load", function() {
  document.querySelector(".image").classList.add("loaded");
});

window.addEventListener("load", function() {
  document.querySelector(".content").classList.add("loaded");
});

document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault();
  
  // Get input values
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;
  
  // Format email content
  const subject = encodeURIComponent("New Contact Message from " + name);
  const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
  
  // Open mail client
  window.location.href = `mailto:alishbajawaid1234@gmail.com?subject=${subject}&body=${body}`;
});

document.addEventListener("DOMContentLoaded", function() {
  document.querySelectorAll(".progress-bar").forEach(bar => {
      let percentage = bar.getAttribute("data-value");
      setTimeout(() => {
          bar.style.width = percentage + "%";
      }, 500);
  });

  document.querySelectorAll(".circular-skill").forEach(skill => {
      let percentage = skill.getAttribute("data-value");
      skill.style.background = `conic-gradient(#6A0DAD ${percentage}%, #333 ${percentage}%)`;
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const projectCards = document.querySelectorAll(".project-card");

  filterButtons.forEach(button => {
      button.addEventListener("click", function () {
          const category = this.getAttribute("data-category");

          projectCards.forEach(card => {
              if (category === "all" || card.getAttribute("data-category") === category) {
                  card.style.display = "flex";  // Maintain layout
                  card.style.opacity = "1";     // Smooth fade-in
              } else {
                  card.style.opacity = "0";     // Fade-out effect
                  setTimeout(() => {
                      card.style.display = "none";  // Hide after animation
                  }, 300);
              }
          });
      });
  });
});

document.getElementById("#education").addEventListener("click", function(event) {
  event.preventDefault(); // Prevent default anchor behavior
  document.getElementById("body2").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("#skills").addEventListener("click", function(event) {
  event.preventDefault(); // Prevent default anchor behavior
  document.getElementById("body3").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("#projects").addEventListener("click", function(event) {
  event.preventDefault(); // Prevent default anchor behavior
  document.getElementById("body4").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("#contact").addEventListener("click", function(event) {
  event.preventDefault(); // Prevent default anchor behavior
  document.getElementById("body5").scrollIntoView({ behavior: "smooth" });
});