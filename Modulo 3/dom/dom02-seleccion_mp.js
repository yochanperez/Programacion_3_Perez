document.addEventListener("DOMContentLoaded",
    function() {
        const titulo = document.getElementById("titulo-liga");
        console.log("Título del torneo:", titulo ? titulo.textContent : null);

        const notas = document.getElementsByClassName("destacado");
        console.log("Párrafos destacados del partido:", notas);

        const items = document.getElementsByTagName("li");
        console.log("Total de filas/elementos de lista (<li>):", items);

        const primerJugador = document.querySelector(".jugador-top");
        console.log("Jugador con mejor rendimiento:", primerJugador ? primerJugador.textContent : null);

        const todosLosJugadores = document.querySelectorAll(".jugador-top");
        console.log("Todos los jugadores destacados (NodeList):", todosLosJugadores);

        Array.from(todosLosJugadores).forEach((jugador, index) => {
            console.log(`Top ${index + 1}:`, jugador.textContent);
        });
    }
);