// =====================================================================
// 1. USO BÁSICO DEL OPERADOR TERNARIO (CONOCIMIENTO REGLAMENTARIO)
// =====================================================================
// Sintaxis: condicion ? valor_si_true : valor_si_false
const fichasDisponibles = 8;
const estadoConvocatoria = fichasDisponibles > 0 ? "Plantilla Habilitada" : "Cupos Agotados";
console.log(`Estado del Acta: ${estadoConvocatoria}`);

// =====================================================================
// 2. INTEGRACIÓN DIRECTA EN TEMPLATE LITERALS (MÉTRICAS xG Y RENDIMIENTO)
// =====================================================================
const xGUnitarioDisparo = 0.25;
const rematesTotalesArco  = 3;
const xGAcumuladoPartido  = xGUnitarioDisparo * rematesTotalesArco;

console.log(`Reporte: ${rematesTotalesArco} remate(s) directos x ${xGUnitarioDisparo} xG`);
console.log(`Peligro Acumulado (xG Total): ${xGAcumuladoPartido.toFixed(2)}`);
console.log(`Bono de Eficiencia Ofensiva: ${xGAcumuladoPartido >= 0.50 ? "Aprobado ✅" : "Denegado ❌ (mínimo 0.50 xG)"}`);

// =====================================================================
// 3. ASIGNACIÓN DE ESTADOS OPERATIVOS Y ALERTAS TÁCTICAS
// =====================================================================
const balanceGolesTorneo = -5; // Gol Diferencia negativo
const rendimientoGlobal = balanceGolesTorneo >= 0 ? "Superávit de Goles" : "Déficit Defensivo";
const colorAlertaTactico = balanceGolesTorneo >= 0 ? "verde" : "rojo";
console.log(`[${colorAlertaTactico.toUpperCase()}] Balance de Competición: ${rendimientoGlobal}`);

// =====================================================================
// 4. BUENAS PRÁCTICAS: EVITAR TERNARIOS ANIDADOS EN SCORING
// =====================================================================
const ratingScouting = 82;

// ❌ ANTIPATRÓN: No anidar operadores ternarios. Es propenso a errores y complejo de auditar.
const estatusScoutingIncomodo = ratingScouting >= 90 ? "clase_mundial" : ratingScouting >= 75 ? "titular_clave" : "reserva";

// ✅ PATRÓN RECOMENDADO: Usar bloques estructurados if / else if para mantener la claridad analítica
let estatusScoutingClaro;
if (ratingScouting >= 90) {
  estatusScoutingClaro = "clase_mundial";
} else if (ratingScouting >= 75) {
  estatusScoutingClaro = "titular_clave";
} else {
  estatusScoutingClaro = "reserva";
}

console.log(`\n--------------------------------------------------`);
console.log(`📊 EVALUACIÓN DE FICHA DE JUGADOR`);
console.log(`--------------------------------------------------`);
console.log(`Rating Indexado: ${ratingScouting}/100`);
console.log(`Categoría de Mercado (Legacy): ${estatusScoutingIncomodo}`);
console.log(`Categoría de Mercado (Estructurada): ${estatusScoutingClaro}`);
console.log(`--------------------------------------------------`);