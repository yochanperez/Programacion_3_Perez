console.log("--------------------------------------------------");
console.log("⚽ COMPULSA DE IDENTIFICADORES Y DATOS TÁCTICOS");
console.log("--------------------------------------------------");

// Comparación estricta de variables (Mismo valor, mismo tipo)
const dorsalTitular = 5;
const dorsalReemplazo = 5;
const dorsalTexto = "5";

console.log(dorsalTitular === dorsalReemplazo);
console.log(dorsalTitular === dorsalTexto);

const sinGolesCero = 0;
const tarjetaRojaActiva = false;
console.log(sinGolesCero === tarjetaRojaActiva);

const jugadorNoConvocado = null;
let jugadorLesionadoIncierto;
console.log(jugadorNoConvocado === jugadorLesionadoIncierto);

console.log("--------------------------------------------------");
console.log("⚠️ EVALUACIÓN DE COERCIÓN EN COMPARACIONES DÉBILES");
console.log("--------------------------------------------------");

console.log(dorsalTitular == dorsalTexto);
console.log(sinGolesCero == tarjetaRojaActiva);
console.log(jugadorNoConvocado == jugadorLesionadoIncierto);

const reporteVacio = "";
console.log(reporteVacio == tarjetaRojaActiva);

console.log("--------------------------------------------------");
console.log("🛡️ VERIFICACIÓN DE DESIGUALDAD EN PLANILLA");
console.log("--------------------------------------------------");

console.log(dorsalTitular !== dorsalTexto);
console.log(dorsalTitular !== dorsalReemplazo);

console.log("--------------------------------------------------");

console.log(dorsalTitular != dorsalTexto);
console.log("--------------------------------------------------");