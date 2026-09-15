document.addEventListener("DOMContentLoaded", function () {

    // Contact Form
    const contactForm = document.getElementById("contactForm");
    const formMessage = document.getElementById("formMessage");

    if (contactForm) {

        contactForm.addEventListener("submit", function (event) {

            // Stop form from refreshing the page
            event.preventDefault();

            // Get input values
            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const subject = document.getElementById("subject").value.trim();
            const message = document.getElementById("message").value.trim();

            // Check empty fields
            if (
                name === "" ||
                email === "" ||
                subject === "" ||
                message === ""
            ) {

                formMessage.innerHTML =
                    "Please fill all fields.";

                return;
            }

            // Email validation
            const emailPattern =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!emailPattern.test(email)) {

                formMessage.innerHTML =
                    "Please enter a valid email address.";

                return;
            }

            // Success message
            formMessage.innerHTML =
                "Thank you! Your message has been submitted successfully.";

            // Clear form
            contactForm.reset();

        });
    }

});