const prompt = require('prompt-sync')();

// ==================================================
// CONTROL DE VIABILIDAD PARA FICHAJES (FAIR PLAY)
// ==================================================
const presupuestoFichaje = 800;
const gastoDeudaPrevio = 200;
const PRESUPUESTO_MINIMO_REQUERIDO = 600;
const COEFICIENTE_DEUDA_MAXIMO = 0.4;

const ratioEndeudamiento = gastoDeudaPrevio / presupuestoFichaje;

if (presupuestoFichaje >= PRESUPUESTO_MINIMO_REQUERIDO && ratioEndeudamiento <= COEFICIENTE_DEUDA_MAXIMO) {
  console.log("Aprobación del comité: Operación de mercado autorizada.");
  console.log(`Balance de endeudamiento institucional: ${(ratioEndeudamiento * 100).toFixed(1)}%`);
} else {
  console.log("Restricción de liga: Operación bloqueada por Fair Play Financiero.");
  console.log(`Fondo de reserva mínimo necesario: $${PRESUPUESTO_MINIMO_REQUERIDO}`);
  console.log(`Ratio actual: ${(ratioEndeudamiento * 100).toFixed(1)}% (Límite estricto: 40%)`);
}

// ==================================================
// CONTROL DE ACCESO DE SEGURIDAD A CAMERINOS
// ==================================================
const credencialPresentada = "TokenPrensa2026";
const credencialAutorizada  = "TokenPrensa2026";
let incidenciasSeguridad = 0;
const MAX_INCIDENCIAS = 3;

if (credencialPresentada === credencialAutorizada) {
  console.log("Control Digital: Acceso concedido a zona mixta y vestuarios.");
} else {
  incidenciasSeguridad++;
  const bloqueosRemanentes = MAX_INCIDENCIAS - incidenciasSeguridad;
  console.log(`Código denegado. Advertencias antes de bloqueo físico: ${bloqueosRemanentes}`);
}

// ==================================================
// EVALUACIÓN INTERACTIVA DE INVENTARIO DE BALONES
// ==================================================
console.log("\n--------------------------------------------------");
console.log("⚽ LOGÍSTICA DE UTILERÍA - CONTROL DE MATERIAL");
console.log("--------------------------------------------------");

const balonesDisponiblesTexto = prompt('¿Cuántos balones reglamentarios hay listos para el entrenamiento?: ');
const balonesDisponibles = parseInt(balonesDisponiblesTexto, 10) || 0;
console.log(`Inventario reportado: ${balonesDisponibles} balones en canasta.`);

if (balonesDisponibles >= 10) {
    console.log('Estatus: Logística aprobada para sesión de tiro de alta intensidad.');
} else {
    console.log('Estatus: Material insuficiente. Solicitar balones extra al almacén central.');
}

// ==================================================
// AUTENTICACIÓN INTERACTIVA DE CUERPO TÉCNICO
// ==================================================
console.log("\n--------------------------------------------------");
console.log("🔐 PROTOCOLO DE SEGURIDAD - SISTEMA DE DATOS");
console.log("--------------------------------------------------");

const claveAccesoSistema = 'DT_Ute2026';
let fallosAutenticacion = 0;
const TOPE_FALLOS = 3;

const loginIngresado = prompt('Introduzca su clave de acceso táctico: ');

if (loginIngresado === claveAccesoSistema) {
    console.log('Identidad verificada: Acceso total al software de análisis táctico.');
} else {
    fallosAutenticacion++;
    const margenRestante = TOPE_FALLOS - fallosAutenticacion;
    console.log(`Clave inválida. Intentos del operador de campo remanentes: ${margenRestante}`);
}
console.log("--------------------------------------------------");