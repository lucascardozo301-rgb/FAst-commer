// 2. Efecto de aparición (Fade-in) de las secciones al bajar
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// 3. Animación de Salto al hacer Clic en los títulos
document.querySelectorAll('.jump-text').forEach(title => {
    title.addEventListener('click', () => {
        title.classList.add('jump-active');
        // Quitamos la clase al terminar la animación
        setTimeout(() => title.classList.remove('jump-active'), 500);
    });
});
const toggle=document.getElementById("menu-toggle");
const nav=document.getElementById("nav-links");
toggle.addEventListener("click", () => {
    nav.classList.toggle("active");
    toggle.classList.toggle("open"); 
});
