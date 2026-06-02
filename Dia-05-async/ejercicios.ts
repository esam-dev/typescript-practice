/**
 * Día 05 — Clases, Enums y Async
 * ================================
 * Completa los ejercicios a continuación.
 * Para verificar: npx ts-node Dia-05-async/ejercicios.ts
 */

// ─── Ejercicio 1: Clase con Access Modifiers ────────────────────────────────
// Crea una clase Persona con nombre (public), documento (private), edad (protected)

// class Persona { }

// ─── Ejercicio 2: Shorthand constructor ─────────────────────────────────────
// Crea una clase Usuario usando parameter properties (public readonly id, public nombre, private password)

// class Usuario { }

// ─── Ejercicio 3: implements ────────────────────────────────────────────────
// Crea una interface IEmpleado y una clase Empleado que la implemente

// interface IEmpleado { }
// class Empleado implements IEmpleado { }

// ─── Ejercicio 4: Abstract classes ──────────────────────────────────────────
// Crea una clase abstracta Forma con un método abstracto calcularArea()

// abstract class Forma { }

// ─── Ejercicio 5: Enums ─────────────────────────────────────────────────────
// Crea un enum Direccion con Norte, Sur, Este, Oeste y asigna valores string

// enum Direccion { }

// ─── Ejercicio 6: Promise<T> ────────────────────────────────────────────────
// Crea una promesa tipada que resuelva un string

// const promesa: Promise<string> = new Promise((resolve) => { });

// ─── Ejercicio 7: Async / Await ─────────────────────────────────────────────
// Crea una función async obtenerDatos(): Promise<number> que use fetch

// async function obtenerDatos(): Promise<number> { }

// ─── Ejercicio 8: Manejo de errores con unknown ─────────────────────────────
// Crea una función async ejecutar que maneje errores con unknown

// async function ejecutar(): Promise<void> { }

// ====================================================================
// 🧠 Tu turno — Escribe tu código aquí
// ====================================================================

// ─── Práctica 1: Clase genérica ────────────────────────────────────
// Crea una clase Stack<T> con push, pop, peek, y isEmpty.

// ─── Práctica 2: Enum con método helper ────────────────────────────
// Crea un enum StatusCode (OK=200, NotFound=404, Error=500).
// Función describirCodigo(codigo: StatusCode): string.

// ─── Práctica 3: Fetch con tipado y timeout ───────────────────────
// Función fetchConTimeout<T>(url: string, ms: number): Promise<T>.
// Usa Promise.race con un setTimeout.

// ─── Práctica 4: Async generator ───────────────────────────────────
// Crea un async function* generadorPaginado(url: string): AsyncGenerator.
// Que haga fetch página por página hasta que no haya más datos.

// ─── Práctica 5: Singleton con clase ──────────────────────────────
// Crea una clase Configuracion como singleton usando constructor privado.
