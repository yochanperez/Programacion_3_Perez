// =====================================================================
// 1. CONTROL DE ESTADOS DE FICHAJES EN EL MERCADO (SISTEMA LIGA)
// =====================================================================
const estadoTransferencia = "enviado";

switch (estadoTransferencia) {
  case "pendiente":
    console.log("📋 Fichaje registrado en el sistema. En espera de confirmación de pago del club comprador.");
    break;
  case "confirmado":
    console.log("✅ Fondos validados por la liga. Preparando documentación internacional (TMS).");
    break;
  case "enviado":
    console.log("🚚 Documentación de transferencia en camino a la federación. Tiempo estimado de revisión: 48 horas.");
    break;
  case "entregado":
    console.log("📦 Ficha validada con éxito. ¡Futbolista formalmente habilitado para jugar!");
    break;
  case "cancelado":
    console.log("❌ Transferencia cancelada por Fair Play Financiero. Reembolso logístico procesado.");
    break;
  default:
    console.log(`Estado desconocido en la planilla: "${estadoTransferencia}". Contactar soporte de la federación.`);
}

// =====================================================================
// 2. DOSIFICACIÓN DE TRABAJO TÁCTICO SEGÚN EL DÍA DEL MICROCICLO
// =====================================================================
const diaMicrociclo = 3; // 1=Lunes ... 7=Domingo (Día de partido)

switch (diaMicrociclo) {
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
    console.log("Día de entrenamiento — Sesión de alta intensidad en campo (08:00 a 11:00)");
    break;
  case 6:
    console.log("Sábado — Sesión de reactivación y repaso táctico a balón parado (09:00 a 11:00)");
    break;
  case 7:
    console.log("⚠️ Domingo — Día de competición oficial: Oficinas y canteras cerradas");
    break;
  default:
    console.log("Indicador de día no válido para el microciclo (usar rango del 1 al 7)");
}

// =====================================================================
// 3. CATEGORIZACIÓN CONTRACTUAL Y SEGUROS MÉDICOS DE LA PLANTILLA
// =====================================================================
const tipoContratoFutbolista = "juvenil_promesa";
let tasaRetencionFede;
let clausulaSeguroMedico;

switch (tipoContratoFutbolista) {
  case "canterano_becado":
  case "juvenil_promesa":
    tasaRetencionFede    = 0;
    clausulaSeguroMedico = "Cobertura médica básica provista por la cantera";
    break;
  case "profesional_nacional":
  case "profesional_extranjero":
    tasaRetencionFede    = 0.05;
    clausulaSeguroMedico = "Seguro médico de alta competencia (Póliza Especial 5%)";
    break;
  case "jugador_franquicia":
  case "leyenda_club":
    tasaRetencionFede    = 0.15;
    clausulaSeguroMedico = "Póliza premium internacional con blindaje contra lesiones de larga duración (15%)";
    break;
  default:
    tasaRetencionFede    = 0.15;
    clausulaSeguroMedico = "Seguro complementario estándar de la liga nacional";
}

const sueldoBaseIndexado = 80;
const descuentoFederativo  = sueldoBaseIndexado * tasaRetencionFede;

console.log(`\n--------------------------------------------------`);
console.log(`📊 INFORME FINANCIERO DE FICHA DE JUGADOR`);
console.log(`--------------------------------------------------`);
console.log(`Categoría contractual: ${tipoContratoFutbolista}`);
console.log(`Detalle de seguro:     ${clausulaSeguroMedico}`);
console.log(`Deducción por trámite: $${descuentoFederativo.toFixed(2)}`);
console.log(`Asignación neta final: $${(sueldoBaseIndexado - descuentoFederativo).toFixed(2)}`);
console.log(`--------------------------------------------------`);