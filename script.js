const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
  menuToggle.textContent = isOpen ? "×" : "☰";
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  });
});

const bookingForm = document.querySelector("#booking-form");
const successMessage = document.querySelector("#success-message");

bookingForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!bookingForm.reportValidity()) return;

  // Front-end demo: connect a form service or serverless function to receive submissions.
  const formData = Object.fromEntries(new FormData(bookingForm).entries());
  console.info("Daycare enquiry (demo only):", formData);

  successMessage.hidden = false;
  bookingForm.reset();
  successMessage.scrollIntoView({ behavior: "smooth", block: "nearest" });
});
