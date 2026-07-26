document.addEventListener("DOMContentLoaded", () => {
    console.log("Revisión de DOM");
    console.log(document.head);
    console.log(document.body);
    console.log(document.title);
    console.log(document.children)
}
);
document.addEventListener("DOMContentLoaded", () => {

    // 1. Seleccionar los elementos del HTML existente
    const titulo = document.querySelector("h1");
    const parrafo = document.querySelector("p");

    if (titulo) {
        titulo.textContent = "Análisis de Datos y Estadísticas de Fútbol";
        titulo.style.color = "#1e3a8a"; // Azul oscuro
        titulo.style.fontFamily = "sans-serif";
    }

    if (parrafo) {
        parrafo.innerHTML = `
            Mediante la manipulación del <strong>DOM (Document Object Model)</strong>, 
            podemos actualizar en tiempo real métricas clave de partidos, como la 
            <em>posesión del balón</em>, <em>tiros a puerta</em> y el rendimiento individual 
            de los jugadores sin necesidad de recargar la página.
        `;
        parrafo.style.fontSize = "1.1rem";
        parrafo.style.lineHeight = "1.6";
    }

    const contenedorStats = document.createElement("div");
    contenedorStats.style.marginTop = "20px";
    contenedorStats.style.padding = "15px";
    contenedorStats.style.border = "2px solid #22c55e"; 
    contenedorStats.style.borderRadius = "8px";
    contenedorStats.style.backgroundColor = "#f0fdf4";

    contenedorStats.innerHTML = `
        <h3 style="margin-top:0; color: #15803d;">Dato Destacado del Partido</h3>
        <p id="stat-destacada">Haz clic en el botón de abajo para cargar una estadística en vivo.</p>
        <button id="btn-cargar" style="padding: 8px 16px; background-color: #15803d; color: white; border: none; border-radius: 4px; cursor: pointer;">
            Cargar Estadística
        </button>
    `;

    document.body.appendChild(contenedorStats);

    const boton = document.getElementById("btn-cargar");
    const textoStat = document.getElementById("stat-destacada");

    if (boton && textoStat) {
        boton.addEventListener("click", () => {
            textoStat.innerHTML = "<strong>Moisés Caicedo</strong> completó 12 recuperaciones de balón en los últimos 90 minutos.";
            boton.style.backgroundColor = "#047857";
            boton.textContent = "¡Estadística Actualizada!";
        });
    }
});