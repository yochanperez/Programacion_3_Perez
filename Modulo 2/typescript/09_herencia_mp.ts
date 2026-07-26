// === CLASE PADRE (ESTRUCTURA GENERAL DEL CLUB) ===
class MiembroClub {
  protected apellido: string;
  protected edad: number;

  constructor(apellido: string, edad: number) {
    this.apellido = apellido;
    this.edad = edad;
  }

  registrarAsistencia(): void {
    console.log(`  ${this.apellido} ha registrado su ingreso al complejo deportivo.`);
  }

  completarCheckIn(): void {
    console.log(`  ${this.apellido} pasó por el control médico de rutina.`);
  }

  obtenerPerfil(): string {
    return `${this.apellido} (${this.edad} años)`;
  }
}

// === CLASE HIJA: FUTBOLISTA ===
class Futbolista extends MiembroClub {
  private posicion: string;

  constructor(apellido: string, edad: number, posicion: string) {
    super(apellido, edad);  
    this.posicion = posicion;
  }

  anotarEstadisticaGol(): void {
    console.log(`  📊 ${this.apellido}: ¡Gol sumado a sus estadísticas individuales de torneo!`);
  }

  obtenerPerfil(): string {
    return `${super.obtenerPerfil()} — Demarcación: ${this.posicion}`;  
  }
}

// === CLASE HIJA: ENTRENADOR ===
class Entrenador extends MiembroClub {
  private licenciaConmebol: boolean;

  constructor(apellido: string, edad: number, licenciaConmebol: boolean) {
    super(apellido, edad);
    this.licenciaConmebol = licenciaConmebol;
  }

  dirigirPractica(): void {
    console.log(`  📊 ${this.apellido}: Inicia la sesión táctica de fútbol reducido en la pizarra.`);
  }

  obtenerPerfil(): string {
    return `${super.obtenerPerfil()} — Licencia Pro: ${this.licenciaConmebol ? "Validada ✅" : "En Trámite ⏳"}`;
  }
}

// === EJECUCIÓN Y VALIDACIÓN DE JERARQUÍAS EN CAMPO ===
console.log("=== SISTEMA DE HERENCIA DE PLANILLAS ===\n");

const mendoza = new Futbolista("Mendoza", 20, "Delantero Centro");
const zubeldia = new Entrenador("Zubeldía", 45, true);

// EJECUCIÓN DE MÉTODOS HEREDADOS DE LA BASE
mendoza.registrarAsistencia();
zubeldia.registrarAsistencia();
mendoza.completarCheckIn();

// EJECUCIÓN DE MÉTODOS ESPECÍFICOS DE ROL
mendoza.anotarEstadisticaGol();
zubeldia.dirigirPractica();

console.log(`\nFicha Atacante:  ${mendoza.obtenerPerfil()}`);
console.log(`Ficha Técnico:   ${zubeldia.obtenerPerfil()}`);

// COMPROBACIONES DE TIPO INSTANCEOF
console.log(`\n¿mendoza es Futbolista?  ${mendoza instanceof Futbolista}`);   
console.log(`¿mendoza es MiembroClub? ${mendoza instanceof MiembroClub}`);    
console.log(`¿mendoza es Entrenador?  ${mendoza instanceof Entrenador}`);