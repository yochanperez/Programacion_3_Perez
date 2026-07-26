const prompt = require('prompt-sync')();

// =====================================================================
// 1. CONTROL DE ACCESOS Y CREDENCIALES AL COMPLEJO DEPORTIVO
// =====================================================================
const personalAutenticado = true;
const rolPersonal         = "analista";
const zonaEstadio         = "sala_prensa";

if (personalAutenticado) {
  console.log(`Verificación Digital: Miembro en sistema. Rol: ${rolPersonal}`);

  if (rolPersonal === "cuerpo_tecnico") {
    console.log("Acceso irrestricto a todas las instalaciones concedido.");

    if (zonaEstadio === "sala_prensa") {
      console.log("Cargando terminal de monitoreo táctico principal...");
    }
  } else if (rolPersonal === "analista") {
    console.log("Acceso restringido a áreas de datos concedido.");

    if (zonaEstadio === "sala_prensa") {
      console.log("⛔ Acceso denegado: Los analistas de video no gestionan la sala de prensa.");
    } else {
      console.log(`Cargando entorno de datos para la zona: ${zonaEstadio}`);
    }
  } else {
    console.log("Categoría de credencial no identificada en el perímetro.");
  }

} else {
  console.log("Error de lectura: Credencial inactiva. Redirigiendo a control físico...");
}

// =====================================================================
// 2. VALIDACIÓN DE FICHA TÉCNICA E INSCRIPCIÓN DE JUGADORES
// =====================================================================
const nombreJugador   = "Esteban";
const correoFicha     = "esteban@club.com";
const pasaporteCodigo = "ec8";
const REQUISITO_MIN_DIGITOS = 8;

if (nombreJugador.trim().length === 0) {
  console.log("❌ Error en planilla: El nombre del futbolista es obligatorio.");
} else {
  console.log(`✅ Registro de campo validado: ${nombreJugador}`);

  if (!correoFicha.includes("@") || !correoFicha.includes(".")) {
    console.log("❌ Error en planilla: El correo de contacto de la ficha no es válido.");
  } else {
    console.log(`✅ Correo institucional validado: ${correoFicha}`);

    if (pasaporteCodigo.length < REQUISITO_MIN_DIGITOS) {
      console.log(`❌ Validación rechazada: El pasaporte o cédula debe registrar al menos ${REQUISITO_MIN_DIGITOS} caracteres.`);
      console.log(`   Longitud del código actual: ${pasaporteCodigo.length}`);
    } else {
      console.log("✅ Criterios reglamentarios cumplidos. Inscripción completada en la federación.");
    }
  }
}

// =====================================================================
// 3. LOGÍSTICA DE TIENDA DEL CLUB Y DESCUENTOS PARA SOCIOS
// =====================================================================
const sectorProducto  = "indumentaria_oficial"; // "accesorios", "indumentaria_oficial", "entradas"
const esSocioAbonado  = true;
const costoBaseArticulo = 200;

let costoFinalArticulo = costoBaseArticulo;
let desgloseDescuento = "";

if (sectorProducto === "indumentaria_oficial") {
  const impuestoLogistica = costoBaseArticulo * 0.15;
  costoFinalArticulo = costoBaseArticulo + impuestoLogistica;
  desgloseDescuento = "Arancel de importación textil (15%) incluido";

  if (esSocioAbonado) {
    const rebajaSocio = costoFinalArticulo * 0.05;
    costoFinalArticulo -= rebajaSocio;
    desgloseDescuento += " + 5% descuento por Socio Abonado";
  }

} else if (sectorProducto === "accesorios") {
  if (esSocioAbonado) {
    costoFinalArticulo = costoBaseArticulo * 0.80;  
    desgloseDescuento = "20% rebaja directa en merchandising";
  } else {
    costoFinalArticulo = costoBaseArticulo * 0.90;  
    desgloseDescuento = "10% liquidación general de temporada";
  }

} else if (sectorProducto === "entradas") {
  costoFinalArticulo = costoBaseArticulo;           
  desgloseDescuento = "Entrada libre de impuestos adicionales";
}

console.log(`Línea de Tienda:  ${sectorProducto}`);
console.log(`Valor de etiqueta: $${costoBaseArticulo.toFixed(2)}`);
console.log(`Detalle de caja:   ${desgloseDescuento}`);
console.log(`Valor neto de caja: $${costoFinalArticulo.toFixed(2)}`);

// =====================================================================
// 4. SCRIPT INTERACTIVO: LIQUIDACIÓN DE INDUMENTARIA DE ENTRENAMIENTO
// =====================================================================
console.log("\n--------------------------------------------------");
console.log("⚽ PUNTO DE VENTA - MERCHANDISING DEL CLUB");
console.log("--------------------------------------------------");

const totalGastoTexto = prompt('¿Cuánto es el monto total de su compra de indumentaria?: ');
const totalGasto = parseFloat(totalGastoTexto) || 0;

const estatusMiembro = prompt('¿Usted es socio aportante activo del club? (Si/No): ').toLowerCase();

if (totalGasto > 50) {
    if (estatusMiembro === 'si') {
        console.log('Facturación: Se aplica rebaja de Socio Preferencial en caja.');
    } else {
        console.log('Facturación: Se aplica descuento regular de cliente recurrente.');
    }
} else {
    console.log('Facturación: Compra mínima aprobada. No alcanza el volumen para beneficios extra.');
}
console.log("--------------------------------------------------");