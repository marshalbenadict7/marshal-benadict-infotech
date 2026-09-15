document.addEventListener("DOMContentLoaded", function () {


    // Get the form

    const contactForm =
        document.getElementById("contactForm");


    // Get success message

    const successMessage =
        document.getElementById("successMessage");



    // Check form exists

    if (contactForm) {


        // Submit event

        contactForm.addEventListener("submit", function (event) {


            // Stop page refresh

            event.preventDefault();



            // Get input values

            const name =
                document.getElementById("name").value.trim();


            const email =
                document.getElementById("email").value.trim();


            const subject =
                document.getElementById("subject").value.trim();


            const message =
                document.getElementById("message").value.trim();



            // Check empty fields

            if (
                name === "" ||
                email === "" ||
                subject === "" ||
                message === ""
            ) {

                alert("Please fill all fields.");

                return;

            }



            // Email validation

            const emailPattern =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;



            if (!emailPattern.test(email)) {

                alert("Please enter a valid email address.");

                return;

            }



            // Show success message

            successMessage.classList.remove("d-none");


            successMessage.innerHTML =
                "Thank you! Your message has been submitted successfully.";



            // Clear form

            contactForm.reset();


        });

    }

});
