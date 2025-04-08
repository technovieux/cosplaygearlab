
// Animation pour la navigation
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Effet de survol sur les éléments du portfolio
const items = document.querySelectorAll('.item');
items.forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.transform = 'translateY(-10px)';
    });
    item.addEventListener('mouseleave', () => {
        item.style.transform = 'translateY(0)';
    });
});

// Formulaire de contact
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    form.reset();
});
