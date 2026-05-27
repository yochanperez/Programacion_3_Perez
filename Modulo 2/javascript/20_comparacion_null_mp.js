console.log("--------------------------------------------------");
console.log("🧩 EVALUACIÓN DE REGISTROS AUSENTES EN PLANILLA");
console.log("--------------------------------------------------");

const reporteMedicoNulo = null;
let proyeccionMinutosIndefinida;

console.log(reporteMedicoNulo === null);
console.log(proyeccionMinutosIndefinida === undefined);
console.log(reporteMedicoNulo === proyeccionMinutosIndefinida);

console.log("--------------------------------------------------");
console.log("⚖️ IGUALDAD DÉBIL CON VALORES NULOS");
console.log("--------------------------------------------------");

console.log(reporteMedicoNulo == proyeccionMinutosIndefinida);
console.log(reporteMedicoNulo == 0);
console.log(reporteMedicoNulo == false);

console.log("--------------------------------------------------");
console.log("📊 ANOMALÍAS RELACIONALES (CONVERSIÓN DE CONTADORES)");
console.log("--------------------------------------------------");

console.log(reporteMedicoNulo > 0);
console.log(reporteMedicoNulo == 0);
console.log(reporteMedicoNulo >= 0);

console.log("--------------------------------------------------");
console.log("📉 INDETERMINACIONES CON REGISTROS INDEFINIDOS");
console.log("--------------------------------------------------");

console.log(proyeccionMinutosIndefinida > 0);
console.log(proyeccionMinutosIndefinida < 0);
console.log(proyeccionMinutosIndefinida == 0);
console.log("--------------------------------------------------");