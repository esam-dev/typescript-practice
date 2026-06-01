/**
 * Día 04 — Genéricos y Utility Types
 * ====================================
 */

// ─── Ejercicio 1: Generic básico ────────────────────────────────────────────
// Crea una función genérica que retorne el último elemento de un array

function ultimo<T>(arr: T[]): T | undefined {
  return arr[arr.length - 1];
}

console.log("Ejercicio 1:", ultimo([1, 2, 3]), ultimo(["a", "b", "c"]));

// ─── Ejercicio 2: Generic con constraint ─────────────────────────────────────
// Crea una función que acceda a .length solo si el tipo lo tiene

function longitud<T extends { length: number }>(item: T): number {
  return item.length;
}

console.log("Ejercicio 2:", longitud("TypeScript"), longitud([1, 2, 3, 4]));

// ─── Ejercicio 3: Generic interface ─────────────────────────────────────────
// Define una interface genérica 'Resultado<T>' que pueda ser éxito o error

interface Resultado<T> {
  exito: boolean;
  datos?: T;
  error?: string;
}

function exito<T>(datos: T): Resultado<T> {
  return { exito: true, datos };
}

function fallo<T>(error: string): Resultado<T> {
  return { exito: false, error };
}

console.log("Ejercicio 3:", exito("OK"), fallo("Algo salió mal"));

// ─── Ejercicio 4: keyof constraint ──────────────────────────────────────────
// Crea una función que actualice una propiedad de un objeto

function actualizarPropiedad<T, K extends keyof T>(obj: T, key: K, valor: T[K]): T {
  return { ...obj, [key]: valor };
}

const user = { nombre: "Ana", edad: 30 };
console.log("Ejercicio 4:", actualizarPropiedad(user, "edad", 31));

// ─── Ejercicio 5: Utility Types ─────────────────────────────────────────────
// Usa Partial, Pick, Omit y Record con esta interface

interface Empleado {
  id: number;
  nombre: string;
  puesto: string;
  salario: number;
}

// Crea un type para actualización parcial
type EmpleadoUpdate = Partial<Empleado>;
const actualizacion: EmpleadoUpdate = { puesto: "Senior" };
console.log("Ejercicio 5a:", actualizacion);

// Crea un type solo con nombre y puesto
type EmpleadoResumen = Pick<Empleado, "nombre" | "puesto">;
const resumen: EmpleadoResumen = { nombre: "Luis", puesto: "Dev" };
console.log("Ejercicio 5b:", resumen);

// Crea un Record de empleados por ID
type EmpleadosPorId = Record<number, Empleado>;
const empleados: EmpleadosPorId = {
  1: { id: 1, nombre: "Ana", puesto: "Dev", salario: 50000 },
};
console.log("Ejercicio 5c:", empleados);

// ─── Ejercicio 6: ReturnType ────────────────────────────────────────────────
// Extrae el tipo de retorno de una función usando ReturnType

function crearUsuario(nombre: string, edad: number) {
  return { nombre, edad, activo: true };
}

type UsuarioCreado = ReturnType<typeof crearUsuario>;
const nuevo: UsuarioCreado = { nombre: "Carlos", edad: 28, activo: true };
console.log("Ejercicio 6:", nuevo);

// ─── Ejercicio 7: Mapped type ───────────────────────────────────────────────
// Crea un mapped type que haga todas las propiedades opcionales y nullables

type OpcionalNullable<T> = {
  [K in keyof T]: T[K] | null;
};

interface Config {
  host: string;
  port: number;
}

type ConfigFlexible = OpcionalNullable<Config>;
const cfg: ConfigFlexible = { host: null, port: 3000 };
console.log("Ejercicio 7:", cfg);

// ─── Ejercicio 8: Múltiples type parameters ─────────────────────────────────
// Función que combina dos objetos en uno

function combinar<T, U>(a: T, b: U): T & U {
  return { ...a, ...b };
}

const combinado = combinar({ nombre: "Ana" }, { edad: 30 });
console.log("Ejercicio 8:", combinado);
