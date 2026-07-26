document.addEventListener("DOMContentLoaded", () => {


    const caja = document.getElementById('caja');

    if (caja) {
        caja.addEventListener('mouseover', () => {
            caja.style.backgroundColor = '#fef08a'; 
        });

        caja.addEventListener('click', () => {
            alert('📊 Zona de remate registrada en la base de datos de estadísticas.');
        });

        caja.addEventListener('mouseout', () => {
            caja.style.backgroundColor = 'lightcyan';
        });
    }

    const circulo = document.getElementById('circulo');
    let colores = ['#ef4444', '#22c55e', '#3b82f6', '#f97316', '#a855f7', '#ec4899'];
    let colorActual = 0;

    let arrastrando = false;

    function cambiarColor() {
        if (!circulo) return;
        colorActual = (colorActual + 1) % colores.length;
        circulo.style.background = colores[colorActual];
    }

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

    const boton = document.getElementById('botonAnimado');

    function agrandar() {
        if (boton) boton.style.transform = 'scale(1.5)';
    }

    function normalizar() {
        if (boton) boton.style.transform = 'scale(1)';
    }

    if (boton) {
        boton.addEventListener('mouseover', agrandar);
        boton.addEventListener('mouseout', normalizar);

        boton.addEventListener('touchstart', (e) => {
            e.preventDefault();
            agrandar();
        });
        boton.addEventListener('touchend', normalizar);
    }


    const espiral = document.getElementById('espiral');
    let rotacion = 0;
    let arrastrandoEspiral = false;
    let intervaloGiro = null;

    function girar(xInicial, xActual) {
        if (!espiral) return;
        const diferencia = xActual - xInicial;
        rotacion += diferencia * 0.5; // Velocidad de giro para ajustar la orientación del mapa
        espiral.style.transform = `rotate(${rotacion}deg)`;
    }

    let xInicioTouch = 0;

    if (espiral) {
        espiral.addEventListener('touchstart', (e) => {
            e.preventDefault();
            const touch = e.touches[0];
            xInicioTouch = touch.pageX;
            arrastrandoEspiral = true;

            if (intervaloGiro) clearTimeout(intervaloGiro);
            intervaloGiro = setTimeout(() => arrastrandoEspiral = false, 6000); // Detener análisis a los 6s
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
        startX = newX;
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
});