const prompt = require('prompt-sync')();

// ==================================================
// 1. PROTOCOLO DE HIDRATACIÓN SEGÚN DESGASTE (MINUTOS)
// ==================================================
const minutosDisputados = 28;

if (minutosDisputados >= 75) {
  console.log("🌡️ Desgaste extremo. Protocolo de recuperación inmediata en vestuarios.");
} else if (minutosDisputados >= 45) {
  console.log("☀️ Desgaste moderado. Rehidratación con isotónicos en el entretiempo.");
} else if (minutosDisputados >= 15) {
  console.log("🌤️ Desgaste leve. Carga básica de líquidos al finalizar el encuentro.");
} else if (minutosDisputados >= 5) {
  console.log("🧥 Actividad mínima. Trabajo de reactivación física post-partido.");
} else {
  console.log("❄️ Sin minutos significativos. Sesión completa de entrenamiento mañana.");
}

// ==================================================
// 2. CATEGORIZACIÓN DINÁMICA DE ENTRADAS Y ENTRADAS
// ==================================================
const aforoAsignadoPorcentual = 4.5;
const TARIFA_GENERAL  = 2.50;
const TARIFA_PREFERENCIA = 5.00;
const TARIFA_TRIBUNA  = 9.00;
const TARIFA_PALCO = 15.00;

let costoBoleto;
let localidadEstadio;

if (aforoAsignadoPorcentual <= 1) {
  costoBoleto  = TARIFA_GENERAL;
  localidadEstadio = "General — Sector Norte/Sur";
} else if (aforoAsignadoPorcentual <= 5) {
  costoBoleto  = TARIFA_PREFERENCIA;
  localidadEstadio = "Preferencia — Sector Este";
} else if (aforoAsignadoPorcentual <= 20) {
  costoBoleto  = TARIFA_TRIBUNA;
  localidadEstadio = "Tribuna — Sector Oeste";
} else {
  costoBoleto  = TARIFA_PALCO;
  localidadEstadio = "Palco Especial — Gestión de suite exclusiva";
}

console.log(`Localidad Asignada: ${aforoAsignadoPorcentual} % de prioridad`);
console.log(`Zona del Estadio: ${localidadEstadio}`);
console.log(`Costo de Taquilla: $${costoBoleto.toFixed(2)}`);

// ==================================================
// 3. RANGO DE RENDIMIENTO BASADO EN EFECTIVIDAD xG
// ==================================================
const puntosRendimientoScouting = 78;

let calificacionTactica;
let aptoParaConvocatoria;

if (puntosRendimientoScouting >= 90) {
  calificacionTactica = "Clase Mundial — Rendimiento sobresaliente";
  aptoParaConvocatoria = true;
} else if (puntosRendimientoScouting >= 80) {
  calificacionTactica = "Destacado — Alto impacto en el juego";
  aptoParaConvocatoria = true;
} else if (puntosRendimientoScouting >= 70) {
  calificacionTactica = "Eficaz — Cumple con el rol asignado";
  aptoParaConvocatoria = true;
} else if (puntosRendimientoScouting >= 60) {
  calificacionTactica = "Regular — Nivel mínimo de competencia";
  aptoParaConvocatoria = true;
} else {
  calificacionTactica = "Deficiente — Requiere reevaluación técnica";
  aptoParaConvocatoria = false;
}

console.log(`Métrica de Scouting: ${puntosRendimientoScouting}/100`);
console.log(`Evaluación Táctica: ${calificacionTactica}`);
console.log(`Estado para la Fecha: ${aptoParaConvocatoria ? "Convocado ✅" : "No Convocado ❌"}`);

// ==================================================
// 4. SCRIPT INTERACTIVO: ASISTENCIA DE HINCHAS
// ==================================================
console.log("\n--------------------------------------------------");
console.log("📊 CLASIFICACIÓN DE CONCURRENCIA AL ESTADIO");
console.log("--------------------------------------------------");

const ingresoHinchasTexto = prompt('¿Cuántos aficionados ingresaron al estadio hoy?: ');
const asistenciaHinchas = parseInt(ingresoHinchasTexto, 10) || 0;

if (asistenciaHinchas <= 10000) {
    console.log(`La asistencia reportada en taquilla es baja.`);
} else if (asistenciaHinchas <= 30000) {
    console.log(`La asistencia reportada en taquilla es media.`);
} else {
    console.log(`¡Excelente marco de público! La asistencia reportada es alta.`);
}

// ==================================================
// 5. SCRIPT INTERACTIVO: ESCALA SALARIAL DEL CLUB
// ==================================================
console.log("\n--------------------------------------------------");
console.log("💵 AUDITORÍA INTERNA DE MASA SALARIAL (MENSUAL)");
console.log("--------------------------------------------------");

const sueldoJugadorTexto = prompt('¿Cuánto percibe mensualmente el miembro de la plantilla?: ');
const sueldoJugador = parseFloat(sueldoJugadorTexto) || 0;

if (sueldoJugador < 500) {
    console.log("Rango de Contrato: Canterano / Ficha Básica");
} else if (sueldoJugador >= 500 && sueldoJugador <= 1000) {
    console.log("Rango de Contrato: Jugador de Rotación / Nivel Medio");
} else {
    console.log("Rango de Contrato: Jugador Franquicia / Salario Alto");
}
console.log("--------------------------------------------------");