const navToggle = document.getElementById("nav-toggle");
const nav = document.getElementById("main-nav");

navToggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});

document.getElementById("year").textContent = new Date().getFullYear();

const form = document.getElementById("contact-form");
const msg = document.getElementById("form-msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    msg.textContent = "All fields are required.";
    msg.style.color = "red";
    return;
  }

  msg.textContent = "Message sent successfully!";
  msg.style.color = "green";

  form.reset();
});
