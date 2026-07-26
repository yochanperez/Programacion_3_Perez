const totalGolesEquipo = 10;
const partidosDisputadosCero = 0;

console.log("--------------------------------------------------");
console.log("⚠️ EVALUACIÓN DE EXCEPCIONES Y CASOS CRÍTICOS");
console.log("--------------------------------------------------");

const promedioPorPartidoInfnito = totalGolesEquipo / partidosDisputadosCero;
console.log(`Ratio de efectividad (División por cero): ${promedioPorPartidoInfnito}`);

const promedioNegativoInfinito = -totalGolesEquipo / partidosDisputadosCero;
console.log(`Ratio en balance negativo crítico: ${promedioNegativoInfinito}`);

const indeterminacionGoles = partidosDisputadosCero / partidosDisputadosCero;
console.log(`Cómputo de goles sin datos registrados (0 / 0): ${indeterminacionGoles}`);

console.log("--------------------------------------------------");

const ajusteMetricoInvalido = indeterminacionGoles + 5;
console.log(`Operación consecutiva sobre indicador nulo: ${ajusteMetricoInvalido}`);

const verificacionIdentidadNan = indeterminacionGoles === indeterminacionGoles;
console.log(`¿El indicador indeterminado es idéntico a sí mismo?: ${verificacionIdentidadNan}`);

console.log("--------------------------------------------------");

const xGPrimerTiempo = 0.1;
const xGSegundoTiempo = 0.2;
const xGTotalAcumulado = xGPrimerTiempo + xGSegundoTiempo;

console.log(`Suma cruda de probabilidad xG (IEEE 754): ${xGTotalAcumulado}`);

const valorReferenciaEsperado = 0.3;
const comparacionMargenSeguro = Math.abs(xGTotalAcumulado - valorReferenciaEsperado) < Number.EPSILON;
console.log(`¿La suma de xG se encuentra dentro del margen de precisión seguro?: ${comparacionMargenSeguro}`);

console.log("--------------------------------------------------");

const reporteFormateadoString = xGTotalAcumulado.toFixed(2);
console.log(`Métrica redondeada para el panel visual: ${reporteFormateadoString}`);
console.log(`Tipo de dato generado para la interfaz: ${typeof reporteFormateadoString}`);
console.log("--------------------------------------------------");