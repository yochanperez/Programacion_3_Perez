const caja= document.getElementById('caja');

caja.addEventListener('mouseover', ()=>{
    caja.style.backgroundColor = 'yellow';
});

caja.addEventListener('click',()=>{
    alert('!Has hecho click en la caja');
});

caja.addEventListener('mouseout',()=>{
    caja.style.backgroundColor= 'lightcyan'
})

const circulo = document.getElementById('circulo');
let colores = ['red', 'green', 'blue', 'orange', 'purple', 'pink'];
let colorActual = 0;


let arrastrando = false;


// Cambiar color
function cambiarColor() {
   colorActual = (colorActual + 1) % colores.length;
   circulo.style.background = colores[colorActual];
}


// Mover el círculo al punto (centrado)
function moverCirculo(x, y) {
   const container = document.getElementById('container');
   const containerRect = container.getBoundingClientRect();
   const circuloRect = circulo.getBoundingClientRect();
   const mitadAncho = circuloRect.width / 2;
   const mitadAlto = circuloRect.height / 2;


   const offsetTop = containerRect.top + window.scrollY;
   const offsetLeft = containerRect.left + window.scrollX;


   circulo.style.left = (x - offsetLeft - mitadAncho) + 'px';
   circulo.style.top = (y - offsetTop - mitadAlto) + 'px';
}




// Touch Events
circulo.addEventListener('touchstart', (e) => {
   e.preventDefault();
   cambiarColor();
   arrastrando = true;
});


document.addEventListener('touchmove', (e) => {
   if (!arrastrando) return;
   const touch = e.touches[0];
   moverCirculo(touch.pageX, touch.pageY);
});


document.addEventListener('touchend', () => {
   arrastrando = false;
});


// Mouse Events
circulo.addEventListener('mousedown', (e) => {
   e.preventDefault();
   cambiarColor();
   arrastrando = true;
});


document.addEventListener('mousemove', (e) => {
   if (!arrastrando) return;
   moverCirculo(e.clientX, e.clientY);
});


document.addEventListener('mouseup', () => {
   arrastrando = false;
});






// Cuarto ejemplo: Botón que crece con eventos


const boton = document.getElementById('botonAnimado');


// Aumentar tamaño
function agrandar() {
   boton.style.transform = 'scale(1.5)';
}


// Volver a tamaño normal
function normalizar() {
   boton.style.transform = 'scale(1)';
}


// Mouse events
boton.addEventListener('mouseover', agrandar);
boton.addEventListener('mouseout', normalizar);


// Touch events
boton.addEventListener('touchstart', (e) => {
   e.preventDefault();
   agrandar();
});
boton.addEventListener('touchend', normalizar);




// Cuarto ejemplo: Espiral que gira al arrastrar y se detiene a los 6 segundos
const espiral = document.getElementById('espiral');
let rotacion = 0;
let arrastrandoEspiral = false;
let intervaloGiro = null;


// Función para girar
function girar(xInicial, xActual) {
   const diferencia = xActual - xInicial;
   rotacion += diferencia * 0.5; // Controla velocidad de giro
   espiral.style.transform = `rotate(${rotacion}deg)`;
}


// Evento Touch
let xInicioTouch = 0;


espiral.addEventListener('touchstart', (e) => {
   e.preventDefault();
   const touch = e.touches[0];
   xInicioTouch = touch.pageX;
   arrastrandoEspiral = true;


   if (intervaloGiro) clearTimeout(intervaloGiro);
   intervaloGiro = setTimeout(() => arrastrandoEspiral = false, 6000); // Detener a los 6 segundos
});


document.addEventListener('touchmove', (e) => {
   if (!arrastrandoEspiral) return;
   const touch = e.touches[0];
   girar(xInicioTouch, touch.pageX);
   xInicioTouch = touch.pageX;
});


document.addEventListener('touchend', () => {
   arrastrandoEspiral = false;
});






// Evento Mouse
const triangulo = document.getElementById('triangulo');
let isDragging = false;
let startX = 0;
let scaleValue = 1;


// Función para actualizar tamaño
function updateScale(newX) {
   const diffX = newX - startX;
   scaleValue += diffX * 0.005; // Ajusta sensibilidad aquí
   scaleValue = Math.max(0.5, Math.min(2, scaleValue)); // Limitar entre 0.5x y 2x
   triangulo.style.transform = `scale(${scaleValue})`;
   startX = newX; // actualizar la posición para el siguiente movimiento
}


// MOUSE Events
triangulo.addEventListener('mousedown', (e) => {
   e.preventDefault();
   isDragging = true;
   startX = e.clientX;
});


document.addEventListener('mousemove', (e) => {
   if (!isDragging) return;
   updateScale(e.clientX);
});


document.addEventListener('mouseup', () => {
   isDragging = false;
});


// TOUCH Events
triangulo.addEventListener('touchstart', (e) => {
   e.preventDefault();
   isDragging = true;
   startX = e.touches[0].clientX;
});


document.addEventListener('touchmove', (e) => {
   if (!isDragging) return;
   updateScale(e.touches[0].clientX);
});


document.addEventListener('touchend', () => {
   isDragging = false;
});


