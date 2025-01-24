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
