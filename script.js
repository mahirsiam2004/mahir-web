let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navlinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector(`header nav a[href*='${id}']`).classList.add('active');
            });
        }
    });
};

menuIcon.onclick = () => {
    if (menuIcon.classList.contains('ri-menu-line')) {
        menuIcon.classList.replace('ri-menu-line', 'ri-close-line');
    } else {
        menuIcon.classList.replace('ri-close-line', 'ri-menu-line');
    }
    navbar.classList.toggle('active');
};




// testing_perpose
// JavaScript for the contact form submission
document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get the values from the input fields
    const fullName = document.querySelector('input[placeholder="Full Name"]').value;
    const email = document.querySelector('input[placeholder="Email"]').value;
    const phone = document.querySelector('input[placeholder="Phone Number"]').value;
    const subject = document.querySelector('input[placeholder="Subject"]').value;
    const message = document.querySelector('textarea[placeholder="Your Message"]').value;

    // Validate the form
    if (!fullName || !email || !message) {
        alert("Please fill in all required fields (Name, Email, and Message).");
        return;
    }

    // Create the mailto link
    const mailtoLink = `mailto:mahirsiam2004@gmail.com?subject=${encodeURIComponent(subject || "Contact Form Submission")}&body=${encodeURIComponent(
        `Name: ${fullName}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`
    )}`;

    // Open the mailto link
    window.location.href = mailtoLink;

    // Optional: Reset the form after submission
    document.querySelector("form").reset();
});








const textArray = [
    " Software Engineer.",
    " Web Developer.",
    " Problem Solver.",
    " Tech Enthusiast."
];
const typingSpeed = 100; // Speed of typing in milliseconds
const erasingSpeed = 50; // Speed of erasing in milliseconds
const delayBetweenPhrases = 1500; // Delay before switching to the next phrase
let textIndex = 0; // Index of the current phrase in textArray
let charIndex = 0; // Index of the current character being typed
const animatedTextElement = document.getElementById("animated-text");

function typeText() {
    if (charIndex < textArray[textIndex].length) {
        animatedTextElement.textContent += textArray[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeText, typingSpeed);
    } else {
        setTimeout(eraseText, delayBetweenPhrases);
    }
}

function eraseText() {
    if (charIndex > 0) {
        animatedTextElement.textContent = textArray[textIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseText, erasingSpeed);
    } else {
        textIndex = (textIndex + 1) % textArray.length; // Move to the next phrase
        setTimeout(typeText, typingSpeed);
    }
}

// Start the typing animation
document.addEventListener("DOMContentLoaded", () => {
    typeText();
});







// Update contact form validation
document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault();

    const fullName = document.querySelector('input[placeholder="Full Name"]').value;
    const email = document.querySelector('input[placeholder="Email"]').value;
    const phone = document.querySelector('input[placeholder="Phone Number"]').value;
    const subject = document.querySelector('input[placeholder="Subject"]').value;
    const message = document.querySelector('textarea[placeholder="Your Message"]').value;

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/; // Simple email regex
    const phonePattern = /^[0-9]{10,15}$/; // Allow international formats

    if (!fullName || !email || !message) {
        alert("Please fill in all required fields (Name, Email, and Message).");
        return;
    }

    if (!email.match(emailPattern)) {
        alert("Please enter a valid email address.");
        return;
    }

    if (phone && !phone.match(phonePattern)) {
        alert("Please enter a valid phone number.");
        return;
    }

    alert("Thanks for your message! We'll get back to you soon.");
    document.querySelector("form").reset();
});
