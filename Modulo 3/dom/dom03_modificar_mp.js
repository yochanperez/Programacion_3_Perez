document.addEventListener("DOMContentLoaded",
    function() {
        const marcador = document.getElementById("estado-marcador");
        if (marcador) {
            marcador.textContent = "Liga de Quito 1 - 0 Independiente del Valle (Gol: M. Caicedo 34')";
            console.log("Estado del marcador:", marcador);
        }

        const linkFicha = document.getElementById("link-ficha");
        if (linkFicha) {
            linkFicha.textContent = "Ver Reporte de Metricas en Vivo";
            linkFicha.href = "https://www.feffutbol.org";
            linkFicha.classList.add("boton"); 
            console.log("Enlace de estadísticas:", linkFicha);
        }
    }
);