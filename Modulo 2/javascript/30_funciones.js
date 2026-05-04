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