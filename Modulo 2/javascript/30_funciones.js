function saludo(){
    console.log('hola mundo');
}

saludo()

const saludarhola = function (){
    console.log('Hola con funcion expresada');
}

saludarhola()

//funcion con flecha
const saludosflecha=()=>{
    console.log("Hello con funcion flecha");
}

//funcion anonima
setTimeout(function(){
    console.log('ejecutando...')
},1000)

//funcion con parametros

function saludoparametro(nombre){
    console.log('Parametro'+ nombre);
}

saludoparametro('Eduardo')

// Sintaxis: function nombre(parámetros) { cuerpo }
function saludar(nombre) {
  return `Hola, ${nombre}!`;
}

console.log(saludar("Ana"));   // "Hola, Ana!"
console.log(saludar("Luis"));  // "Hola, Luis!"

function sumar(a,b){
    return a+b;
}

resultado=sumar(45,5);

console.log(resultado)


// Sintaxis completa
const sumar2 = (a, b) => {
  return a + b;
};

// Retorno implícito — cuando el cuerpo es una sola expresión
// se omiten las llaves y la palabra return
const sumarCorto = (a, b) => a + b;

// Un solo parámetro — se pueden omitir los paréntesis
const doblar = n => n * 2;

const par = n => n % 2==0;

// Sin parámetros — los paréntesis son obligatorios
const saludarMundo = () => "Hola, mundo!";

console.log(sumar2(3, 4));        // 7
console.log(sumarCorto(3, 4));   // 7
console.log(doblar(5));          // 10
console.log(saludarMundo());     // "Hola, mundo!"
console.log(par(2)); 

function saludar(nombre = "mundo", saludo = "hola") {
    return `${saludo}, ${nombre}!`;
}

console.log(saludar());            
console.log(saludar("Elena", "Ciao"))

const areaTriangulo = (base, altura) => (base * altura) / 2;

// Ejemplo de uso
const b = 10;
const h = 5;

console.log(`El área del triángulo con base ${b} y altura ${h} es: ${areaTriangulo(b, h)}`);

// ...numeros captura todos los argumentos en un array
function sumarTodos(...numeros) {
  let total = 0;
  for (const n of numeros) {
    total += n;
  }
  return total;
}

console.log(sumarTodos(1, 2, 3));          // 6
console.log(sumarTodos(1, 2, 3, 4, 5));   // 15
console.log(sumarTodos());                 // 0

// Se puede combinar con parámetros normales
// el rest SIEMPRE debe ser el último parámetro
function registrar(categoria, ...mensajes) {
  for (const msg of mensajes) {
    console.log(`[${categoria}] ${msg}`);
  }
}

registrar("INFO", "Inicio", "Conexión OK", "Listo");
// [INFO] Inicio
// [INFO] Conexión OK
// [INFO] Listo

function datos_personas(...datos){
    for (const dt of datos){
        console.log(`${dt}`);
    }
}

datos_personas('Feo','Josue','patas');

const numeros = [3, 1, 4, 1, 5, 9, 2, 6];

// Sin spread — Math.max no acepta un array directamente
console.log(Math.max(numeros));       // NaN

// Con spread — expande el array en argumentos
console.log(Math.max(...numeros));    // 9
console.log(Math.min(...numeros));    // 1

// Combinar arrays
const primeros = [1, 2, 3];
const segundos = [4, 5, 6];
const todos    = [...primeros, ...segundos];
console.log(todos);   // [1, 2, 3, 4, 5, 6]

// Copiar un array (copia superficial)
const original = [1, 2, 3];
const copia    = [...original];
copia.push(4);
console.log(original);   // [1, 2, 3]  — no se modifica
console.log(copia);      // [1, 2, 3, 4]

// Spread con objetos
const base     = { nombre: "Ana", edad: 28 };
const ampliado = { ...base, ciudad: "Madrid" };
console.log(ampliado);   // { nombre: 'Ana', edad: 28, ciudad: 'Madrid' }

// operar recibe dos números y una función
function operar(a, b, operacion) {
  return operacion(a, b);
}

const sumar   = (a, b) => a + b;
const restar  = (a, b) => a - b;
const multiplicar = (a, b) => a * b;

console.log(operar(10, 3, sumar));        // 13
console.log(operar(10, 3, restar));       // 7
console.log(operar(10, 3, multiplicar));  // 30

// Callback anónimo (arrow function inline)
console.log(operar(10, 3, (a, b) => a ** b));  // 1000


const global = "soy global";   // accesible en todo el archivo

function ejemploScope() {
  const local = "soy local";   // solo accesible dentro de esta función
  console.log(global);         // ✅ puede acceder a la variable global
  console.log(local);          // ✅
}

ejemploScope();
// console.log(local);         // ❌ ReferenceError — local no existe aquí

// Block scope — const y let respetan los bloques { }
{
  const dentroDeBloque = "solo aquí";
  console.log(dentroDeBloque);   // ✅
}
// console.log(dentroDeBloque);  // ❌ ReferenceError

// var NO respeta el block scope — otra razón para no usarlo
{
  var escapó = "estoy en todos lados";
}
console.log(escapó);   // ✅ "estoy en todos lados" — comportamiento inesperado