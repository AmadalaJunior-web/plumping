// ========== NAVBAR HIGHLIGHT ==========
document.addEventListener("DOMContentLoaded", () => {
  const currentLocation = window.location.href;
  const menuItems = document.querySelectorAll("nav ul li a");

  menuItems.forEach(link => {
    if (currentLocation.includes(link.getAttribute("href"))) {
      link.classList.add("active");
    }
  });
});

// ========== STICKY NAVBAR ==========
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 50);
});

// ========== CONTACT FORM VALIDATION ==========
const form = document.querySelector("form");

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = form.querySelector("input[name='name']");
    const email = form.querySelector("input[name='email']");
    const phone = form.querySelector("input[name='phone']");
    const message = form.querySelector("textarea");

    let errors = [];

    if (!name.value.trim()) errors.push("Name is required.");
    if (!email.value.includes("@")) errors.push("Enter a valid email.");
    if (!phone.value.match(/^\d{10}$/)) errors.push("Phone must be 10 digits.");
    if (!message.value.trim()) errors.push("Message cannot be empty.");

    if (errors.length > 0) {
      alert(errors.join("\n"));
    } else {
      alert("✅ Thank you! Your request has been sent.");
      form.reset();
    }
  });
}
