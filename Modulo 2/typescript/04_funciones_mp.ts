// === EL PROBLEMA SIN TIPADO (MÉTRICAS INCIERTAS) ===
function sumNumberFalso(a: any, b: any) {
  return a + b;
}
console.log(sumNumberFalso(5, 3));       
console.log(sumNumberFalso("5", 3));     
console.log(sumNumberFalso(5, undefined));          


// === LA SOLUCIÓN CON TIPADO ESTRICTO DE LIGA ===
function sumarGolesOficiales(a: number, b: number): number {
  return a + b;
}
console.log(sumarGolesOficiales(5, 3));     


// === FUNCIONES ANALÍTICAS BÁSICAS Y TIPOS DE RETORNO ===
function multiplicarXG(tiros: number, factorXG: number): number {
  return tiros * factorXG;
}

function saludarFutbolista(apellido: string): string {
  return `Planilla: Convocar a ${apellido}!`;
}

function esDorsalPar(dorsal: number): boolean {
  return dorsal % 2 === 0;
}

function mostrarAlertaTablero(mensaje: string): void {
  console.log(`[INFO_PARTIDO] ${mensaje}`);
}

console.log(multiplicarXG(4, 0.25));    
console.log(saludarFutbolista("Mendoza"));       
console.log(esDorsalPar(10));            
mostrarAlertaTablero("Sincronización completa");             


// === PARAMÉTRICA OPCIONAL EN FICHAJES ===
function presentarFichaScouting(apellido: string, edad?: number, clubProcedencia?: string): string {
  let resultado = `Perfil: ${apellido}`;

  if (edad !== undefined) {
    resultado += ` | Edad: ${edad} años`;
  }

  if (clubProcedencia !== undefined) {
    resultado += ` | Origen: ${clubProcedencia}`;
  }

  resultado += ".";
  return resultado;
}

console.log(presentarFichaScouting("Silva"));
console.log(presentarFichaScouting("Silva", 20, "Universidad UTE"));


// === BÚSQUEDA FILTRADA EN EL PLANTEL ===
function buscarEnPlantilla(plantilla: string[], busqueda: string, exacto?: boolean): string | null {
  for (const jugador of plantilla) {
    if (exacto) {
      if (jugador === busqueda) return jugador;
    } else {
      if (jugador.toLowerCase().includes(busqueda.toLowerCase())) {
        return jugador;
      }
    }
  }
  return null;  
}

const convocadosFecha = ["Mendoza Pro", "Silva Central", "Cárdenas Extremo"];
console.log(buscarEnPlantilla(convocadosFecha, "mendoza"));         
console.log(buscarEnPlantilla(convocadosFecha, "Silva Central", true));   


// === OPERADOR REST CON TIPADO EN OBJETOS (ESTADÍSTICA FÍSICA) ===
interface MetricasPartido {
  min:   number;
  max:   number;
  suma:  number;
  media: number;
}

function calcularEstadisticasKms(...kilometros: number[]): MetricasPartido {
  if (kilometros.length === 0) {
    return { min: 0, max: 0, suma: 0, media: 0 };
  }

  let min  = kilometros[0];
  let max  = kilometros[0];
  let suma = 0;

  for (const k of kilometros) {
    if (k < min) min = k;
    if (k > max) max = k;
    suma += k;
  }

  return {
    min,
    max,
    suma,
    media: suma / kilometros.length
  };
}

const statsRendimiento = calcularEstadisticasKms(8.5, 11.2, 14.1, 9.3);
console.log(`Máximo: ${statsRendimiento.max} km`);
console.log(`Media:  ${statsRendimiento.media.toFixed(2)} km`);


// === FILTRADO REST EN ARRAYS NUMÉRICOS ===
function filtrarGolesPositivos(...golesAnual: number[]): number[] {
  const registroLimpio: number[] = [];
  for (const g of golesAnual) {
    if (g > 0) registroLimpio.push(g);
  }
  return registroLimpio;
}

console.log(filtrarGolesPositivos(3, -1, 5, -2, 0, 8));