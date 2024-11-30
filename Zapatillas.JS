let index = 0;
const images = document.querySelectorAll('.carrusel-images img');
const totalImages = images.length;

function mostrarImagen(index) {
    images.forEach((img, i) => {
        img.style.display = i === index ? 'block' : 'none';
    });
}

function cambiarImagen(direction) {
    index = (index + direction + totalImages) % totalImages;
    mostrarImagen(index);
}

// Inicializar el carrusel
mostrarImagen(index);

// Cambiar de imagen automáticamente cada 3 segundos
setInterval(() => {
    cambiarImagen(1);
}, 3000);