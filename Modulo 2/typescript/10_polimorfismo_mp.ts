// === CLASE BASE ABSTRACTA (CONTRATO DE RENDIMIENTO DE LA LIGA) ===
abstract class EvaluadorRendimiento {
  constructor(protected apellido: string) {}

  // MÉTODOS ABSTRACTOS INDISPENSABLES POR PUESTO
  abstract calcularCoeficienteEfectividad(): number;
  abstract evaluarPuntosScouting(): number;

  // MÉTODO CONCRETO COMPARTIDO
  emitirInformeConsolidado(): string {
    return `Analítica [${this.constructor.name}] -> ${this.apellido}: ` +
           `Coeficiente=${this.calcularCoeficienteEfectividad().toFixed(2)}, Scouting Points=${this.evaluarPuntosScouting()} pts`;
  }
}

// === CLASE DERIVADA CON LÓGICA DE PORTEROS ===
class EvaluadorPortero extends EvaluadorRendimiento {
  constructor(apellido: string, private atajadas: number, private golesConcedidos: number) {
    super(apellido);
  }

  calcularCoeficienteEfectividad(): number { 
    if (this.atajadas + this.golesConcedidos === 0) return 0;
    return this.atajadas / (this.atajadas + this.golesConcedidos); 
  }
  
  evaluarPuntosScouting(): number { return this.atajadas * 10; }
}

// === CLASE DERIVADA CON LÓGICA DE DELANTEROS ===
class EvaluadorDelantero extends EvaluadorRendimiento {
  constructor(apellido: string, private disparos: number, private golesAnotados: number) {
    super(apellido);
  }

  calcularCoeficienteEfectividad(): number { 
    if (this.disparos === 0) return 0;
    return this.golesAnotados / this.disparos; 
  }
  
  evaluarPuntosScouting(): number { return this.golesAnotados * 25; }
}

// === CLASE DERIVADA CON LÓGICA DE MEDIOCAMPISTAS ===
class EvaluadorMediocampista extends EvaluadorRendimiento {
  constructor(apellido: string, private pasesTotales: number, private pasesExitosos: number) {
    super(apellido);
  }

  calcularCoeficienteEfectividad(): number { 
    if (this.pasesTotales === 0) return 0;
    return this.pasesExitosos / this.pasesTotales; 
  }
  
  evaluarPuntosScouting(): number { return this.pasesExitosos * 2; }
}

// === EJECUCIÓN MULTIPUESTO UTILIZANDO POLIMORFISMO ===
console.log("=== SISTEMA ANALÍTICO DE POLIMORFISMO TÁCTICO ===\n");

// Array polimórfico: Tipado bajo la clase abstracta base
const monitoreoPlantilla: EvaluadorRendimiento[] = [
  new EvaluadorPortero("Paredes", 8, 2),
  new EvaluadorDelantero("Mendoza", 5, 2),
  new EvaluadorMediocampista("Silva", 40, 34),
  new EvaluadorPortero("Cevallos", 4, 0),
];

// Un único bucle ejecuta e itera distintas lógicas internas sin importar el puesto
for (const evaluador of monitoreoPlantilla) {
  console.log(evaluador.emitirInformeConsolidated());
}

// Cálculo del puntaje consolidado global del equipo mediante reducción polimórfica
const scoutingGrupalTotal = monitoreoPlantilla.reduce((acumulador, jugador) => acumulador + jugador.evaluarPuntosScouting(), 0);
console.log(`\n  Puntaje total de Scouting acumulado por el plantel: ${scoutingGrupalTotal} pts`);