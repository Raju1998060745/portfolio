// Initialize Lucide icons
lucide.createIcons();

// Navbar scroll behavior
const navbar = document.getElementById('navbar');
const menuButton = document.getElementById('menuButton');
const mobileMenu = document.getElementById('mobileMenu');

window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        navbar.classList.add('bg-white', 'shadow-md');
    } else {
        navbar.classList.remove('bg-white', 'shadow-md');
    }
});

// Mobile menu toggle
menuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    const icon = menuButton.querySelector('i');
    if (mobileMenu.classList.contains('hidden')) {
        icon.setAttribute('data-lucide', 'menu');
    } else {
        icon.setAttribute('data-lucide', 'x');
    }
    lucide.createIcons();
});

// Close mobile menu when clicking a link
document.querySelectorAll('#mobileMenu a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        const icon = menuButton.querySelector('i');
        icon.setAttribute('data-lucide', 'menu');
        lucide.createIcons();
    });
});

// Contact form handling
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);
    
    // Here you would typically send the data to a server
    console.log('Form submitted:', data);
    
    // Clear form
    contactForm.reset();
    alert('Thank you for your message! I will get back to you soon.');
});