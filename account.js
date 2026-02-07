const logo = document.getElementById("floatLogo");

let position = 0;
let direction = 1;

// Animate logo up and down
setInterval(() => {
  position += direction * 0.5;
  if (position > 10 || position < 0) {
    direction *= -1;
  }
  logo.style.transform = `translateY(-${position}px)`;
}, 30);

// Function to show left-side pink notifications
function showMessage(message) {
  // Remove existing notification if any
  let existing = document.getElementById("notification");
  if (existing) existing.remove();

  const notification = document.createElement("div");
  notification.id = "notification";
  notification.innerText = message;

  // Style the notification
  // Style the notification
  notification.style.position = "fixed";
  notification.style.top = "50px";
  notification.style.right = "20px"; // right side
  notification.style.background = "#a9c8ff"; // pink color
  notification.style.color = "#6215de";
  notification.style.padding = "12px 20px";
  notification.style.borderRadius = "8px";
  notification.style.fontSize = "14px";
  notification.style.fontWeight = "bold";
  notification.style.zIndex = "999";
  notification.style.boxShadow = "0 4px 15px rgba(0,0,0,0.3)";
  notification.style.opacity = "0";
  notification.style.transition = "opacity 0.4s ease, transform 0.4s ease";
  notification.style.transform = "translateX(20px)"; // start slightly right

  document.body.appendChild(notification);

  // Animate in
  setTimeout(() => {
    notification.style.opacity = "1";
    notification.style.transform = "translateX(0)";
  }, 10);

  // Animate out after 3 seconds
  setTimeout(() => {
    notification.style.opacity = "0";
    notification.style.transform = "translateX(-20px)";
    setTimeout(() => notification.remove(), 400);
  }, 3000);
}

// Tab switching
function showSignIn() {
  document.getElementById("signInForm").classList.remove("hidden");
  document.getElementById("createForm").classList.add("hidden");

  document.querySelectorAll(".tab")[0].classList.add("active");
  document.querySelectorAll(".tab")[1].classList.remove("active");
}

function showCreate() {
  document.getElementById("signInForm").classList.add("hidden");
  document.getElementById("createForm").classList.remove("hidden");

  document.querySelectorAll(".tab")[0].classList.remove("active");
  document.querySelectorAll(".tab")[1].classList.add("active");
}

// Handle Sign In form submission
document.getElementById("signInForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const email = this.querySelector('input[type="email"]').value;
  showMessage(`Signed in successfully as ${email}`);
  this.reset();
});

// Handle Create Account form submission
document.getElementById("createForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = this.querySelector('input[type="text"]').value;
  showMessage(`Account created successfully for ${name}`);
  this.reset();
});

// Handle social login buttons
document.querySelector(".social .google").addEventListener("click", () => {
  showMessage("Google login successful");
});

document.querySelector(".social .facebook").addEventListener("click", () => {
  showMessage("Facebook login successful");
});
