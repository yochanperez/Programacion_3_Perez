// -------------------------------------------------------------
// Ejercicio 1: Inspección Táctica (Caja de Área)
// -------------------------------------------------------------
const caja = document.getElementById('caja');

if (caja) {
    caja.addEventListener('mouseover', () => {
        caja.style.backgroundColor = 'yellow'; // Marcado de presión alta
    });

    caja.addEventListener('click', () => {
        alert('⚽ ¡Zona de penal seleccionada para el disparo!');
    });

    caja.addEventListener('mouseout', () => {
        caja.style.backgroundColor = 'lightcyan';
    });
}

// -------------------------------------------------------------
// Ejercicio 2 y 3: Arrastre de Balón y Cambio de Equipos
// -------------------------------------------------------------
const circulo = document.getElementById('circulo'); // Representa el balón en la cancha
// Colores de camisetas / equipaciones de clubes
let colores = ['#ef4444', '#22c55e', '#3b82f6', '#f97316', '#a855f7', '#ec4899'];
let colorActual = 0;

let arrastrando = false;

// Cambiar color (Simula cambio de equipación/tarjeta al interactuar)
function cambiarColor() {
    if (!circulo) return;
    colorActual = (colorActual + 1) % colores.length;
    circulo.style.background = colores[colorActual];
}

// Mover el balón al punto exacto (centrado en la cancha)
function moverCirculo(x, y) {
    if (!circulo) return;
    const container = document.getElementById('container');
    if (!container) return;

    const containerRect = container.getBoundingClientRect();
    const circuloRect = circulo.getBoundingClientRect();
    const mitadAncho = circuloRect.width / 2;
    const mitadAlto = circuloRect.height / 2;

    const offsetTop = containerRect.top + window.scrollY;
    const offsetLeft = containerRect.left + window.scrollX;

    circulo.style.left = (x - offsetLeft - mitadAncho) + 'px';
    circulo.style.top = (y - offsetTop - mitadAlto) + 'px';
}

// Touch Events para Pantalla Táctil (Móvil / Tablet)
if (circulo) {
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

    // Mouse Events (Escritorio)
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
}

// -------------------------------------------------------------
// Ejercicio 4: Botón de Remate Agrandado
// -------------------------------------------------------------
const boton = document.getElementById('botonAnimado');

// Aumentar potencia/tamaño del botón de remate
function agrandar() {
    if (boton) boton.style.transform = 'scale(1.5)';
}

// Volver a tamaño normal
function normalizar() {
    if (boton) boton.style.transform = 'scale(1)';
}

if (boton) {
    // Mouse events
    boton.addEventListener('mouseover', agrandar);
    boton.addEventListener('mouseout', normalizar);

    // Touch events
    boton.addEventListener('touchstart', (e) => {
        e.preventDefault();
        agrandar();
    });
    boton.addEventListener('touchend', normalizar);
}

// -------------------------------------------------------------
// Ejercicio 5: Rotación del Indicador Táctico (Espiral/Brújula de Ataque)
// -------------------------------------------------------------
const espiral = document.getElementById('espiral');
let rotacion = 0;
let arrastrandoEspiral = false;
let intervaloGiro = null;

// Función para girar la orientación del ataque
function girar(xInicial, xActual) {
    if (!espiral) return;
    const diferencia = xActual - xInicial;
    rotacion += diferencia * 0.5; // Controla velocidad del cambio de orientación
    espiral.style.transform = `rotate(${rotacion}deg)`;
}

// Evento Touch para Espiral
let xInicioTouch = 0;

if (espiral) {
    espiral.addEventListener('touchstart', (e) => {
        e.preventDefault();
        const touch = e.touches[0];
        xInicioTouch = touch.pageX;
        arrastrandoEspiral = true;

        if (intervaloGiro) clearTimeout(intervaloGiro);
        // Detener animación de presión a los 6 segundos de inactividad
        intervaloGiro = setTimeout(() => arrastrandoEspiral = false, 6000);
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
}

// -------------------------------------------------------------
// Ejercicio 6: Escala de Presión Defensiva (Triángulo / Flecha Táctica)
// -------------------------------------------------------------
const triangulo = document.getElementById('triangulo');
let isDragging = false;
let startX = 0;
let scaleValue = 1;

function updateScale(newX) {
    if (!triangulo) return;
    const diffX = newX - startX;
    scaleValue += diffX * 0.005; 
    scaleValue = Math.max(0.5, Math.min(2, scaleValue)); 
    triangulo.style.transform = `scale(${scaleValue})`;
}

if (triangulo) {
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
}