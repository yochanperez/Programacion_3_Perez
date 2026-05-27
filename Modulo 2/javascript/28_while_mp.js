// =====================================================================
// 1. ITERACIÓN CRECIENTE Y DECRECIENTE (CONTROL DE DOSIFICACIÓN FÍSICA)
// =====================================================================
let indiceMinutos = 0;

console.log("📈 Incremento de carga física en el calentamiento (Minutos):");
while(indiceMinutos <= 5) {
    console.log(`Minuto actual de reactivación: ${indiceMinutos}'`);
    indiceMinutos++;
}

let cuentaRegresivaSesion = 10;

console.log("\n📉 Cuenta regresiva para el silbatazo final de la sesión:");
while(cuentaRegresivaSesion >= 0) {
    console.log(`Segundos remanentes en el ejercicio: ${cuentaRegresivaSesion}s`);
    cuentaRegresivaSesion--;
}

// =====================================================================
// 2. PROCESAMIENTO DE COLA DE EXTRACCIONES (SCOUTING DE FICHAJES)
// =====================================================================
const colaFichajesPendientes = [
  { id: "F001", prioridad: "alta",   apellido: "Mendoza", posicion: "Delantero Centro" },
  { id: "F002", prioridad: "media",  apellido: "Silva",   posicion: "Defensa Central" },
  { id: "F003", prioridad: "baja",   apellido: "Paredes", posicion: "Portero Suplente" },
  { id: "F004", prioridad: "alta",   apellido: "Cárdenas", posicion: "Extremo Izquierdo" },
];

let cursorCola = 0;

console.log("\n==================================================");
console.log("⚽ FUTDATA - PROCESANDO COLA DE VALIDACIÓN DE FICHAS");
console.log("==================================================");

while (cursorCola < colaFichajesPendientes.length) {
  const jugadorFicha = colaFichajesPendientes[cursorCola];

  if (jugadorFicha.prioridad === "alta") {
    console.log(`🔴 [URGENTE - CIERRE MERCADO] Ficha ${jugadorFicha.id}: ${jugadorFicha.apellido} (${jugadorFicha.posicion})`);
  } else if (jugadorFicha.prioridad === "media") {
    console.log(`🟡 [REVISIÓN DE REGLAMENTO] Ficha ${jugadorFicha.id}: ${jugadorFicha.apellido} (${jugadorFicha.posicion})`);
  } else {
    console.log(`🟢 [ESTÁNDAR - CANTERA]     Ficha ${jugadorFicha.id}: ${jugadorFicha.apellido} (${jugadorFicha.posicion})`);
  }

  cursorCola++;
}

console.log(`\nTotal de expedientes validados: ${colaFichajesPendientes.length} perfiles.`);

// =====================================================================
// 3. ACUMULACIÓN DE MÉTRIQUES HASTA ALCANZAR OBJETIVO DE GOLES
// =====================================================================
const RECORD_GOLES_TEMPORADA = 15;
const produccionGolesPorFecha = [2, 1, 3, 0, 4, 3, 2]; // Historial de anotaciones consecutivas del equipo
let golesAcumuladosTorneo = 0;
let fechasTranscurridas = 0;

console.log("\n==================================================");
console.log("📊 SEGUIMIENTO EXPOENCIAL DE EFECTIVIDAD ANOTADORA");
console.log("==================================================");

while (golesAcumuladosTorneo < RECORD_GOLES_TEMPORADA && fechasTranscurridas < produccionGolesPorFecha.length) {
  const golesDeLaFecha = produccionGolesPorFecha[fechasTranscurridas];
  golesAcumuladosTorneo += golesDeLaFecha;
  fechasTranscurridas++;

  console.log(`Jornada ${fechasTranscurridas}: +${golesDeLaFecha} gol(es) → Acumulado acumulador: ${golesAcumuladosTorneo}`);

  if (golesAcumuladosTorneo >= RECORD_GOLES_TEMPORADA) {
    console.log(`🎯 ¡Récord histórico superado en la Jornada ${fechasTranscurridas}!`);
  }
}

if (golesAcumuladosTorneo < RECORD_GOLES_TEMPORADA) {
  const golesFaltantes = RECORD_GOLES_TEMPORADA - golesAcumuladosTorneo;
  console.log(`Objetivo no alcanzado. Faltaron ${golesFaltantes} anotaciones para romper el umbral histórico.`);
}

// =====================================================================
// 4. ESTRUCTURA DO-WHILE: REINTENTOS DE ENLACE DE CHIPS DE TELEMETRÍA
// =====================================================================
const TOPE_REINTENTOS_ENLACE = 3;
const PAUSA_RECONEXION_SEG     = 2;
let intentosRealizados         = 0;
let enlaceEstablecido          = false;

console.log("\n==================================================");
console.log("📡 TELEMETRÍA CHIP - CONEXIÓN CON RECEPTOR GPS DE CAMPO");
console.log("==================================================");

do {
  intentosRealizados++;
  console.log(`Intento ${intentosRealizados}/${TOPE_REINTENTOS_ENLACE}: Sincronizando bandas de frecuencia...`);

  // Simulación: El chaleco con el sensor biométrico del futbolista se enlaza con la antena en el tercer intento
  if (intentosRealizados >= 3) {
    enlaceEstablecido = true;
  }

  if (!enlaceEstablecido && intentosRealizados < TOPE_REINTENTOS_ENLACE) {
    console.log(`  ⏳ Latencia de señal detectada. Reintentando sincronización en ${PAUSA_RECONEXION_SEG}s...`);
  }

} while (!enlaceEstablecido && intentosRealizados < TOPE_REINTENTOS_ENLACE);

if (enlaceEstablecido) {
  console.log("✅ Conexión establecida. Transmitiendo variables de ritmo cardíaco y velocidad a la suite analítica.");
} else {
  console.log("❌ Error crítico en hardware: Transmisor inalcanzable. Verifique la batería del chaleco deportivo.");
}
console.log("--------------------------------------------------");