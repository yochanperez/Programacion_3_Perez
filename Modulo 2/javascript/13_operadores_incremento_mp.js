let faltasEquipo = 5;

console.log("--------------------------------------------------");
console.log("🏃 MONITOREO DE CONTADORES UNARIOS EN CAMPO");
console.log("--------------------------------------------------");

// El árbitro otorga ley de la ventaja y luego registra la infracción cometida
faltasEquipo++;

// Infracción táctica inmediata: el colegiado detiene el juego y la acumula al instante
++faltasEquipo;

let jugadoresDisponibles = 11;

// Un futbolista abandona el terreno de juego lesionado antes de efectuar el cambio
jugadoresDisponibles--;

// Expulsión directa por tarjeta roja: el jugador se retira de la cancha de inmediato
--jugadoresDisponibles;


// EJEMPLO PRÁCTICO: Impacto de la asignación prefija vs postfija en las estadísticas
let conteoTarjetasAmarillas = 5;

// Post-incremento: Se registra el reporte con el valor actual en la planilla, luego se suma la nueva tarjeta
let reporteArbitralPrevio = conteoTarjetasAmarillas++; 
// Resultado esperado en este punto: reporteArbitralPrevio = 5, conteoTarjetasAmarillas = 6

// Pre-incremento: Se procesa la falta en el sistema, se suma la tarjeta y luego se emite el reporte actualizado
let reporteArbitralActualizado = ++conteoTarjetasAmarillas; 
// Resultado esperado en este punto: reporteArbitralActualizado = 7, conteoTarjetasAmarillas = 7


console.log("--------------------------------------------------");
console.log("📊 CÓMPUTO FINAL DE REGISTROS DE EVENTOS");
console.log("--------------------------------------------------");
console.log(`Faltas acumuladas totales del club: ${faltasEquipo}`);
console.log(`Elementos remanentes en el campo de juego: ${jugadoresDisponibles}`);
console.log(`Estado del acumulador de amonestaciones físicas: ${conteoTarjetasAmarillas}`);
console.log(`Sanción indexada en planilla previa: ${reporteArbitralPrevio}`);
console.log(`Sanción indexada en planilla actualizada: ${reporteArbitralActualizado}`);
console.log("--------------------------------------------------");