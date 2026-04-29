const totalCompra = 150;
const MINIMO_DESCUENTO = 100;
const PORCENTAJE_DESCUENTO = 0.10;

let totalFinal = totalCompra;

if (totalCompra >= MINIMO_DESCUENTO) {
  const descuento = totalCompra * PORCENTAJE_DESCUENTO;
  totalFinal = totalCompra - descuento;
  console.log(`Descuento aplicado: $${descuento.toFixed(2)}`);
}

console.log(`Total a pagar: $${totalFinal.toFixed(2)}`);
// Descuento aplicado: $15.00
// Total a pagar: $135.00

const stockDisponible = 3;
const UMBRAL_STOCK_BAJO = 5;

if (stockDisponible <= UMBRAL_STOCK_BAJO) {
  console.log(`⚠️ Stock bajo: quedan ${stockDisponible} unidades. Reabastecer pronto.`);
}

const edadUsuario = 17;
const EDAD_MINIMA = 18;

if (edadUsuario < EDAD_MINIMA) {
  console.log("Acceso denegado: debes ser mayor de edad para registrarte.");
}

console.log("Registro finalizado.");
// Acceso denegado: debes ser mayor de edad para registrarte.
// Registro finalizado.

const prompt = require('prompt-sync')();

const producto= prompt('Porfavor el monto de su compra: ');
console.log(`Su monto es de ${producto}$`);

if (producto > 100 ){
    console.log(`aplica descuento`);
}else{
    console.log("Su monto es muy bajo para aplicar un descuento")
}

const velocidad = prompt('¿A cuánta velocidad iba su vehiculo?: ');
 console.log(`Su vehiculo iba a una velocidad de ${velocidad} km/h`);

if (velocidad> 90){
    console.log(`Exceso de velocidad`);
}else{
    console.log("Velocidad dentro del límite permitido.");
}