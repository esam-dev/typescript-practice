/**
 * Día 01 — Primitivos y Entorno
 * ===============================
 * Completa los ejercicios a continuación.
 * Para verificar: npx ts-node Dia-01-primitivos/ejercicios.ts
 */

// ─── Ejercicio 1: Anotaciones básicas ───────────────────────────────────────
// Asigna el tipo correcto a cada variable
let usuario: string = "Carlos";
let puntuacion: number = 100;
let completado: boolean = false;
let datos: null = null;
let pendiente: undefined = undefined;

console.log("Ejercicio 1:", usuario, puntuacion, completado, datos, pendiente);

// ─── Ejercicio 2: Type Inference ────────────────────────────────────────────
// ¿Qué tipos infiere TypeScript? Escribe el tipo en el comentario

let ciudad = "Madrid";     // type: ______
let habitantes = 3_200_000; // type: ______
let capital = true;        // type: ______

console.log("Ejercicio 2:", ciudad, habitantes, capital);

// ─── Ejercicio 3: Union types ───────────────────────────────────────────────
// Declara una variable que pueda ser string o number

let id: string | number = "ABC-123";
id = 456;      // Debe funcionar
// id = true;  // Esto debe dar error

console.log("Ejercicio 3:", id);

// ─── Ejercicio 4: Literal types ─────────────────────────────────────────────
// Crea un type alias 'Color' que solo permita "rojo", "verde" o "azul"

type Color = "rojo" | "verde" | "azul";
let miColor: Color = "rojo";
// miColor = "amarillo"; // Error

console.log("Ejercicio 4:", miColor);

// ─── Ejercicio 5: unknown vs any ────────────────────────────────────────────
// Transforma este código para usar 'unknown' de forma segura

function procesar(valor: unknown): string {
  if (typeof valor === "string") {
    return valor.toUpperCase();
  }
  return "no es string";
}

console.log("Ejercicio 5:", procesar("hola"), procesar(42));

// ─── Ejercicio 6: never ─────────────────────────────────────────────────────
// Escribe una función que lance un error y tenga tipo de retorno 'never'

function errorFatal(mensaje: string): never {
  throw new Error(mensaje);
}

// ─── Ejercicio 7: strictNullChecks ──────────────────────────────────────────
// Corrige el error de null safety

function saludar(nombre: string | null): string {
  if (nombre === null) {
    return "Hola, invitado";
  }
  return `Hola, ${nombre}`;
}

console.log("Ejercicio 7:", saludar(null), saludar("Ana"));

// ─── Ejercicio 8: typeof guard ──────────────────────────────────────────────
// Usa typeof para procesar diferentes tipos

function duplicar(valor: string | number): string | number {
  if (typeof valor === "string") {
    return valor + valor;
  }
  return valor * 2;
}

console.log("Ejercicio 8:", duplicar("Hola"), duplicar(5));
