document.addEventListener('DOMContentLoaded', () => {
    const hamburguesa = document.querySelector('#hamburguer');
    const enlaces = document.querySelector('#nav-links');
    
    hamburguesa.addEventListener('click', () => {
        enlaces.classList.toggle('show');
    });

    // Selecciona todos los enlaces dentro de nav-links
    const linkItems = enlaces.querySelectorAll('a');

    // Agrega un evento de clic a cada enlace
    linkItems.forEach(link => {
        link.addEventListener('click', () => {
            enlaces.classList.remove('show'); // Cierra el menú
        });
    });
});