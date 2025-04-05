// Cerrar menú móvil
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        const navbar = document.querySelector('.navbar-collapse');
        navbar.classList.remove('show');
    });
});

// Acordiones de gramática
document.querySelectorAll('.topic-header').forEach(header => {
    header.addEventListener('click', () => {
        const content = header.nextElementSibling;
        content.style.maxHeight = content.style.maxHeight 
            ? null 
            : content.scrollHeight + 'px';
    });
});

// Filtros de recursos
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        // Lógica de filtrado
    });
});