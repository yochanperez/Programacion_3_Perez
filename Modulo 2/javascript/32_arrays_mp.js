// === CREACIÓN DE ESTRUCTURAS DE PLANTILLA ===
const delanteros = ["Mendoza", "Silva", "Cárdenas"];
const dorsales = [10, 9, 7, 11, 5];
const registroMixto = [90, "Goleador", true, null];
const convocadosVacios = [];

// === ACCESO MEDIANTE ÍNDICES ===
console.log(delanteros[0]);
console.log(delanteros[2]);
console.log(delanteros[9]);

// === ÍNDICES NEGATIVOS TRADICIONALES ===
console.log(delanteros[-1]);

// === MÉTODO AT() PARA LECTURA REVERSA ===
console.log(delanteros.at(-1));
console.log(delanteros.at(-2));

// === MAGNITUD DE LA ESTRUCTURA ===
console.log(delanteros.length);

// === MUTACIÓN DE REGISTROS ===
delanteros[1] = "Paredes";
console.log(delanteros);

const historialGoles = [1, 2, 3];

// === AGREGAR AL FINAL DE LA LISTA ===
historialGoles.push(4);
historialGoles.push(5, 6);
console.log(historialGoles);

// === REMOVER DEL FINAL DE LA LISTA ===
const ultimoGol = historialGoles.pop();
console.log(ultimoGol);
console.log(historialGoles);

// === AGREGAR AL INICIO DE LA LISTA ===
historialGoles.unshift(0);
console.log(historialGoles);

// === REMOVER DEL INICIO DE LA LISTA ===
const primerGol = historialGoles.shift();
console.log(primerGol);
console.log(historialGoles);

// === MANIPULACIÓN FLEXIBLE DE ELEMENTOS ===
const microcicloMeses = ["Ene", "Feb", "Abr", "May"];
microcicloMeses.splice(2, 0, "Mar");
console.log(microcicloMeses);

const mesesEliminados = microcicloMeses.splice(1, 2);
console.log(mesesEliminados);
console.log(microcicloMeses);

const atacantesMonitoreo = ["Mendoza", "Silva", "Cárdenas"];

// === ITERACIÓN FOREACH ===
atacantesMonitoreo.forEach((jugador, indice) => {
  console.log(`${indice}: ${jugador}`);
});

// === ITERACIÓN FOR...OF ===
for (const jugador of atacantesMonitoreo) {
  console.log(jugador);
}

const plantillaScouting = [
  { id: 1, nombre: "Mendoza" },
  { id: 2, nombre: "Silva"   },
  { id: 3, nombre: "Cárdenas"}
];

// === BÚSQUEDA ELEMENTAL ===
const jugadorEncontrado = plantillaScouting.find(j => j.id === 2);
console.log(jugadorEncontrado);

const fichaInexistente = plantillaScouting.find(j => j.id === 99);
console.log(fichaInexistente);

// === LOCALIZACIÓN DE ÍNDICE ===
const indiceEncontrado = plantillaScouting.findIndex(j => j.nombre === "Cárdenas");
console.log(indiceEncontrado);

const seriesTiros = [1, 2, 3, 4, 5];

// === EVALUACIÓN EXCLUSIVA PARCIAL ===
console.log(seriesTiros.some(t => t > 4));
console.log(seriesTiros.some(t => t > 10));

// === EVALUACIÓN EXCLUSIVA TOTAL ===
console.log(seriesTiros.every(t => t > 0));
console.log(seriesTiros.every(t => t > 3));

// === CASO PRÁCTICO EN RENDIMIENTO FÍSICO ===
const fatigaPorcentual = [22, 31, 19, 28, 45];
const todosAptos = fatigaPorcentual.every(f => f >= 18);
const hayRiesgoLesion = fatigaPorcentual.some(f => f < 18);

console.log(`Todos aptos: ${todosAptos}`);
console.log(`Hay riesgo: ${hayRiesgoLesion}`);

const catalogoFichajes = [
  { nombre: "Delantero A", precio: 999, categoria: "Liga_Pro" },
  { nombre: "Extremo B",   precio: 25,  categoria: "Cantera"  },
  { nombre: "Volante C",   precio: 350, categoria: "Liga_Pro" },
  { nombre: "Zaguero D",   precio: 89,  categoria: "Cantera"  },
  { nombre: "Portero E",   precio: 79,  categoria: "Liga_Pro" }
];

// === PROCESAMIENTO MULTINIVEL DE TRANSFERENCIAS ===
const presupuestoTotalLigaPro = catalogoFichajes
  .filter(f => f.categoria === "Liga_Pro")
  .filter(f => f.precio > 100)
  .map(f => f.precio)
  .reduce((suma, precio) => suma + precio, 0);

console.log(`Total Liga_Pro > 100: ${presupuestoTotalLigaPro}`);

// === ORDENAMIENTO EN ALFABETO DE FICHAJES ===
const canteranosOrdenados = catalogoFichajes
  .filter(f => f.categoria === "Cantera")
  .map(f => f.nombre)
  .sort();

console.log(canteranosOrdenados);

const cargasTermicasCelsius = [0, 15, -5, 22, 37, 100, -10, 28];

// === COEFICIENTES TÉRMICOS EQUIVALENTES ===
const cargasFahrenheit = cargasTermicasCelsius
  .map(c => (c * 9/5) + 32);

console.log(cargasFahrenheit);

// === SEGMENTACIÓN DE RANGOS CRÍTICOS ===
const registrosAptosCampo = cargasTermicasCelsius
  .filter(c => c >= 0 && c < 30);

console.log(registrosAptosCampo);