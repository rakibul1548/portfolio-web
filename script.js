// Mobile Menu Toggle
const mobileMenu = document.querySelector('.mobile-menu');
const navLinks = document.querySelector('.nav__links');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    mobileMenu.classList.toggle('active');
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Scroll Animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.project__card, .skill__item').forEach(el => {
    observer.observe(el);
});

// Dark Mode Toggle
const darkModeToggle = document.createElement('div');
darkModeToggle.innerHTML = '🌓';
darkModeToggle.style.cssText = `
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    cursor: pointer;
    font-size: 2.4rem;
    z-index: 1000;
`;
document.body.appendChild(darkModeToggle);

darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
});

// Initialize dark mode
if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
}

// Form Validation
const form = document.querySelector('.contact__form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (validateForm()) {
        alert('Message sent successfully!');
        form.reset();
    }
});

function validateForm() {
    let isValid = true;
    const inputs = form.querySelectorAll('input, textarea');
    
    inputs.forEach(input => {
        if (!input.value.trim()) {
            isValid = false;
            input.classList.add('error');
        } else {
            input.classList.remove('error');
        }
    });

    return isValid;
}

// Close mobile menu on click outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav__content')) {
        navLinks.classList.remove('active');
        mobileMenu.classList.remove('active');
    }
});