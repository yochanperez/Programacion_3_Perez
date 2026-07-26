// === CREACIÓN DE UN JUGADOR COMO OBJETO LITERAL ===
const futbolista = {
  apellido: "Mendoza",
  edad: 20,
  habilitado: true
};

// === ACCESO A PROPIEDADES - NOTACIÓN DE PUNTO ===
console.log(futbolista.apellido);
console.log(futbolista.edad);

// === ACCESO CON CORCHETES (MÉTRICAS DINÁMICAS) ===
console.log(futbolista["apellido"]);
const propiedadDinamica = "edad";
console.log(futbolista[propiedadDinamica]);

// === PROPIEDAD NO INDEXADA ===
console.log(futbolista.telefonoRepresentante);

// === ASIGNACIÓN POSTERIOR DE PROPIEDADES ===
futbolista.clubActual = "Universidad UTE";
console.log(futbolista.clubActual);

// === ELIMINACIÓN DE PROPIEDADES EN PLANILLA ===
delete futbolista.habilitado;
console.log(futbolista.habilitado);

// === OBJETO CON MÉTODOS TÁCTICOS ===
const motorRendimiento = {
  sumarGoles(a, b) {
    return a + b;
  },

  restarGoles(a, b) {
    return a - b;
  },

  calcularXG: (tiros, factor) => tiros * factor
};

console.log(motorRendimiento.sumarGoles(3, 4));
console.log(motorRendimiento.restarGoles(10, 3));
console.log(motorRendimiento.calcularXG(2, 0.5));

// === USO Y RESTRICCIONES DEL CONTEXTO THIS ===
const fichaPerfil = {
  apellido: "Silva",
  edad: 24,

  presentarFicha() {
    return `Scouting: Futbolista ${this.apellido}, Edad: ${this.edad} años.`;
  },

  cumplirAnioMicrociclo() {
    this.edad++;
    return `Actualización: ${this.apellido} avanza en el proceso. Nueva edad: ${this.edad}.`;
  },

  presentarFichaArrow: () => {
    return `Scouting: Futbolista ${this.apellido}`;
  }
};

console.log(fichaPerfil.presentarFicha());
console.log(fichaPerfil.cumplirAnioMicrociclo());
console.log(fichaPerfil.presentarFichaArrow());