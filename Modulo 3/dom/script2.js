const tareas = [
    { id: 1, titulo: "Estudiar DOM", descripcion: "Ponte las pilas guevon", prioridad: "Alta"}
];

let idEnEdicion = null;

function renderTareas() {
    const lista = document.getElementById("listaTareas");
    lista.innerHTML="";

    tareas.forEach(tarea=> {
        const item = document.createElement("li");

        item.innerHTML = 
        `<strong>${tarea.titulo}</strong> - ${tarea.descripcion}  [Prioridad: ${tarea.prioridad}]
        <button onclick="prepararEdicion(${tarea.id})">Editar</button>
        <button onclick="eliminarTarea(${tarea.id})">Eliminar</button>
        `;

        lista.appendChild(item);
    })

    actualizarEstadisticas();

}

function actualizarEstadisticas(){
    document.getElementById("stat_total").textContent = tareas.length;
}

function guardarTarea() {
    const titulo = document.getElementById("titulo").value.trim();
    const descripcion = document.getElementById("descripcion").value.trim();
    const prioridad = document.getElementById("prioridad").value;

    if (!titulo || !descripcion) {
        alert("Por favor, llena todos los campos");
        return;
    }

    if(idEnEdicion !== null){
        const tarea = tareas.find(t => t.id === idEnEdicion);
        if (tarea){
            tarea.titulo = titulo;
            tarea.descripcion = descripcion,
            tarea.prioridad = prioridad;
        }
        idEnEdicion= null;
        document.getElementById("btn_guardar").textContent = "Guardar Tarea"
    } else {
        const nuevoId = tareas.length > 0
    }
}

function prepararEdicion(id){
    const tarea = tareas.find(t => t.id === id);
    if (!tarea) return;

    document.getElementById("titulo").value = tarea.titulo;
    document.getElementById("descripcion").value = tarea.descripcion;
    document.getElementById("prioridad").value = tarea.prioridad;

    idEnEdicion = id;
    document.getElementById("btn_guardar").textContent = "Actualizar";
}

function eliminarTarea(id){
    const indice = tareas.findIndex(t => t.id ===id);

    if(indice !== -1) {
        tareas.splice(indice, 1);
        renderTareas();
    }

}

function limpiarFormulario(){
    document.getElementById("titulo").value= "";
    document.getElementById("descripcion").value ="";
    document.getElementById("prioridad").value = "Alta";

    idEnEdicion=null;
    document.getElementById("btn_guardar").textContent = "Guardar Tareas"

}

document.getElementById("btn_guardar").addEventListener("click", guardarTarea);
document.getElementById("btn_guardar").addEventListener("click", guardarTarea);

window.onload = renderTareas;
