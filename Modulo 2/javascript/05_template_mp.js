const nombreJugador = "Carlos";
const apellidoJugador = "Vela";
const edadJugador = 31;

console.log(`Analizando rendimiento de: ${nombreJugador}`);

console.log(`Ficha Oficial: ${nombreJugador.toUpperCase()} ${apellidoJugador.toUpperCase()}`);
console.log(`Edad proyectada para la próxima temporada: ${edadJugador + 1} años`);
console.log(`¿Satisface el criterio de categoría absoluta? ${edadJugador >= 18 ? "Sí" : "No"}`);

const reporteFisicoMultilinea = `
  CONVOCADO: ${nombreJugador} ${apellidoJugador}
  EDAD REGISTRADA: ${edadJugador}
  ACCESO A CAMPO PRINCIPAL: ${edadJugador >= 18 ? "Permitido" : "Denegado"}
`;

console.log(reporteFisicoMultilinea);