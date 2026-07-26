document.addEventListener("DOMContentLoaded", () => {
    const campoTarea = document.getElementById('campo_tarea');
    const botonAgregar = document.getElementById('btn_agregar');
    const listaTareas = document.getElementById('lista_tareas');

    if (botonAgregar && campoTarea && listaTareas) {
        botonAgregar.addEventListener('click', function() {
            const incidencia = campoTarea.value.trim();
            if (incidencia !== '') {
                const li = document.createElement('li');
                li.textContent = `⚽ ${incidencia}`;
                listaTareas.appendChild(li);
                campoTarea.value = '';
            }
        });
    }
});