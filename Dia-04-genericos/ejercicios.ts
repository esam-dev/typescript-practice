/**
 * Día 04 — Genéricos y Utility Types
 * ====================================
 * Completa los ejercicios a continuación.
 * Para verificar: npx ts-node Dia-04-genericos/ejercicios.ts
 */

// ─── Ejercicio 1: Generic Function ──────────────────────────────────────────
// Crea una función primera<T> que retorne el primer elemento de un array

// function primera<T>(arr: T[]): T | undefined { }

// ─── Ejercicio 2: Múltiples type parameters ─────────────────────────────────
// Crea una función pareja<T, U> que devuelva una tupla [T, U]

// function pareja<T, U>(a: T, b: U): [T, U] { }

// ─── Ejercicio 3: Generic Constraints ───────────────────────────────────────
// Crea una función mostrarLongitud<T extends { length: number }>

// function mostrarLongitud<T extends { length: number }>(item: T): number { }

// ─── Ejercicio 4: Generic Interface ─────────────────────────────────────────
// Crea una interface ApiResponse<T> con datos: T y error: string | null

// interface ApiResponse<T> { }

// ─── Ejercicio 5: Generic con keyof ─────────────────────────────────────────
// Crea una función getPropiedad<T, K extends keyof T>(obj: T, key: K): T[K]

// function getPropiedad<T, K extends keyof T>(obj: T, key: K): T[K] { }

// ─── Ejercicio 6: Utility Types ─────────────────────────────────────────────
// Usa Partial, Pick, Omit, Record con una interface Usuario

// interface Usuario { id: number; nombre: string; email: string; }
// type UsuarioParcial = Partial<Usuario>;
// type SoloNombre = Pick<Usuario, "nombre">;

// ─── Ejercicio 7: Mapped Types ──────────────────────────────────────────────
// Crea un mapped type SoloLectura<T> que haga todo readonly

// type SoloLectura<T> = { readonly [K in keyof T]: T[K] };

// ─── Ejercicio 8: Template Literal Types ────────────────────────────────────
// Crea un type Handler que genere `on${Capitalize<Evento>}`

// type Evento = "click" | "focus" | "blur";
// type Handler = `on${Capitalize<Evento>}`;

// ====================================================================
// 🧠 Tu turno — Escribe tu código aquí
// ====================================================================

// ─── Práctica 1: Generic class ──────────────────────────────────────
// Crea una clase Caja<T> con un valor privado y métodos get/set.

// ─── Práctica 2: Utility types combinados ──────────────────────────
// Usa Required<Pick<Usuario, "id" | "nombre">> y Omit<Usuario, "email">.

// ─── Práctica 3: Conditional Types ──────────────────────────────────
// Crea type IsString<T> = T extends string ? "si" : "no".
// Prueba con IsString<string> e IsString<number>.

// ─── Práctica 4: Infer con ReturnType ──────────────────────────────
// Crea un type MiReturnType<T> que extraiga el tipo de retorno usando infer.

// ─── Práctica 5: DeepReadonly ──────────────────────────────────────
// Crea un mapped type recursivo DeepReadonly<T> que haga readonly anidado.
