console.log("--------------------------------------------------");
console.log("📈 INFORME MATEMÁTICO DEL SENSOR DE RENDIMIENTO");
console.log("--------------------------------------------------");

// Redondeo estándar: Ajuste del porcentaje final de posesión del balón
const posesionCruda = 54.6;
console.log(`Posesión de balón oficial (Redondeo): ${Math.round(posesionCruda)}%`);

// Redondea hacia abajo: Kilómetros enteros recorridos por el mediocampista
const distanciaCruda = 11.9;
console.log(`Distancia mínima consolidada (Floor): ${Math.floor(distanciaCruda)} km`);

// Redondea hacia arriba: Minutos de descuento estimados según detenciones
const tiempoPerdido = 4.1;
console.log(`Tiempo de adición reglamentario (Ceil): ${Math.ceil(tiempoPerdido)} minutos`);

// Valor absoluto: Diferencial físico de distancia entre el extremo y el lateral
const balancePosicional = -7;
console.log(`Desviación métrica posicional (Absoluto): ${Math.abs(balancePosicional)} metros`);

// El mayor valor: Puntuación máxima de xG alcanzada en un solo remate
console.log(`Pico de peligro generado en ataque (Max): ${Math.max(0.12, 0.85, 0.43)} xG`);

// El menor valor: Tiempo mínimo de reacción registrado por el guardameta
console.log(`Tiempo récord de respuesta bajo los tres palos (Min): ${Math.min(0.35, 0.18, 0.62)} segundos`);

// Raíz cuadrada: Factor de dispersión en el área de cobertura del bloque defensivo
const areaBloque = 16;
console.log(`Radio de influencia táctica en zona de contención (Sqrt): ${Math.sqrt(areaBloque)} metros`);

// Potencia: Cálculo de la energía cinética aproximada en el impacto de un remate
const basePotencia = 2;
const factorVelocidad = 10;
console.log(`Fuerza de aceleración estimada en el disparo (Pow): ${Math.pow(basePotencia, factorVelocidad)} Newtons`);

// Parte entera: Minuto puro del encuentro sin contar los segundos transcurridos
const cronometroPreciso = 84.9;
console.log(`Minuto base indexado en la planilla (Trunc): ${Math.trunc(cronometroPreciso)}'`);

// Número aleatorio: Coeficiente variable de fricción del césped según el clima
console.log(`Factor dinámico de deslizamiento del balón (Random): ${Math.random().toFixed(4)}`);

console.log("--------------------------------------------------");
console.log("🪙 SIMULACIÓN DEL SORTEO INTERNACIONAL DE CAMPO");
console.log("--------------------------------------------------");

/**
 * Genera un valor entero aleatorio dentro de un rango específico.
 * Simula variables estocásticas del juego, como el lanzamiento de la moneda por el réferi.
 */
function simularSorteoMoneda(opcionMinima, opcionMaxima) {
  return Math.floor(Math.random() * (opcionMaxima - opcionMinima + 1)) + opcionMinima;
}

const resultadoSorteo = simularSorteoMoneda(1, 2);
console.log(`Resultado del lanzamiento (1: Local elige lado | 2: Visitante saca): ${resultadoSorteo}`);
console.log("--------------------------------------------------");