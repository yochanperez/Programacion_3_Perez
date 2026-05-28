const golesFavor = 10;
const golesContra = 3;

console.log("--------------------------------------------------");
console.log("📊 BALANCE DE METRICAS DE TORNEO");
console.log("--------------------------------------------------");

// Suma total de anotaciones registradas en los encuentros del equipo
const sumaGolesTotales = golesFavor + golesContra;
console.log(`Producción total de anotaciones (Favor + Contra): ${sumaGolesTotales}`);

// Resta para obtener el diferencial oficial del torneo
const golDiferencia = golesFavor - golesContra;
console.log(`Diferencial de goles del club (Gol Diferencia): ${golDiferencia}`);

// Multiplicación para proyecciones de puntaje por goles clave
const multiplicadorRendimiento = golesFavor * golesContra;
console.log(`Factor cruzado de efectividad ofensiva/defensiva: ${multiplicadorRendimiento}`);

// División para determinar el promedio de goles anotados por cada gol encajado
const promedioGoles = golesFavor / golesContra;
console.log(`Ratio de goles anotados por cada gol recibido: ${promedioGoles.toFixed(4)}`);

// Módulo para determinar el residuo logístico de anotaciones en bloques tácticos
const residuoGoles = golesFavor % golesContra;
console.log(`Residuo del balance de goles (Módulo matemático): ${residuoGoles}`);

// Potencia para modelar la proyección exponencial de fatiga acumulada en los minutos jugados
const proyeccionExponencialFatiga = golesFavor ** golesContra;
console.log(`Cálculo de proyección exponencial de desgaste físico: ${proyeccionExponencialFatiga}`);

console.log("--------------------------------------------------");