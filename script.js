const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', function() {
    nav.classList.toggle('show');
});






// Check window resize
window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
        nav.style.display = 'flex';
    } else if (!nav.classList.contains('show')) {
        nav.style.display = 'none';
    }
});









