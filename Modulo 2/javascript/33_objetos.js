// Crear un objeto — llaves {}
const persona = {
  nombre: "Ana",        // clave: "nombre", valor: "Ana"
  edad: 28,             // clave: "edad",   valor: 28
  activo: true          // clave: "activo", valor: true
};

// Acceso a propiedades — notación de punto (preferida)
console.log(persona.nombre);   // "Ana"
console.log(persona.edad);     // 28

// Acceso con corchetes — necesario cuando la clave es dinámica o tiene espacios
console.log(persona["nombre"]);         // "Ana"
const clave = "edad";
console.log(persona[clave]);            // 28

// Propiedad que no existe → undefined (no lanza error)
console.log(persona.telefono);          // undefined

// Añadir propiedades después de crear el objeto
persona.ciudad = "Madrid";
console.log(persona.ciudad);            // "Madrid"

// Eliminar propiedades
delete persona.activo;
console.log(persona.activo);            // undefined



const calculadora = {
  // Forma clásica
  sumar: function(a, b) {
    return a + b;
  },

  // Shorthand de método (ES6) — forma preferida
  restar(a, b) {
    return a - b;
  },

  // Arrow function — ojo con this (lo veremos más adelante)
  multiplicar: (a, b) => a * b
};

console.log(calculadora.sumar(3, 4));        // 7
console.log(calculadora.restar(10, 3));      // 7
console.log(calculadora.multiplicar(2, 5));  // 10

const persona = {
  nombre: "Ana",
  edad: 28,

  // ✅ function o shorthand — this apunta al objeto
  saludar() {
    return `Hola, soy ${this.nombre} y tengo ${this.edad} años.`;
  },

  cumpleaños() {
    this.edad++;   // modifica la propiedad del objeto
    return `¡Feliz cumpleaños, ${this.nombre}! Ahora tienes ${this.edad}.`;
  },

  // ❌ Arrow function — this NO apunta al objeto, apunta al scope externo
  saludarArrow: () => {
    return `Hola, soy ${this.nombre}`;   // this.nombre es undefined
  }
};

console.log(persona.saludar());      // "Hola, soy Ana y tengo 28 años."
console.log(persona.cumpleaños());   // "¡Feliz cumpleaños, Ana! Ahora tienes 29."
console.log(persona.saludarArrow()); // "Hola, soy undefined"