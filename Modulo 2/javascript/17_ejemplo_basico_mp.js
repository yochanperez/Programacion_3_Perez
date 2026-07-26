const prompt = require("prompt-sync")();

console.log("--------------------------------------------------");
console.log("⚽ FUTDATA - CALCULADORA DE RENDIMIENTO OFENSIVO");
console.log("--------------------------------------------------");

const registroGolesTexto = prompt("Goles anotados por el Delantero A: ");
const registroAsistenciasTexto = prompt("Asistencias dadas por el Mediocampista B: ");

const golesDelantero = parseFloat(registroGolesTexto) || 0;
const asistenciasMediocampista = parseFloat(registroAsistenciasTexto) || 0;

const participacionGolesSuma = golesDelantero + asistenciasMediocampista;
const brechaProductividadDiferencia = golesDelantero - asistenciasMediocampista;
const combinacionAtaqueProducto = golesDelantero * asistenciasMediocampista;
const ratioGolesAsistenciasCociente = asistenciasMediocampista !== 0 ? golesDelantero / asistenciasMediocampista : "indefinido";

console.log(`
--------------------------------------------------
📊 COMPARATIVA ESTRATÉGICA CONSOLIDADA
--------------------------------------------------
Métricas base evaluadas: [Goles: ${golesDelantero} | Asistencias: ${asistenciasMediocampista}]

  Suma combinada de goles y asistencias:   ${participacionGolesSuma}
  Brecha de productividad ofensiva:        ${brechaProductividadDiferencia}
  Factor de sociedad en el ataque:         ${combinacionAtaqueProducto}
  Ratio de goles por asistencia:           ${ratioGolesAsistenciasCociente}
--------------------------------------------------
`);