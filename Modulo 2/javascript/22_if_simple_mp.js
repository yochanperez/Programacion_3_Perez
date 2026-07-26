const prompt = require('prompt-sync')();

// ==========================================
// CONTROL DE BONIFICACIONES DE RENDIMIENTO
// ==========================================
const golesAnotados = 6;
const MINIMO_GOLES_BONO = 5;
const VALOR_BONO_INDIVIDUAL = 1000;

let premioEconomicoFinal = 0;

if (golesAnotados >= MINIMO_GOLES_BONO) {
  const bonoTotal = golesAnotados * VALOR_BONO_INDIVIDUAL;
  premioEconomicoFinal = bonoTotal;
  console.log(`Bonificación por goles aplicada: $${bonoTotal.toFixed(2)}`);
}

console.log(`Bono final asignado al delantero: $${premioEconomicoFinal.toFixed(2)}`);

// ==========================================
// MONITOREO DE CONDICIÓN FÍSICA Y ADVERTENCIAS
// ==========================================
const energiaRemanente = 3;
const UMBRAL_ENERGIA_CRITICA = 5;

if (energiaRemanente <= UMBRAL_ENERGIA_CRITICA) {
  console.log(`⚠️ Fatiga severa detectada: nivel de energía en ${energiaRemanente} puntos. Solicitar cambio pronto.`);
}

// ==========================================
// VERIFICACIÓN REGLAMENTARIA DE CATEGORÍA
// ==========================================
const edadFutbolista = 17;
const EDAD_CATEGORIA_ABSOLUTA = 18;

if (edadFutbolista < EDAD_CATEGORIA_ABSOLUTA) {
  console.log("Filtro del sistema: El perfil pertenece al torneo juvenil sub-20.");
}

console.log("Validación de ficha en el sistema finalizada.");

// ==========================================
// EVALUACIÓN INTERACTIVA DE TIROS AL ARCO
// ==========================================
console.log("\n--------------------------------------------------");
console.log("📊 EVALUADOR DE PRESIÓN EN ATAQUE");
console.log("--------------------------------------------------");

const rematesEquipoTexto = prompt('Por favor, ingrese el total de tiros al arco de su equipo: ');
const rematesEquipo = parseInt(rematesEquipoTexto, 10) || 0;
console.log(`Métrica registrada: ${rematesEquipo} tiros directos.`);

if (rematesEquipo > 10) {
    console.log(`Aplica indicador: Alta intensidad ofensiva.`);
} else {
    console.log("El volumen de ataque es muy bajo para activar el indicador de presión.");
}

// ==========================================
// EVALUACIÓN INTERACTIVA DE VELOCIDAD DEL BALÓN
// ==========================================
console.log("\n--------------------------------------------------");
console.log("🏃 TELEMETRÍA CINÉTICA DE REMATES");
console.log("--------------------------------------------------");

const velocidadBalonTexto = prompt('¿A qué velocidad viajó el disparo del delantero? (en km/h): ');
const velocidadBalon = parseFloat(velocidadBalonTexto) || 0;
console.log(`El sensor detectó que el esférico iba a una velocidad de ${velocidadBalon} km/h`);

if (velocidadBalon > 90) {
    console.log(`🚨 ¡Disparo de alta potencia! Potencial de peligro crítico.`);
} else {
    console.log("Velocidad de remate estándar dentro del promedio regular.");
}
console.log("--------------------------------------------------");