console.log("--------------------------------------------------");
console.log("⚽ OPERADORES LÓGICOS - CÓMPUTO DE REQUISITOS TÁCTICOS");
console.log("--------------------------------------------------");

// Uso booleano clásico (Operador AND &&)
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

console.log("--------------------------------------------------");
console.log("⚡ CORTOCIRCUITO && (FILTROS DE EXCLUSIÓN)");
console.log("--------------------------------------------------");

// Cortocircuito &&: Devuelve el primer valor falsy o el último si todos son truthy
console.log(5 && 8);
console.log(0 && 8);
console.log("" && "Convocado");
console.log("Local" && "Visitante");

console.log("--------------------------------------------------");

// Uso práctico &&: Ejecutar acción de campo si se cumple la condición reglamentaria
const futbolistaClave = { apellido: "Mendoza", tarjetaRoja: true };

futbolistaClave.tarjetaRoja && console.log("ALERTA: El futbolista debe abandonar el terreno de juego inmediatamente.");

console.log("--------------------------------------------------");

// Acceso seguro a propiedades anidadas de la plantilla
const provinciaOrigen = futbolistaClave.procedencia && futbolistaClave.procedencia.provincia;

console.log("--------------------------------------------------");
console.log("🛡️ OPERADOR OR || - COMPORTAMIENTO BASE");
console.log("--------------------------------------------------");

// Uso booleano clásico (Operador OR ||)
console.log(true || false);
console.log(false || true);
console.log(false || false);

console.log("--------------------------------------------------");
console.log("⚡ CORTOCIRCUITO || (VALORES DE RESPALDO TÁCTICO)");
console.log("--------------------------------------------------");

// Cortocircuito ||: Devuelve el primer valor truthy
console.log(1 || 2);
console.log(0 || 2);
console.log(0 || "");
console.log("" || "Estatus_Por_Defecto");

console.log("--------------------------------------------------");

// Uso práctico ||: Asignación de rol por defecto si no se ingresan datos
const rolAsignado = "" || "Mediocampista";

console.log("--------------------------------------------------");
console.log("🏃 EVALUACIÓN DE ESTRATEGIA DE CONVOCATORIA");
console.log("--------------------------------------------------");

/**
 * Registra el dorsal de un jugador en la planilla oficial del encuentro.
 * Si el parámetro es nulo o vacío, asigna automáticamente la nomenclatura genérica.
 */
function registrarDorsalPlanilla(dorsal) {
  const numeroIdentificador = dorsal || "Sin Número Asignado";
  console.log(`Jugador registrado en acta con: ${numeroIdentificador}`);
}

registrarDorsalPlanilla(10);
registrarDorsalPlanilla("");
registrarDorsalPlanilla(null);
console.log("--------------------------------------------------");