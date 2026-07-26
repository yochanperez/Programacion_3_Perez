// === EL PROBLEMA DE REPETIR ESTRUCTURAS EN PLANILLA ===
function mostrarFutbolistaFalso(j: { apellido: string; edad: number; xG: number }): void { }
function guardarFutbolistaFalso(j: { apellido: string; edad: number; xG: number }): void { }


// === TYPE ALIAS PARA OBJETOS ANALÍTICOS ===
type Futbolista = {
  apellido: string;
  edad:   number;
  email:  string;
};

function mostrarFutbolista(j: Futbolista): void {
  console.log(`${j.apellido} (${j.edad} años) — ${j.email}`);
}

function validarFicha(j: Futbolista): boolean {
  return j.apellido.length > 0 && j.email.includes("@");
}

const mendoza: Futbolista = {
  apellido: "Mendoza",
  edad:   20,
  email:  "mendoza@club.com"
};

mostrarFutbolista(mendoza);
console.log(`¿Válido? ${validarFicha(mendoza)}`);


// === ALIAS PRIMITIVOS Y UNION TYPES (REGLAMENTO TÁCTICO) ===
type Apellido = string;
type Dorsal   = number;

type RolTactico = "portero" | "defensa" | "mediocampista" | "delantero";
type EstadoFisico = "disponible" | "lesionado" | "suspendido";
type MetricaGoles = number | string | null;

type ListaConvocados = string[];

const miAtacante: Apellido = "Silva";
const miRol: RolTactico = "delantero";
const estatus: EstadoFisico = "disponible";

console.log(`${miAtacante} — Puesto: ${miRol} — Estado: ${estatus}`);

function esBloqueOfensivo(rol: RolTactico): boolean {
  return rol === "mediocampista" | rol === "delantero";
}

console.log(esBloqueOfensivo("delantero"));   
console.log(esBloqueOfensivo("portero"));  


// === INTERFACE BÁSICA PARA GESTIÓN DE CLUBES ===
interface Fichaje {
  id:        number;
  nombre:    string;
  costo:     number;
  clausula:  number;
  categoria: string;
}

function mostrarFichaje(f: Fichaje): void {
  console.log(`[${f.id}] ${f.nombre} — $${f.costo} (Cláusula: $${f.clausula})`);
}

function tieneClausulaAlta(f: Fichaje): boolean {
  return f.clausula > 1000000;
}

const canterano: Fichaje = {
  id:        1,
  nombre:    "Silva Central",
  costo:     50000,
  clausula:  1500000,
  categoria: "Cantera UTE"
};

mostrarFichaje(canterano);
console.log(`¿Cláusula élite?: ${tieneClausulaAlta(canterano)}`);