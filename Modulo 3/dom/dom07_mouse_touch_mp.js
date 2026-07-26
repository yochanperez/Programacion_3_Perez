document.addEventListener("DOMContentLoaded", () => {
    const boton = document.getElementById('botonAnimado');

    if (boton) {
        boton.textContent = "⚽ Registrar Remate a Puerta";
    }

    function agrandar() {
        if (boton) {
            boton.style.transform = 'scale(1.5)';
            boton.style.backgroundColor = '#16a34a';
            boton.style.color = '#ffffff';
        }
    }

    function normalizar() {
        if (boton) {
            boton.style.transform = 'scale(1)';
            boton.style.backgroundColor = '';
            boton.style.color = '';
        }
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
});