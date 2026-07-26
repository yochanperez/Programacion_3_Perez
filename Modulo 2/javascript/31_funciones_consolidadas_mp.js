const prompt = require("prompt-sync")();

// === OPERACIONES MATEMÁTICAS DE RENDIMIENTO OFENSIVO ===
const sumarGoles       = (golesA, golesB) => golesA + golesB;
const restarGoles      = (golesA, golesB) => golesA - golesB;
const multiplicarXG    = (tiros, factorXG) => tiros * factorXG;
const calcularRatio    = (goles, partidos) => {
  if (partidos === 0) return "Error: división por cero partidos";
  return goles / partidos;
};

// === ORQUESTADOR DE MÉTRICAS TÁCTICAS ===
function calcularEstadistica(a, b, metrica) {
  const operaciones = { "+": sumarGoles, "-": restarGoles, "*": multiplicarXG, "/": calcularRatio };
  const fn = operaciones[metrica];
  if (!fn) return `Métrica "${metrica}" no reconocida en el sistema`;
  return fn(a, b);
}

// === CAPTURA Y VALIDACIÓN DE DATOS DEL PARTIDO ===
function leerDatoFutbol(mensaje) {
  while (true) {
    const entrada = prompt(mensaje);
    const numero  = parseFloat(entrada);
    if (!isNaN(numero)) return numero;
    console.log("Registro inválido. Ingrese un valor numérico real de juego.");
  }
}

// === CÓMPUTO GLOBAL DE RENDIMIENTO DE LA FECHA ===
console.log("=== FUTDATA ANALYTICS - PROCESADOR DE ESTADÍSTICAS ===");

const a         = leerDatoFutbol("Métrica del Equipo Local (Goles/Tiros): ");
const b         = leerDatoFutbol("Métrica del Equipo Visitante (Goles/Partidos): ");
const operacion = prompt("Operación de contraste táctico (+, -, *, /): ");
const resultado = calcularEstadistica(a, b, operacion);

console.log(`\n[Resultado Analytics] ${a} ${operacion} ${b} = ${resultado}`);