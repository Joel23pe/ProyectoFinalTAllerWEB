const hamburguesa = document.querySelector('#hamburguer'); // Corrigido
const enlaces = document.querySelector('#nav-links');

hamburguesa.addEventListener('click', () => {
    enlaces.classList.toggle('show'); // Usar el nombre correctamente
});