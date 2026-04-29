
const ingresoMensual = 800;
const deudaActual = 200;
const INGRESO_MINIMO = 600;
const RATIO_DEUDA_MAXIMO = 0.4; // la deuda no debe superar el 40% del ingreso

const ratioDeuda = deudaActual / ingresoMensual;

if (ingresoMensual >= INGRESO_MINIMO && ratioDeuda <= RATIO_DEUDA_MAXIMO) {
  console.log("Crédito aprobado.");
  console.log(`Ratio deuda/ingreso: ${(ratioDeuda * 100).toFixed(1)}%`);
} else {
  console.log("Crédito denegado.");
  console.log(`Ingreso mínimo requerido: $${INGRESO_MINIMO}`);
  console.log(`Ratio deuda actual: ${(ratioDeuda * 100).toFixed(1)}% (máximo permitido: 40%)`);
}
// Crédito aprobado.
// Ratio deuda/ingreso: 25.0%

const contrasenaIngresada = "Segura123";
const contrasenaCorrecta  = "Segura123";
let intentosFallidos      = 0;
const MAX_INTENTOS        = 3;

if (contrasenaIngresada === contrasenaCorrecta) {
  console.log("Autenticación exitosa. Bienvenido.");
} else {
  intentosFallidos++;
  const intentosRestantes = MAX_INTENTOS - intentosFallidos;
  console.log(`Contraseña incorrecta. Intentos restantes: ${intentosRestantes}`);
}
// Autenticación exitosa. Bienvenido.

const prompt= require('prompt-sync')();

const productos_comprados= prompt('¿Cúantos productos ha comprado?');
console.log(`Usted ha comprado ${productos_comprados} productos`)

if (productos_comprados>=10){
    console.log('Descuento Aplicado');
}else{
    console.log('Sin descuento');
}

const contraseñaingresar = '123';
let intentosFallidos2 = 0;
const MAX_INTENTOS2 = 3;

const contraseñabuena= prompt('Ingresar contraseña: ');

if (contraseñabuena===contraseñaingresar){
    console.log('Acceso Permitido');
}else{
    intentosFallidos2++;
    const intentosRestantes2 = MAX_INTENTOS2 - intentosFallidos2;
    console.log(`Contraseña incorrecta. Intentos restantes: ${intentosRestantes2}`);
}