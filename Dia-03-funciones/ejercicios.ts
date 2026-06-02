/**
 * Día 03 — Funciones y Type Narrowing
 * =====================================
 * Completa los ejercicios a continuación.
 * Para verificar: npx ts-node Dia-03-funciones/ejercicios.ts
 */

// ─── Ejercicio 1: Function Types ────────────────────────────────────────────
// Declara un type 'Operacion' para funciones (a: number, b: number) => number
// Crea una implementación de suma, resta y multiplicación

// type Operacion = (a: number, b: number) => number;

// ─── Ejercicio 2: Parámetros opcionales y por defecto ──────────────────────
// Crea una función saludar(nombre: string, saludo?: string): string

// function saludar(nombre: string, saludo?: string): string { }

// ─── Ejercicio 3: Rest Parameters ───────────────────────────────────────────
// Crea una función sumarTodos que acepte ...numeros: number[]

// function sumarTodos(...numeros: number[]): number { }

// ─── Ejercicio 4: Function Overloads ────────────────────────────────────────
// Crea una función procesar con sobrecarga para string y number

// function procesar(valor: string): string[];
// function procesar(valor: number): number[];
// function procesar(valor: string | number): string[] | number[] { }

// ─── Ejercicio 5: typeof narrowing ─────────────────────────────────────────
// Crea una función duplicar que use typeof para string | number

// function duplicar(valor: string | number): string | number { }

// ─── Ejercicio 6: instanceof narrowing ──────────────────────────────────────
// Usa instanceof para diferenciar clases Perro y Gato

// class Perro { ladrar() {} }
// class Gato { maullar() {} }
// function sonido(animal: Perro | Gato): void { }

// ─── Ejercicio 7: Discriminated Unions ──────────────────────────────────────
// Modela Figura con tipo "circulo" | "rectangulo" y calcula área

// type Figura = { tipo: "circulo"; radio: number } | { tipo: "rectangulo"; ancho: number; alto: number };
// function area(figura: Figura): number { }

// ─── Ejercicio 8: Type Predicates ───────────────────────────────────────────
// Crea un type predicate 'esPez' que verifique si tiene método 'nadar'

// interface Pez { nadar: () => void }
// interface Ave { volar: () => void }
// function esPez(animal: Pez | Ave): animal is Pez { }

// ====================================================================
// 🧠 Tu turno — Escribe tu código aquí
// ====================================================================

// ─── Práctica 1: Callback tipada ────────────────────────────────────
// Crea un type Callback<T> = (data: T) => void.
// Función procesarDatos<T>(data: T, cb: Callback<T>): void.

// ─── Práctica 2: Overloads con más firmas ───────────────────────────
// Función convertir:
// - (valor: boolean): "Si" | "No"
// - (valor: number): string en binario
// - (valor: string): number (length)

// ─── Práctica 3: never en exhaustiveness ────────────────────────────
// Función assertNever(valor: never): never.
// Úsala en un switch exhaustivo para TipoAccion.

// ─── Práctica 4: this typing ────────────────────────────────────────
// Interface Botón con onClick tipando this.
// Crea un objeto botón y simula un click.
