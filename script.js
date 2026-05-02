// Dark Mode Toggle
const toggleButton = document.getElementById('darkModeToggle');
const root = document.documentElement;

// Check localStorage for saved preference
if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark-mode');
    if (toggleButton) toggleButton.innerHTML = '<span>☀️</span> <span>Light</span>';
}

if (toggleButton) {
    toggleButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('darkMode', 'enabled');
            toggleButton.innerHTML = '<span>☀️</span> <span>Light</span>';
        } else {
            localStorage.setItem('darkMode', 'disabled');
            toggleButton.innerHTML = '<span>🌙</span> <span>Dark</span>';
        }
    });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        if (targetId === "#" || targetId === "") return;
        const target = document.querySelector(targetId);
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Intersection Observer for fade-in effects
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.1, rootMargin: "0px 0px -40px 0px" });

document.querySelectorAll('.demo-item, .feature-item, .app-card').forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(18px)";
    el.style.transition = "opacity 0.5s ease, transform 0.4s ease";
    observer.observe(el);
});

// Parallax effect for hero background
window.addEventListener('scroll', () => {
    const heroBg = document.querySelector('.hero-background');
    if (heroBg) {
        heroBg.style.transform = `translateY(${window.scrollY * 0.3}px)`;
    }
});

console.log("%c✨ RagChat · UOB AI Assistant", "font-size: 18px; font-weight: bold; color: #00796b;");
console.log("%cDark mode ready – toggle with top-right button", "font-size: 13px; color: #ff6f00;");