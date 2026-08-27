function toggleMenu() {
    const navLinks = document.querySelector(".nav-links");

    if (navLinks) {
        navLinks.classList.toggle("active");
    }
}


// Mobile menu close
const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach(function(link) {
    link.addEventListener("click", function() {

        const navLinks = document.querySelector(".nav-links");

        if (navLinks) {
            navLinks.classList.remove("active");
        }

    });
});


// Contact form
const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();

        alert("Thank you for contacting me! 😊");

        contactForm.reset();

    });

}