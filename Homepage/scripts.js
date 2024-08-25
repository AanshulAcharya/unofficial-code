document.getElementById("contactForm").addEventListener("submit", function(event){
    event.preventDefault(); // Prevents the default form submission behavior

    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Simple form validation
    if(name === "" || email === "" || message === "") {
        alert("Please fill in all fields.");
        return;
    }

    // If validation passes, you can proceed to send the form data
    alert(`Thank you, ${name}! Your message has been sent.`);

    // Clear form fields
    document.getElementById("contactForm").reset();
});
