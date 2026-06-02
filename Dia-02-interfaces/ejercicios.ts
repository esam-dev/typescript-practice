/**
 * Día 02 — Objetos y Modelado de Tipos
 * ======================================
 * Completa los ejercicios a continuación.
 * Conceptos: interfaces, extends, arrays, tuplas, index signatures,
 * readonly, intersecciones, uniones discriminadas, satisfies.
 *
 * Para verificar: npx ts-node Dia-02-interfaces/ejercicios.ts
 */

// ─── 1. Interface básica ────────────────────────────────────────────────────
// Define una interface 'Producto' con nombre, precio, y categoria opcional

// interface Producto { }

// ─── 2. Interface con extends ───────────────────────────────────────────────
// Define interface Animal con nombre. Luego Perro extends Animal y agrega raza

// interface Animal { nombre: string; }
// interface Perro extends Animal { raza: string; }

// ─── 3. Arrays y Tuplas ─────────────────────────────────────────────────────
// Declara un array de números y una tupla [string, number]

// let numeros: number[] = [ ];
// let tupla: [string, number] = [" ", 0];

// ─── 4. Index Signature ─────────────────────────────────────────────────────
// Define una interface Diccionario con clave string y valor string

// interface Diccionario { [clave: string]: string; }

// ─── 5. Readonly ────────────────────────────────────────────────────────────
// Define una interface Config con apiUrl readonly y puertos readonly number[]

// interface Config { readonly apiUrl: string; readonly puertos: readonly number[]; }

// ─── 6. Intersección y Unión Discriminada ───────────────────────────────────
// Combina type A y type B con intersección (&)
// Crea una unión discriminada Estado con "cargando" | "exito" | "error"

// type A = { a: string };
// type B = { b: number };
// type C = A & B;
// type Estado = { estado: "cargando" } | { estado: "exito"; datos: string } | { estado: "error"; mensaje: string };

// ─── 7. satisfies ───────────────────────────────────────────────────────────
// Usa satisfies para verificar un objeto de colores RGB

// type Colores = Record<string, string>;
// const colores = { rojo: "#ff0000", verde: "#00ff00" } satisfies Colores;

// ====================================================================
// 🧠 Tu turno — Práctica libre
// ====================================================================

// Crea una interface Libro con titulo, autor, año (opcional) y isbn (readonly).
// Crea dos objetos Libro y un array de Libros.
// Usa una unión discriminada para modelar el resultado de una búsqueda.
