// === DEFICINIÓN DE LA CLASE CONTROLADORA DE RENDIMIENTO ===
class Futbolista {
  apellido: string;
  goles: number;

  constructor(apellido: string, goles: number) {
    this.apellido = apellido;
    this.goles = goles;
  }

  reportarEstadistica(): string {
    return `Métrica Actual -> Apellido: ${this.apellido} | Goles anotados: ${this.goles}`;
  }

  registrarAnotacion(): void {
    this.goles++;
    console.log(`⚽ ¡Gol registrado! ${this.apellido} actualiza su contador a ${this.goles} goles.`);
  }
}

// === CREACIÓN DE INSTANCIAS DE JUGADORES (OBJETOS) ===
const mendoza = new Futbolista("Mendoza", 5);
const silva = new Futbolista("Silva", 2);

console.log(mendoza.reportarEstadistica());
console.log(silva.reportarEstadistica());

mendoza.registrarAnotacion();

console.log(mendoza.reportarEstadistica());