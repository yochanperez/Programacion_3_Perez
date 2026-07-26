// Esperar a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", () => {

    const partidoData = {
        posesion: "58%",
        tirosAPuerta: 7,
        xg: 2.14
    };

    const jugadoresData = [
        { nombre: "Moises Caicedo", posicion: "MCD", pases: 64, recuperaciones: 9, calificacion: 8.5 },
        { nombre: "Piero Hincapié", posicion: "DFC", pases: 51, recuperaciones: 7, calificacion: 7.9 },
        { nombre: "Enner Valencia", posicion: "DC", pases: 18, recuperaciones: 2, calificacion: 7.2 },
        { nombre: "Kendry Páez", posicion: "MCO", pases: 42, recuperaciones: 4, calificacion: 8.1 }
    ];


    const elemPosesion = document.getElementById("posesion");
    const elemTiros = document.getElementById("tiros");
    const elemXg = document.getElementById("xg");

    if (elemPosesion) elemPosesion.textContent = partidoData.posesion;
    if (elemTiros) elemTiros.textContent = partidoData.tirosAPuerta;
    if (elemXg) elemXg.textContent = partidoData.xg;

    const listaJugadores = document.getElementById("lista-jugadores");

    if (listaJugadores) {
        // Limpiar contenido previo si existiera
        listaJugadores.innerHTML = "";

        jugadoresData.forEach(jugador => {
            const fila = document.createElement("tr");

            fila.innerHTML = `
                <td><strong>${jugador.nombre}</strong></td>
                <td>${jugador.posicion}</td>
                <td>${jugador.pases}</td>
                <td>${jugador.recuperaciones}</td>
                <td>${jugador.calificacion}</td>
            `;

            listaJugadores.appendChild(fila);
        });
    }
});