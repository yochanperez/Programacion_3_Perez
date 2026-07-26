const alumnos = [];
const NOTA_MINIMA_APROBACION = 6;

function agregarAlumno() {
   const inNombre = document.getElementById('inNombre');
   const inNota = document.getElementById('inNota');
   const divError = document.getElementById('error');
   const est = document.getElementById('estadisticas');

   if (!inNombre || !inNota) return;

   const nombre = inNombre.value.trim();
   const nota = parseFloat(inNota.value);

   if (divError) divError.style.display = 'none';

   if (nombre === '') {
       if (divError) {
           divError.textContent = 'Por favor ingresa el nombre del jugador.';
           divError.style.display = 'block';
       }
       return;
   }

   if (isNaN(nota) || nota < 0 || nota > 10) {
       if (divError) {
           divError.textContent = 'El puntaje de rendimiento debe estar entre 0 y 10.';
           divError.style.display = 'block';
       }
       return;
   }

   alumnos.push({ nombre, nota });

   inNombre.value = '';
   inNota.value = '';
   inNombre.focus();

   renderizarTabla();

   if (est) est.style.display = 'none';
}

function renderizarTabla() {
   const tbody = document.getElementById('tablaBody');
   const listaAlumnos = document.getElementById('listaAlumnos');

   if (!tbody) return;

   tbody.innerHTML = '';

   alumnos.forEach((alumno, index) => {
       const aprobado = alumno.nota >= NOTA_MINIMA_APROBACION;
       const fila = document.createElement('tr');
       fila.innerHTML = `
           <td>${index + 1}</td>
           <td>${alumno.nombre}</td>
           <td>${alumno.nota.toFixed(2)}</td>
           <td class="${aprobado ? 'estado-aprobado' : 'estado-reprobado'}">
               ${aprobado ? 'Apto' : 'No Apto'}
           </td>
           <td>
               <button class="btn-eliminar" onclick="eliminarAlumno(${index})" title="Eliminar">✕</button>
           </td>
       `;
       tbody.appendChild(fila);
   });

   if (listaAlumnos) {
       listaAlumnos.style.display = alumnos.length > 0 ? 'block' : 'none';
   }
}

function eliminarAlumno(index) {
   alumnos.splice(index, 1);
   renderizarTabla();
   const est = document.getElementById('estadisticas');
   if (est) est.style.display = 'none';
}

function calcularEstadisticas() {
   const divError = document.getElementById('error');
   const est = document.getElementById('estadisticas');

   if (divError) divError.style.display = 'none';

   if (alumnos.length === 0) {
       if (divError) {
           divError.textContent = 'Agrega al menos un jugador antes de calcular.';
           divError.style.display = 'block';
       }
       return;
   }

   const notas = alumnos.map(a => a.nota);
   const promedio = notas.reduce((acc, n) => acc + n, 0) / notas.length;
   const mayor = Math.max(...notas);
   const menor = Math.min(...notas);
   const aprobados = alumnos.filter(a => a.nota >= NOTA_MINIMA_APROBACION).length;

   const sPromedio = document.getElementById('sPromedio');
   const sMayor = document.getElementById('sMayor');
   const sMenor = document.getElementById('sMenor');
   const sAprobados = document.getElementById('sAprobados');

   if (sPromedio) sPromedio.textContent = promedio.toFixed(2);
   if (sMayor) sMayor.textContent = mayor.toFixed(2);
   if (sMenor) sMenor.textContent = menor.toFixed(2);
   if (sAprobados) sAprobados.textContent = `${aprobados} / ${alumnos.length}`;

   if (est) est.style.display = 'block';
}

function limpiar() {
   alumnos.length = 0;
   renderizarTabla();

   const est = document.getElementById('estadisticas');
   const divError = document.getElementById('error');
   const inNombre = document.getElementById('inNombre');
   const inNota = document.getElementById('inNota');

   if (est) est.style.display = 'none';
   if (divError) divError.style.display = 'none';
   if (inNombre) inNombre.value = '';
   if (inNota) inNota.value = '';
   if (inNombre) inNombre.focus();
}

document.addEventListener("DOMContentLoaded", () => {
   ['inNombre', 'inNota'].forEach(id => {
       const el = document.getElementById(id);
       if (el) {
           el.addEventListener('keydown', e => {
               if (e.key === 'Enter') agregarAlumno();
           });
       }
   });
});