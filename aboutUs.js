document.addEventListener("DOMContentLoaded", function() {
  // Target snake_case ID
  const contact_form = document.getElementById("contact_form");

  if (contact_form) {
    contact_form.addEventListener("submit", function(event) {
      event.preventDefault(); 

      // Get values from snake_case IDs
      const first_name = document.getElementById("first_name").value;
      const last_name = document.getElementById("last_name").value;

      alert("Thank you " + first_name + " " + last_name + "! Your message has been sent successfully.");
      
      contact_form.reset();
    });
  }
});