/**
 * Día 05 — Clases, Enums y Async
 * ================================
 * Completa los ejercicios a continuación.
 * Conceptos: access modifiers, shorthand constructor, implements,
 * abstract classes, enums, Promise<T>, async/await, fetch con tipado,
 * manejo de errores con unknown.
 *
 * Para verificar: npx ts-node Dia-05-async/ejercicios.ts
 */

// ─── 1. Access Modifiers ────────────────────────────────────────────────────
// Crea una clase Persona con nombre (public), documento (private), edad (protected)

// class Persona { }

// ─── 2. Shorthand Constructor ────────────────────────────────────────────────
// Crea una clase Usuario con parameter properties

// class Usuario { constructor(public readonly id: number, public nombre: string, private password: string) {} }

// ─── 3. implements ──────────────────────────────────────────────────────────
// Define interface IEmpleado y clase Empleado que la implemente

// interface IEmpleado { nombre: string; trabajar(): void; }
// class Empleado implements IEmpleado { }

// ─── 4. Abstract Classes ────────────────────────────────────────────────────
// Clase abstracta Forma con método abstracto calcularArea(). Clase Circulo que extienda

// abstract class Forma { abstract calcularArea(): number; }
// class Circulo extends Forma { }

// ─── 5. Enums ───────────────────────────────────────────────────────────────
// Crea un enum Direccion con valores string y un enum StatusCode con valores numéricos

// enum Direccion { Norte = "NORTE", Sur = "SUR", Este = "ESTE", Oeste = "OESTE" }
// enum StatusCode { OK = 200, NotFound = 404, Error = 500 }

// ─── 6. Promise<T> ──────────────────────────────────────────────────────────
// Crea una promesa tipada Promise<string> que resuelva con un mensaje

// const promesa: Promise<string> = new Promise((resolve) => { });

// ─── 7. Async/Await con Fetch tipado ────────────────────────────────────────
// Define interface Post y función async obtenerPosts(): Promise<Post[]>
// Usa fetch con tipado y verifica res.ok

// interface Post { userId: number; id: number; title: string; body: string; }
// async function obtenerPosts(): Promise<Post[]> { }

// ─── 8. Manejo de errores ───────────────────────────────────────────────────
// Función async ejecutar que llame a obtenerPosts y maneje errores con try/catch + unknown

// async function ejecutar(): Promise<void> { }

// ====================================================================
// 🧠 Tu turno — Práctica libre
// ====================================================================

// Crea una clase abstracta Figura con color (public) y un método abstracto dibujar().
// Implementa Circulo y Rectangulo. Crea una función que acepte Figura[] y los dibuje.
