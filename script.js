
// Get the registration form
const form = document.querySelector("form");

// Listen for form submission
form.addEventListener("submit", function(event) {

    // Prevent page reload
    event.preventDefault();

    // Get student name
    const name = document.getElementById("name").value;

    // Display success message
    let message = document.getElementById("success-message");

    if (!message) {
        message = document.createElement("p");
        message.id = "success-message";
        message.setAttribute("role", "status");
        message.setAttribute("aria-live", "polite");
        form.appendChild(message);
    }

    message.textContent =
        "Registration successful! Welcome " + name + "!";

    message.style.color = "green";
    message.style.marginTop = "15px";

    // Clear the form
    form.reset();

});
