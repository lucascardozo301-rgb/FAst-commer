// 1. Efecto de Desvanecido Moderno y Parallax en el Fondo
window.addEventListener('scroll', () => {
    const scroll = window.pageYOffset;
    const heroBg = document.getElementById('hero-bg');
    const heroSection = document.getElementById('hero-section');
    
    if (heroSection) {
        const height = heroSection.offsetHeight;
        
        // Mueve la imagen un poco más lento (Parallax)
        heroBg.style.transform = `translateY(${scroll * 0.4}px)`;
        
        // Baja la opacidad suavemente según bajas el scroll
        let opacityValue = 1 - (scroll / height);
        
        // No dejamos que baje de 0
        heroBg.style.opacity = opacityValue < 0 ? 0 : opacityValue;
    }
});

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