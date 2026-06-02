/**
 * Día 01 — Primitivos y Entorno
 * ===============================
 * Completa los ejercicios a continuación.
 * Para verificar: npx ts-node Dia-01-primitivos/ejercicios.ts
 */

// ─── Ejercicio 1: Anotaciones básicas ───────────────────────────────────────
// Asigna el tipo correcto a cada variable

// let usuario: string = "Carlos";

// ─── Ejercicio 2: Type Inference ────────────────────────────────────────────
// ¿Qué tipos infiere TypeScript? Escribe el tipo en el comentario

// let ciudad = "Madrid";     // type: ______

// ─── Ejercicio 3: Union types ───────────────────────────────────────────────
// Declara una variable que pueda ser string o number

// let id: string | number = "ABC-123";

// ─── Ejercicio 4: Literal types ─────────────────────────────────────────────
// Crea un type alias 'Color' que solo permita "rojo", "verde" o "azul"

// type Color = "rojo" | "verde" | "azul";

// ─── Ejercicio 5: unknown vs any ────────────────────────────────────────────
// Transforma este código para usar 'unknown' de forma segura

// function procesar(valor: unknown): string { }

// ─── Ejercicio 6: never ─────────────────────────────────────────────────────
// Escribe una función que lance un error y tenga tipo de retorno 'never'

// function errorFatal(mensaje: string): never { }

// ─── Ejercicio 7: strictNullChecks ──────────────────────────────────────────
// Corrige el error de null safety

// function saludar(nombre: string | null): string { }

// ─── Ejercicio 8: typeof guard ──────────────────────────────────────────────
// Usa typeof para procesar diferentes tipos

// function duplicar(valor: string | number): string | number { }

// ====================================================================
// 🧠 Tu turno — Escribe tu código aquí
// ====================================================================

// ─── Práctica 1: Anotaciones explícitas ─────────────────────────────
// Declara variables: nombreLibro (string), añoPublicacion (number),
// disponible (boolean), etiqueta (string | null). Asígnales valores.

// ─── Práctica 2: Type Alias con literales ───────────────────────────
// Crea un type DiaSemana con los 7 días de la semana (literal union).
// Declara una variable hoy de ese tipo y asígnale "viernes".

// ─── Práctica 3: unknown de forma segura ────────────────────────────
// Función procesarValor(valor: unknown): string
// string → minúsculas | number → el doble como string | boolean → "verdadero"/"falso"

// ─── Práctica 4: Función never ──────────────────────────────────────
// Escribe una función bucleInfinito(): never con un while(true).

// ─── Práctica 5: strictNullChecks ────────────────────────────────────
// Función longitudSegura(texto: string | null): number
// Retorna texto.length o 0 si es null.
