function mostrarAlerta() {
    alert("Hola desde el evento onclick");
}

function agregarProducto() {
    const lista = document.getElementById("lista-productos1");
    const nuevoProducto = document.createElement("li");
    nuevoProducto.textContent = "Nuevo Producto";
    lista.appendChild(nuevoProducto);
}

document.getElementById("btn3").addEventListener("click", function() {
    const lista2 = document.getElementById("lista-productos1");
    const nuevoProducto2 = document.createElement("li");
    nuevoProducto2.textContent = "Producto desde Listener";
    lista2.appendChild(nuevoProducto2);
});

function reemplazarParrafo() {
    const parrafo = document.getElementById("parrafo");
    const nuevoparrafo = document.createElement("p");
    nuevoparrafo.textContent = "Quiero mi 10 profe";
    parrafo.replaceWith(nuevoparrafo);
}