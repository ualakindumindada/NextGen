// Hamburger Menu Toggle
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  hamburger.classList.toggle("active");
});




// FAQ Section Toggle
document.querySelectorAll(".faq-question").forEach((question) => {
  question.addEventListener("click", () => {
    const faqItem = question.parentElement;
    faqItem.classList.toggle("active");
  });
});




// Highlight Current Page in Navigation
const navLinks = document.querySelectorAll("#nav-links");
const currentPage = window.location.pathname.split("/").pop();

navLinks.forEach((link) => {
  if (link.getAttribute("href") === currentPage) {
    link.classList.add("active");
  }
});




// Reveal Elements on Scroll

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  },
  {
    threshold: 0.2,
  },
);
revealElements.forEach((el) => revealObserver.observe(el));




// Counter Animation
const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const counter = entry.target;
        const target = Number(counter.dataset.target);
        const suffix = counter.dataset.suffix || "";

        let current = 0;
        const duration = 2000;
        const steps = Math.ceil(duration / 16);
        const stepValue = target / steps;

        const updateCounter = () => {
          current += stepValue;

          if (current < target) {
            counter.textContent = Math.round(current) + suffix;
            requestAnimationFrame(updateCounter);
          } else {
            counter.textContent = target + suffix;
          }
        };

        updateCounter();
        observer.unobserve(counter);
      }
    });
  },
  { threshold: 0.3 },
);

counters.forEach((counter) => counterObserver.observe(counter));




// Message Alert for contact form

  document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault(); // prevent page refresh

    alert("Thank you for reaching out to us!\nYour message has been successfully received. We will contact you shortly.");

    this.reset(); // clear form (optional)
  });

