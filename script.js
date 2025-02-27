const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

function toggleMenu() {
    navLinks.classList.toggle('active');
    burger.classList.toggle('toggle');
    const isExpanded = burger.classList.contains('toggle');
    burger.setAttribute('aria-expanded', isExpanded);
}

burger.addEventListener('click', toggleMenu);

navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        burger.classList.remove('toggle');
        burger.setAttribute('aria-expanded', 'false');
    });
});

const form = document.getElementById('contact-form');
const formMessage = document.createElement('p');
formMessage.classList.add('form-message');
form.appendChild(formMessage);

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = form.querySelector('input[type="text"]').value.trim();
    const email = form.querySelector('input[type="email"]').value.trim();
    const message = form.querySelector('textarea').value.trim();

    if (!name || !email || !message) {
        showFormMessage('Please fill in all fields.', 'error');
        return;
    }

    if (!isValidEmail(email)) {
        showFormMessage('Please enter a valid email address.', 'error');
        return;
    }

    setTimeout(() => {
        showFormMessage('Thank you for your message! We’ll get back to you soon.', 'success');
        form.reset();
    }, 500);
});

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showFormMessage(message, type) {
    formMessage.textContent = message;
    formMessage.className = 'form-message';
    formMessage.classList.add(type === 'success' ? 'success' : 'error');

    setTimeout(() => {
        formMessage.classList.add('fade-out');
        setTimeout(() => {
            formMessage.textContent = '';
            formMessage.classList.remove('fade-out', 'success', 'error');
        }, 500);
    }, 3000);
}