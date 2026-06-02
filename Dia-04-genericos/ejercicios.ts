/**
 * Día 04 — Genéricos y Utility Types
 * ====================================
 * Completa los ejercicios a continuación.
 * Conceptos: generic functions, múltiples type parameters, constraints,
 * generic interfaces, keyof, utility types, mapped types, template literal types.
 *
 * Para verificar: npx ts-node Dia-04-genericos/ejercicios.ts
 */

// ─── 1. Generic Function ────────────────────────────────────────────────────
// Crea una función primera<T> que retorne el primer elemento de un array o undefined

// function primera<T>(arr: T[]): T | undefined { }

// ─── 2. Múltiples type parameters ───────────────────────────────────────────
// Crea una función pareja<T, U> que devuelva una tupla [T, U]

// function pareja<T, U>(a: T, b: U): [T, U] { }

// ─── 3. Generic Constraints ─────────────────────────────────────────────────
// Crea una función mostrarLongitud<T extends { length: number }>(item: T): number

// function mostrarLongitud<T extends { length: number }>(item: T): number { }

// ─── 4. Generic Interface ───────────────────────────────────────────────────
// Define una interface ApiResponse<T> con datos: T y error: string | null

// interface ApiResponse<T> { datos: T; error: string | null; }

// ─── 5. keyof Constraints ───────────────────────────────────────────────────
// Función getPropiedad<T, K extends keyof T>(obj: T, key: K): T[K]

// function getPropiedad<T, K extends keyof T>(obj: T, key: K): T[K] { }

// ─── 6. Utility Types ───────────────────────────────────────────────────────
// Declara una interface Usuario y usa Partial<T>, Pick<T, K>, Omit<T, K>, Record<K, V>

// interface Usuario { id: number; nombre: string; email: string; }
// type UsuarioParcial = Partial<Usuario>;
// type SoloNombre = Pick<Usuario, "nombre" | "email">;
// type SinEmail = Omit<Usuario, "email">;
// type DiccionarioUsuarios = Record<string, Usuario>;

// ─── 7. Mapped Types ────────────────────────────────────────────────────────
// Crea un mapped type Opcional<T> que haga todas las propiedades opcionales

// type Opcional<T> = { [K in keyof T]?: T[K] };

// ─── 8. Template Literal Types ──────────────────────────────────────────────
// Crea un type Handler que genere `on${Capitalize<Evento>}` para eventos

// type Evento = "click" | "focus" | "blur";
// type Handler = `on${Capitalize<Evento>}`;

// ====================================================================
// 🧠 Tu turno — Práctica libre
// ====================================================================

// Crea un tipo Nullable<T> usando mapped types.
// Crea un tipo soloLectura usando Readonly con mapped types anidados.
