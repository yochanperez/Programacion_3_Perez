// === CLASE CON ATRIBUTOS ENCAPSULADOS CONTRA MUTACIONES ===
class FichaContrato {
  private _apellido: string;
  private _clausula: number;
  private _correoClub: string;

  constructor(apellido: string, clausula: number, correoClub: string) {
    this._apellido = apellido;
    this._clausula = clausula;
    this._correoClub = correoClub;
  }

  // GETTERS - LECTURA DE VARIABLES CONTROLADAS
  get apellido(): string { return this._apellido; }
  get clausula(): number { return this._clausula; }
  get correoClub(): string { return this._correoClub; }

  // SETTERS - PROTOCOLO DE VALIDACIÓN EN TRASPASOS
  set apellido(valor: string) {
    if (valor.trim().length < 2) {
      throw new Error("El apellido de la ficha debe tener al menos 2 caracteres.");
    }
    this._apellido = valor.trim();
  }

  set clausula(valor: number) {
    if (valor < 0) {
      throw new Error("La cláusula de rescisión de mercado no puede ser un valor negativo.");
    }
    this._clausula = valor;
  }

  set correoClub(valor: string) {
    if (!valor.includes("@")) {
      throw new Error("El formato del correo institucional del club es inválido.");
    }
    this._correoClub = valor.toLowerCase();
  }

  obtenerFichaConsolidada(): string {
    return `Contrato Activo -> ${this._apellido} | Cláusula: $${this._clausula} | Contacto: ${this._correoClub}`;
  }
}

// === EJECUCIÓN Y PRUEBAS DE INTEGRIDAD EN EL MERCADO ===
console.log("=== SISTEMA DE ENCAPSULAMIENTO DE FICHAS ===\n");
const contratoMendoza = new FichaContrato("Mendoza", 500000, "Mendoza@ClubUte.com");
console.log(contratoMendoza.obtenerFichaConsolidada());

contratoMendoza.clausula = 750000;
contratoMendoza.correoClub = "mendoza.oficial@clubute.ec";
console.log(`Cláusula ajustada: $${contratoMendoza.clausula}`);

// PRUEBA DE BLOQUEO ANTE VALORES ERRÓNEOS
try {
  contratoMendoza.clausula = -100000;
} catch (e) {
  console.log(`Filtro de Liga (Error): ${(e as Error).message}`);
}

try {
  contratoMendoza.correoClub = "correosinformatofederativo";
} catch (e) {
  console.log(`Filtro de Liga (Error): ${(e as Error).message}`);
}