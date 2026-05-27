// Variable global que define el umbral mínimo aceptable de efectividad en el club
const UMBRAL_EFECTIVIDAD_MINIMA = 10.0;

/*
   El siguiente bloque de código implementa el algoritmo estándar
   utilizado por el departamento de scouting para evaluar si un atacante
   optimiza de manera correcta sus tiros a puerta a lo largo de la temporada.
*/

/**
 * Calcula el porcentaje de efectividad de un delantero frente al arco rival.
 * Evalúa la relación directa entre remates totales y anotaciones concretadas.
 *
 * @param {string} jugador - Apellido o nombre del futbolista evaluado.
 * @param {number} remates - Cantidad total de tiros con dirección a portería.
 * @param {number} goles - Cantidad total de anotaciones validadas por el árbitro.
 * @returns {string} Resumen detallado del rendimiento técnico para el cuerpo técnico.
 */
function calcularTasaConversion(jugador, remates, goles) {
  if (remates <= 0) {
    return `Jugador: ${jugador} - Sin remates registrados en la fecha.`;
  }

  const porcentajeEfectividad = (goles / remates) * 100;
  
  return `Jugador: ${jugador} | Rendimiento: ${porcentajeEfectividad.toFixed(1)}% de efectividad de cara al arco.`;
}

const reporteFinalDelantero = calcularTasaConversion("Haand", 20, 4);
console.log(reporteFinalDelantero);