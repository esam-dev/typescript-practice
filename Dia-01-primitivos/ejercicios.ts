/**
 * Día 01 — Primitivos y Entorno
 * ===============================
 * Completa los ejercicios a continuación.
 * Conceptos: tipos primitivos, type inference, any/unknown/void/never,
 * strict mode, literal types y type aliases.
 *
 * Para verificar: npx ts-node Dia-01-primitivos/ejercicios.ts
 */

// ─── 1. Tipos primitivos ────────────────────────────────────────────────────
// Declara variables con los tipos: string, number, boolean, null, undefined

// let nombre: string = "Tu nombre";

// ─── 2. Type Inference ──────────────────────────────────────────────────────
// Declara variables sin anotación y escribe en el comentario qué tipo infiere TS

// let ciudad = "Barcelona";  // type: ______

// ─── 3. any vs unknown ──────────────────────────────────────────────────────
// Crea dos variables (any y unknown). Demuestra que unknown requiere validación

// let peligroso: any = "texto";
// let seguro: unknown = "texto";
// Usa typeof para acceder a seguro.toUpperCase() de forma segura

// ─── 4. void vs never ───────────────────────────────────────────────────────
// Crea una función void (sin retorno) y una función never (lanza error)

// function mostrarMensaje(mensaje: string): void { }
// function errorFatal(mensaje: string): never { }

// ─── 5. strictNullChecks ────────────────────────────────────────────────────
// Crea una función que reciba string | null y maneje el caso null

// function saludo(nombre: string | null): string { }

// ─── 6. Literal Types ───────────────────────────────────────────────────────
// Crea un tipo literal 'Direccion' con valores "norte" | "sur" | "este" | "oeste"

// type Direccion = "norte" | "sur" | "este" | "oeste";

// ─── 7. Type Aliases ────────────────────────────────────────────────────────
// Crea un type alias 'Usuario' con propiedades nombre (string) y edad (number)

// type Usuario = { nombre: string; edad: number };

// ====================================================================
// 🧠 Tu turno — Práctica libre
// ====================================================================

// Escribe una función que reciba un valor unknown, valide con typeof y
// devuelva "es string", "es number" o "no es string ni number" según el caso.
// Aplica strictNullChecks manejando correctamente null y undefined.
