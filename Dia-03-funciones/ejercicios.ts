/**
 * Día 03 — Funciones y Type Narrowing
 * =====================================
 * Completa los ejercicios a continuación.
 * Conceptos: function types, parámetros opcionales, rest parameters,
 * function overloads, type narrowing (typeof, instanceof, discriminated unions,
 * type predicates), this en funciones.
 *
 * Para verificar: npx ts-node Dia-03-funciones/ejercicios.ts
 */

// ─── 1. Function Types ──────────────────────────────────────────────────────
// Define un type 'Operacion' y crea funciones de suma, resta y multiplicación

// type Operacion = (a: number, b: number) => number;

// ─── 2. Parámetros opcionales y por defecto ─────────────────────────────────
// Crea una función saludar con nombre obligatorio y saludo opcional

// function saludar(nombre: string, saludo?: string): string { }

// ─── 3. Rest Parameters ─────────────────────────────────────────────────────
// Crea una función sumarTodos que acepte múltiples números

// function sumarTodos(...numeros: number[]): number { }

// ─── 4. Function Overloads ──────────────────────────────────────────────────
// Crea una función procesar con sobrecarga para string[] y number[]

// function procesar(valor: string): string[];
// function procesar(valor: number): number[];
// function procesar(valor: string | number): string[] | number[] { }

// ─── 5. typeof narrowing ────────────────────────────────────────────────────
// Función duplicar que use typeof para string | number

// function duplicar(valor: string | number): string | number { }

// ─── 6. instanceof narrowing ────────────────────────────────────────────────
// Clases Perro y Gato, función sonido que use instanceof

// class Perro { ladrar() { console.log("Guau"); } }
// class Gato { maullar() { console.log("Miau"); } }
// function sonido(animal: Perro | Gato): void { }

// ─── 7. Discriminated Union narrowing ───────────────────────────────────────
// Type Figura con "circulo" | "rectangulo". Función area que discrimine por tipo

// type Figura = { tipo: "circulo"; radio: number } | { tipo: "rectangulo"; ancho: number; alto: number };
// function area(figura: Figura): number { }

// ─── 8. Type Predicates ─────────────────────────────────────────────────────
// Type predicate esPez que verifique si un animal tiene método "nadar"

// interface Pez { nadar: () => void }
// interface Ave { volar: () => void }
// function esPez(animal: Pez | Ave): animal is Pez { }

// ====================================================================
// 🧠 Tu turno — Práctica libre
// ====================================================================

// Crea una interface Boton con onClick que tipee `this: HTMLElement`.
// Implementa un objeto botón con texto y onClick.
