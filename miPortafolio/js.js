// script.js

const form = document.querySelector('.contact form');

form.addEventListener('submit', (evento) => {
    evento.preventDefault();
    const nombre = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const mensaje = document.querySelector('#message').value;
    alert(`Se ha recibido tu mensaje. ¡Gracias ${nombre}!`);
});
