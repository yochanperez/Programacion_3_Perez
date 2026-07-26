console.log("--------------------------------------------------");
console.log("⚽ REPORTE DE TRANSMISIÓN DE EVENTOS - EN VIVO");
console.log("--------------------------------------------------");

console.log("Inicio del partido - Balón en juego");
console.log("Goles marcados en tiempo regular:", 2);
console.log("Terna arbitral asignada:", "Central", "Línea 1", "Línea 2");

console.log("--------------------------------------------------");

console.error("ALERTA VAR: Revisión por posible tarjeta roja en progreso");

console.log("--------------------------------------------------");

console.warn("Advertencia de campo: Jugador al borde de la suspensión por acumulación de faltas");

console.log("--------------------------------------------------");

const plantillaAlineacion = [
  { posicion: "Delantero Centro", dorsal: 9, efectividad_xG: 1.85 },
  { posicion: "Mediocentro Creativo", dorsal: 10, efectividad_xG: 0.92 },
  { posicion: "Defensa Central", dorsal: 4, efectividad_xG: 0.12 }
];

console.table(plantillaAlineacion);

console.log("--------------------------------------------------");

const dorsalDestacado = 10;
const apellidoDestacado = "Messi";
console.log(`Métrica Individual: Dorsal asignado = ${dorsalDestacado}, Futbolista de referencia = ${apellidoDestacado}`);
console.log("--------------------------------------------------");