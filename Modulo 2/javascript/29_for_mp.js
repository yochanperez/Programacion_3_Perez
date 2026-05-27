// =====================================================================
// 1. CICLO FOR INDEXADO BÁSICO (CONTADOR DE SERIES DE ENTRENAMIENTO)
// =====================================================================
console.log('⚽ INICIO DE CICLO FOR - MONITOREO DE SERIES');

for (let i = 0; i < 5; i++) {
    console.log(`Serie de reactivación completada: #${i + 1}`);
}

// Iteración indexada sobre listas: Convocatoria por bloques posicionales
const posicionesTácticas = ['Portero', 'Defensa', 'Mediocampista', 'Delantero'];
for (let i = 0; i < posicionesTácticas.length; i++) {
    console.log(`Puesto táctico analizado en pizarra: ${posicionesTácticas[i]}`);
}

// =====================================================================
// 2. REPORTE DE INVENTARIO DE MATERIAL DEPORTIVO CON ALERTAS DE STOCK
// =====================================================================
const inventarioUtileria = [
  { codigo: "U01", nombre: "Balones N5",     stock: 2  },
  { codigo: "U02", nombre: "Chalecos Petos", stock: 15 },
  { codigo: "U03", nombre: "Conos Altos",    stock: 0  },
  { codigo: "U04", nombre: "Estacas Césped", stock: 7  },
  { codigo: "U05", nombre: "Cronómetros",    stock: 1  },
];

const UMBRAL_CRITICO_UTILERIA = 3;

console.log("\n==================================================");
console.log("📦 FUTDATA - REPORTE DE INVENTARIO DE UTILERÍA");
console.log("==================================================");
console.log(`${"#".padEnd(4)} ${"Código".padEnd(6)} ${"Material".padEnd(14)} Stock  Estado`);
console.log("─".repeat(52));

for (let i = 0; i < inventarioUtileria.length; i++) {
  const item   = inventarioUtileria[i];
  const numero = String(i + 1).padStart(2, "0");

  let estadoMecanico;
  if (item.stock === 0) {
    estadoMecanico = "🔴 AGOTADO CRÍTICO";
  } else if (item.stock <= UMBRAL_CRITICO_UTILERIA) {
    estadoMecanico = "🟡 REABASTECER URGENTE";
  } else {
    estadoMecanico = "🟢 Stock Óptimo";
  }

  console.log(
    `${numero}.  ${item.codigo.padEnd(6)} ${item.nombre.padEnd(14)} ` +
    `${String(item.stock).padStart(3)}u   ${estadoMecanico}`
  );
}

// =====================================================================
// 3. USO DE FOR...OF (RESUMEN DE PRODUCCIÓN DE GOLES POR FUTBOLISTA)
// =====================================================================
const registroGoleadores = [
  { vendedor: "Mendoza",  monto: 3200, region: "Norte" }, // monto mapeado a minutos jugados
  { vendedor: "Silva",    monto: 4750, region: "Sur"   }, // region mapeada a zona de procedencia de cantera
  { vendedor: "Paredes",  monto: 2100, region: "Norte" },
  { vendedor: "Cárdenas", monto: 5300, region: "Sur"   },
  { vendedor: "Suárez",   monto: 1800, region: "Este"  },
];

const META_MINUTOS_DISPUTADOS = 3000;
let totalMinutosPlantilla = 0;
let futbolistasEnMeta = 0;

console.log("\n==================================================");
console.log("📊 RESUMEN DE RENDIMIENTO - MINUTOS DE COMPETICIÓN");
console.log("==================================================");

for (const registro of registroGoleadores) {
  totalMinutosPlantilla += registro.monto;

  const cumpleMetaMinutos = registro.monto >= META_MINUTOS_DISPUTADOS;
  if (cumpleMetaMinutos) {
    futbolistasEnMeta++;
  }

  const indicadorMetrico = cumpleMetaMinutos ? "✅" : "⚠️";
  console.log(
    `${indicadorMetrico} ${registro.vendedor.padEnd(9)} ` +
    `[Región: ${registro.region.padEnd(5)}] ` +
    `${registro.monto.toLocaleString()} min`
  );
}

console.log("─".repeat(52));
console.log(`Volumen total de juego acumulado: ${totalMinutosPlantilla.toLocaleString()} minutos.`);
console.log(`Jugadores que superan el umbral (≥${META_MINUTOS_DISPUTADOS} min): ${futbolistasEnMeta}/${registroGoleadores.length} efectivos.`);

// =====================================================================
// 4. USO DE FOR...OF CON .ENTRIES() (RANKING DE ASISTIDORES DEL TORNEO)
// =====================================================================
const lideresAsistencias = ["Valencia", "Castillo", "Ibarra", "Chalá", "Arroyo"];

console.log("\n==================================================");
console.log("🥇 TOP 5 LÍDERES DE ASISTENCIAS DE GOL");
console.log("==================================================");

for (const [posicion, jugador] of lideresAsistencias.entries()) {
  const galardon =
    posicion === 0 ? "🥇" :
    posicion === 1 ? "🥈" :
    posicion === 2 ? "🥉" : `${posicion + 1}. `;

  console.log(`${galardon} ${jugador}`);
}

// =====================================================================
// 5. USO DE FOR...IN (ESCANEO DE CONFIGURACIÓN TÁCTICA DEL SOFTWARE)
// =====================================================================
const configuracionModuloAnalisis = {
  idiomaPlanilla: "es-EC",
  monedaPresupuesto: "USD",
  zonaHorariaPartidos: "America/Guayaquil",
  formatoCronometro: "MM:SS",
  maxFichasExtranjeros: 3,
  algoritmoPrediccionXG: false
};

console.log("\n==================================================");
console.log("⚙️ CONFIGURACIÓN NATIVA DE FUTDATA CORE");
console.log("==================================================");

for (const parametro in configuracionModuloAnalisis) {
  const descriptor = configuracionModuloAnalisis[parametro];

  const visualizacionFiltrada = typeof descriptor === "boolean"
    ? (descriptor ? "ACTIVO (RED NEURONAL)" : "INACTIVO (ESTÁNDAR)")
    : descriptor;

  console.log(`  ${parametro.padEnd(22)}: ${visualizacionFiltrada}`);
}

// =====================================================================
// 6. CONTROL SENTENCIA BREAK (BÚSQUEDA TÁCTICA DE REPOSICIÓN MÍNIMA)
// =====================================================================
const monitorFatigaJugadores = [
  { nombre: "Caicedo",  energia: 10 },
  { nombre: "Pacho",    energia: 4  },
  { nombre: "Hincapié", energia: 1  }, // ← Primer elemento en alcanzar el umbral de fatiga crítica
  { nombre: "Preciado", energia: 0  },
  { nombre: "Estupiñán",energia: 2  }
];

const ENERGIA_LIMITE_ALERTA = 2;

console.log("\n==================================================");
console.log("🚨 ESCANEO DETECCIÓN TEMPRANA DE LESIONES (BREAK)");
console.log("==================================================");

for (const jugador of monitorFatigaJugadores) {
  if (jugador.energia <= ENERGIA_LIMITE_ALERTA) {
    console.log(`⚠️ Alerta Cuerpo Técnico: Alerta de sustitución para ${jugador.nombre} (Batería física: ${jugador.energia}%)`);
    break; // Detiene el escaneo inmediatamente al encontrar la primera anomalía de riesgo
  }
}

// =====================================================================
// 7. CONTROL SENTENCIA CONTINUE (AUDITANDO TRASPASOS APROBADOS)
// =====================================================================
const libroPasesLiga = [
  { id: "TRX001", monto: 500000,  estado: "aprobada"  },
  { id: "TRX002", monto: 200000,  estado: "rechazada" },
  { id: "TRX003", monto: 850000,  estado: "aprobada"  },
  { id: "TRX004", monto: 120000,  estado: "pendiente" },
  { id: "TRX005", monto: 1200000, estado: "aprobada"  },
];

let auditoriaPresupuestoAprobado = 0;

console.log("\n==================================================");
console.log("🛡️ SISTEMA DE EXCLUSIÓN - AUDITORÍA DE INVERSIONES");
console.log("==================================================");

for (const transferencia of libroPasesLiga) {
  if (transferencia.estado !== "aprobada") {
    console.log(`  ↩️ Operación ${transferencia.id} omitida automáticamente del balance general (Estatus: ${transferencia.estado})`);
    continue; // Salta de inmediato las carpetas denegadas o en proceso sin computar los montos
  }

  auditoriaPresupuestoAprobado += transferencia.monto;
  console.log(`  ✅ Operación ${transferencia.id} auditada con éxito: $${transferencia.monto.toLocaleString()}`);
}

console.log("─".repeat(52));
console.log(`Inversión neta consolidada en pases aprobados: $${auditoriaPresupuestoAprobado.toLocaleString()}`);
console.log("--------------------------------------------------");