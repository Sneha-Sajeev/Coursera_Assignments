document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');

    hamburger.addEventListener('click', function() {
        navMenu.classList.toggle('visible');
    });

    const filterButtons = document.querySelectorAll('.filter-button');
    filterButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            const category = button.getAttribute('data-category');
            filterProjects(category);
        });
    });

    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function(event) {
        if (!validateForm()) {
            event.preventDefault();
            alert('Please fill in all fields before submitting the form.');
        }
    });

    function validateForm() {
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        
        return name !== '' && email !== '' && message !== '';
    }
});