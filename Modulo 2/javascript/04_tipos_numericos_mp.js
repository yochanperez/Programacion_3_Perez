const minutosTotales = 90;
const xGCalculado = 2.45;
const ID_PARTIDO_UNICO = 9_007_199_254_740_991;
const diferenciaGolesNegativa = -3;

var nombreArbitro = 'Wilmar Roldán';
const siglaLocal = 'LDU';
const siglaVisitante = 'BSC';
const reporteMarcador = `Final del partido: ${siglaLocal} vs ${siglaVisitante}`;

const balonEnJuego = true;
const revisionVarCompletada = false;

const jugadorExpulsado = null;
let proximoCambioLocal;

const tokenSeguridadEstadio = Symbol("id_sensor");

const identificadorTransmisionInternacional = 9999999999999999999n;

console.log(typeof 90);
console.log(typeof "LDU");
console.log(typeof true);
console.log(typeof proximoCambioLocal);
console.log(typeof null);
console.log(typeof {});
console.log(typeof []);
console.log(typeof function(){});