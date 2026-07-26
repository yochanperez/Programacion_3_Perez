const prompt = require("prompt-sync")();

console.log("⚽ REGISTRO DE RENDIMIENTO DE JUGADORES");
console.log("--------------------------------------------------");

const nombreJugador = prompt("Nombre del delantero: ");
const clubOrigen = prompt("Club actual: ");

const golesTexto = prompt(`Goles anotados por ${nombreJugador}: `);
const goles = parseInt(golesTexto, 10);

const minutosTexto = prompt(`Minutos totales disputados: `);
const minutos = parseInt(minutosTexto, 10);

console.log("\n--------------------------------------------------");
console.log("📊 CÓMPUTO DE EFECTIVIDAD EN ATAQUE");
console.log("--------------------------------------------------");

if (isNaN(goles) || isNaN(minutos) || minutos <= 0) {
  console.log("Error crítico: Los registros de goles o minutos no son válidos.");
} else {
  const promedioGoles = goles / minutos;
  const minutosPorGol = minutos / goles;

  console.log(`Ficha: ${nombreJugador} (${clubOrigen})`);
  console.log(`Estadísticas básicas: ${goles} goles en ${minutos} minutos.`);
  console.log(`Frecuencia de anotación: 1 gol cada ${minutosPorGol.toFixed(1)} minutos.`);
  console.log(`Coeficiente de efectividad: ${promedioGoles.toFixed(4)} goles por minuto.`);
}
console.log("--------------------------------------------------");