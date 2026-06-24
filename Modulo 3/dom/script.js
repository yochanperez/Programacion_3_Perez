// 1. ESTADO: Datos en memoria
const tareas = [
    { id: 1, titulo: "Estudiar DOM", descripcion: "Practicar el CRUD para la prueba", prioridad: "Alta" },
    { id: 2, titulo: "Hacer gym", descripcion: "Entrenamiento de piernas", prioridad: "Media" }
];

// Bandera global para identificar si estamos creando o editando
let idEnEdicion = null;

// 2. RENDER: Sincroniza el Array con el HTML
function renderTareas() {
    const lista = document.getElementById("listaTareas");
    lista.innerHTML = ""; // Limpieza crucial para evitar duplicados

    tareas.forEach(tarea => {
        const item = document.createElement("li");
        
        // Estructura de texto y botones con eventos inline pasando el ID
        item.innerHTML = `
            <strong>${tarea.titulo}</strong> - ${tarea.descripcion} [Prioridad: ${tarea.prioridad}]
            <button onclick="prepararEdicion(${tarea.id})">Editar</button>
            <button onclick="eliminarTarea(${tarea.id})">Eliminar</button>
        `;
        
        lista.appendChild(item);
    });

    actualizarEstadisticas();
}

// 3. ESTADÍSTICAS: Cálculos sobre el array
function actualizarEstadisticas() {
    // Total de elementos
    document.getElementById("stat_total").textContent = tareas.length;

    // Filtrado por propiedad
    const tareasAltas = tareas.filter(tarea => tarea.prioridad === "Alta");
    document.getElementById("stat_alta").textContent = tareasAltas.length;
}

// 4. GUARDAR: Procesa la inserción o actualización
function guardarTarea() {
    const titulo = document.getElementById("titulo").value.trim();
    const descripcion = document.getElementById("descripcion").value.trim();
    const prioridad = document.getElementById("prioridad").value;

    if (!titulo || !descripcion) {
        alert("Por favor, llena todos los campos");
        return;
    }

    if (idEnEdicion !== null) {
        // MODO EDICIÓN: Buscar y mutar objeto existente
        const tarea = tareas.find(t => t.id === idEnEdicion);
        if (tarea) {
            tarea.titulo = titulo;
            tarea.descripcion = descripcion;
            tarea.prioridad = prioridad;
        }
        idEnEdicion = null;
        document.getElementById("btn_guardar").textContent = "Guardar Tarea";
    } else {
        // MODO CREACIÓN: Generar ID autoincremental y empujar objeto
        const nuevoId = tareas.length > 0 ? Math.max(...tareas.map(t => t.id)) + 1 : 1;
        
        const nuevaTarea = {
            id: nuevoId,
            titulo: titulo,
            descripcion: descripcion,
            prioridad: prioridad
        };
        tareas.push(nuevaTarea);
    }

    limpiarFormulario();
    renderTareas();
}

// 5. PREPARAR EDICIÓN: Carga el objeto seleccionado al formulario
function prepararEdicion(id) {
    const tarea = tareas.find(t => t.id === id);
    if (!tarea) return;

    document.getElementById("titulo").value = tarea.titulo;
    document.getElementById("descripcion").value = tarea.descripcion;
    document.getElementById("prioridad").value = tarea.prioridad;

    idEnEdicion = id; // Activamos modo edición guardando el ID objetivo
    document.getElementById("btn_guardar").textContent = "Actualizar";
}

// 6. ELIMINAR: Remueve por índice
function eliminarTarea(id) {
    const indice = tareas.findIndex(t => t.id === id);

    if (indice !== -1) {
        tareas.splice(indice, 1); // Corta el elemento del array
        renderTareas(); // Re-renderiza para reflejar el cambio
    }
}

// 7. LIMPIAR: Resetea controles de la interfaz
function limpiarFormulario() {
    document.getElementById("titulo").value = "";
    document.getElementById("descripcion").value = "";
    document.getElementById("prioridad").value = "Alta";
    
    idEnEdicion = null;
    document.getElementById("btn_guardar").textContent = "Guardar Tarea";
}

// ASIGNACIÓN DE ESCUCHADORES
document.getElementById("btn_guardar").addEventListener("click", guardarTarea);
document.getElementById("btn_cancelar").addEventListener("click", limpiarFormulario);

// Carga inicial al montar el documento
window.onload = renderTareas;