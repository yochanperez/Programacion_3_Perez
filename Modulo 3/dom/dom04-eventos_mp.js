// -------------------------------------------------------------
// FUNCIONES GLOBALES (Llamadas por los atributos onclick)
// -------------------------------------------------------------

function mostrarAlerta() {
    alert("¡Alerta táctica desde el evento onclick!");
}

function agregarProducto() {
    const lista = document.getElementById("lista-productos1");
    const nuevaIncidencia = document.createElement("li");
    nuevaIncidencia.textContent = "Nueva jugada registrada (Tiro de esquina)";
    lista.appendChild(nuevaIncidencia);
}

function reemplazarParrafo() {
    const parrafo = document.getElementById("parrafo");
    const nuevoParrafo = document.createElement("p");
    nuevoParrafo.textContent = "Reporte táctico actualizado: ¡Queremos ese 10 profe!";
    parrafo.replaceWith(nuevoParrafo);
}

document.addEventListener("DOMContentLoaded", () => {

    const btn3 = document.getElementById("btn3");
    if (btn3) {
        btn3.addEventListener("click", function() {
            const lista2 = document.getElementById("lista-productos1");
            const nuevaIncidencia2 = document.createElement("li");
            nuevaIncidencia2.textContent = "Incidencia desde Listener: Tarjeta Amarilla";
            lista2.appendChild(nuevaIncidencia2);
        });
    }

    const campo = document.getElementById('campo');
    if (campo) {
        campo.addEventListener('input', () => {
            console.log(
                'Jugador buscado:',
                campo.value
            );
        });
    }

    const campoActualizar = document.getElementById('campo_actualizar_parrafo');
    const parrafo2 = document.getElementById('parrafo2');
    if (campoActualizar && parrafo2) {
        campoActualizar.addEventListener('input', () => {
            const valorCampo = campoActualizar.value;
            parrafo2.textContent = `Observación_actualizada: ${valorCampo}`;
        });
    }
});