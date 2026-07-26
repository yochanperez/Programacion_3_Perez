// === FUNCIÓN DECLARATIVA TRADICIONAL ===
function reportarInicioPartido() {
    console.log('FUTDATA: El balón está en movimiento.');
}
reportarInicioPartido();


// === FUNCIÓN EXPRESADA ===
const registrarFaltaTactica = function() {
    console.log('Planilla Digital: Infracción registrada.');
};
registrarFaltaTactica();


// === FUNCIÓN FLECHA (ARROW FUNCTION) ===
const alertarFueraDeJuego = () => {
    console.log("Asistente VAR: Posición adelantada.");
};
alertarFueraDeJuego();


// === FUNCIÓN ANÓNIMA INLINE ===
setTimeout(function() {
    console.log('⌛ Servidor: Sincronizando datos...');
}, 1000);


// === FUNCIÓN CON PARÁMETROS Y RETORNO ===
function evaluarAptitudFisica(nombre, rendimiento) {
  return `Ficha: ${nombre} calificado con ${rendimiento}%`;
}
console.log(evaluarAptitudFisica("Mendoza", 95));


// === ARROW FUNCTION CON RETORNO IMPLÍCITO ===
const calcularXGAcumuladoCorto = (xG1, xG2) => xG1 + xG2;
console.log(calcularXGAcumuladoCorto(0.12, 0.88));


// === ARROW FUNCTION CON UN SOLO PARÁMETRO ===
const duplicarPuntosScouting = rating => rating * 2;
console.log(duplicarPuntosScouting(45));


// === ARROW FUNCTION SIN PARÁMETROS ===
const emitirAlertaArbitral = () => "¡Silbatazo final!";
console.log(emitirAlertaArbitral());


// === PARÁMETROS POR DEFECTO ===
function configurarEstrategia(esquema = "4-4-2", mentalidad = "Equilibrada") {
    return `Pizarra: ${esquema} | Directriz: ${mentalidad}`;
}
console.log(configurarEstrategia());


// === PARÁMETROS REST (...REST) ===
function consolidarRematesTotales(...remates) {
  let acumulador = 0;
  for (const r of remates) acumulador += r;
  return acumulador;
}
console.log(consolidarRematesTotales(5, 4, 6, 2));


// === OPERADOR SPREAD (...SPREAD) EN ARRAYS ===
const seriesVelocidadGps = [3, 1, 4, 1, 5, 9, 2, 6];
console.log(Math.max(...seriesVelocidadGps));


// === OPERADOR SPREAD (...SPREAD) EN OBJETOS ===
const fichaScoutingBase = { apellido: "Paredes", rating: 78 };
const fichaScoutingAmpliada = { ...fichaScoutingBase, clubActual: "UTE" };
console.log(fichaScoutingAmpliada);


// === FUNCIONES DE ORDEN SUPERIOR Y CALLBACKS ===
function procesarMetricasCruzadas(valorA, valorB, algoritmoCalculo) {
  return algoritmoCalculo(valorA, valorB);
}
const algoritmoSumaGoles = (a, b) => a + b;
console.log(procesarMetricasCruzadas(10, 3, algoritmoSumaGoles));


// === CALLBACK ANÓNIMO INLINE ===
console.log(procesarMetricasCruzadas(10, 3, (base, exp) => base ** exp));


// === ÁMBITO GLOBAL Y LOCAL (SCOPE) ===
const baseDeDatosLigaGlobal = "CONEXIÓN GLOBAL"; 

function gestionarFichasScope() {
  const tokenFichaLocal = "TOKEN LOCAL"; 
  console.log(baseDeDatosLigaGlobal); 
  console.log(tokenFichaLocal);       
}
gestionarFichasScope();


// === ÁMBITO DE BLOQUE (BLOCK SCOPE) ===
{
  const bloqueEstrategicoCerrado = "Directriz Secreta";
  console.log(bloqueEstrategicoCerrado); 
}