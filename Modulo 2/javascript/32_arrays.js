// Crear un array — corchetes []
const frutas   = ["manzana", "banana", "cereza"];
const numeros  = [1, 2, 3, 4, 5];
const mixto    = [1, "dos", true, null];          // válido pero poco recomendable
const vacio    = [];

// Acceso por índice — empieza en 0
console.log(frutas[0]);   // "manzana"
console.log(frutas[2]);   // "cereza"
console.log(frutas[9]);   // undefined — no lanza error

// Índice negativo — NO funciona en JS (devuelve undefined)
console.log(frutas[-1]);  // undefined ← en Python sí funciona, en JS no

// at() — acceso con índice negativo (ES2022)
console.log(frutas.at(-1));   // "cereza"  ← el último elemento
console.log(frutas.at(-2));   // "banana"

// Longitud
console.log(frutas.length);   // 3

// Modificar un elemento
frutas[1] = "mango";
console.log(frutas);   // ["manzana", "mango", "cereza"]

const arr = [1, 2, 3];

// push — añade al final, devuelve la nueva longitud
arr.push(4);
arr.push(5, 6);           // se pueden añadir varios a la vez
console.log(arr);          // [1, 2, 3, 4, 5, 6]

// pop — elimina el último, devuelve el elemento eliminado
const ultimo = arr.pop();
console.log(ultimo);       // 6
console.log(arr);          // [1, 2, 3, 4, 5]

// unshift — añade al inicio (más lento que push)
arr.unshift(0);
console.log(arr);          // [0, 1, 2, 3, 4, 5]

// shift — elimina el primero, devuelve el elemento eliminado
const primero = arr.shift();
console.log(primero);      // 0
console.log(arr);          // [1, 2, 3, 4, 5]

// splice — elimina, reemplaza o inserta en cualquier posición
// splice(inicio, cuántos_eliminar, ...elementos_a_insertar)
const meses = ["ene", "feb", "abr", "may"];
meses.splice(2, 0, "mar");          // inserta "mar" en posición 2, elimina 0
console.log(meses);                  // ["ene", "feb", "mar", "abr", "may"]

const eliminados = meses.splice(1, 2);  // elimina 2 desde posición 1
console.log(eliminados);             // ["feb", "mar"]
console.log(meses);                  // ["ene", "abr", "may"]

const frutas = ["manzana", "banana", "cereza"];

// forEach no devuelve nada (undefined)
frutas.forEach((fruta, indice) => {
  console.log(`${indice}: ${fruta}`);
});
// 0: manzana
// 1: banana
// 2: cereza

// Equivalente con for...of (más legible en casos simples)
for (const fruta of frutas) {
  console.log(fruta);
}


const usuarios = [
  { id: 1, nombre: "Ana"   },
  { id: 2, nombre: "Luis"  },
  { id: 3, nombre: "Marta" }
];

// find — devuelve el PRIMER elemento que cumple la condición, o undefined
const usuario = usuarios.find(u => u.id === 2);
console.log(usuario);   // { id: 2, nombre: 'Luis' }

const noExiste = usuarios.find(u => u.id === 99);
console.log(noExiste);  // undefined

// findIndex — devuelve el ÍNDICE del primer elemento que cumple la condición, o -1
const indice = usuarios.findIndex(u => u.nombre === "Marta");
console.log(indice);    // 2

const numeros = [1, 2, 3, 4, 5];

// some — ¿al menos UN elemento cumple la condición?
console.log(numeros.some(n => n > 4));    // true  (5 > 4)
console.log(numeros.some(n => n > 10));   // false

// every — ¿TODOS los elementos cumplen la condición?
console.log(numeros.every(n => n > 0));   // true
console.log(numeros.every(n => n > 3));   // false (1, 2, 3 no cumplen)

// Uso práctico
const edades = [22, 31, 19, 28, 45];
const todosAdultos = edades.every(e => e >= 18);
const hayMenores   = edades.some(e => e < 18);

console.log(`Todos adultos: ${todosAdultos}`);  // true
console.log(`Hay menores: ${hayMenores}`);      // false

const productos = [
  { nombre: "Laptop",  precio: 999,  categoria: "tech"  },
  { nombre: "Libro",   precio: 25,   categoria: "edu"   },
  { nombre: "Monitor", precio: 350,  categoria: "tech"  },
  { nombre: "Curso",   precio: 89,   categoria: "edu"   },
  { nombre: "Teclado", precio: 79,   categoria: "tech"  }
];

// Obtener el total de productos de tecnología con precio > 100
const totalTech = productos
  .filter(p => p.categoria === "tech")       // solo tech
  .filter(p => p.precio > 100)              // solo los caros
  .map(p => p.precio)                       // extraer precios
  .reduce((suma, precio) => suma + precio, 0); // sumar

console.log(`Total tech > 100€: ${totalTech}€`);   // 1349€

// Nombres de productos edu ordenados alfabéticamente
const nombresEdu = productos
  .filter(p => p.categoria === "edu")
  .map(p => p.nombre)
  .sort();

console.log(nombresEdu);   // ["Libro", "Curso"] → ["Curso", "Libro"]