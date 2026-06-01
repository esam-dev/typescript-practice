/**
 * Día 05 — Clases, Enums y Async
 * ================================
 */

// ─── Ejercicio 1: Clase con shorthand constructor ──────────────────────────
// Crea una clase Producto con id (readonly), nombre y precio

class Producto {
  constructor(
    public readonly id: number,
    public nombre: string,
    public precio: number
  ) {}
}

const prod = new Producto(1, "Laptop", 1200);
console.log("Ejercicio 1:", prod);

// ─── Ejercicio 2: Access Modifiers ─────────────────────────────────────────
// Crea una clase CuentaBancaria con saldo privado y métodos públicos

class CuentaBancaria {
  private _saldo: number;

  constructor(titular: string, saldoInicial: number = 0) {
    this._saldo = saldoInicial;
  }

  depositar(monto: number): void {
    if (monto > 0) this._saldo += monto;
  }

  retirar(monto: number): boolean {
    if (monto > 0 && monto <= this._saldo) {
      this._saldo -= monto;
      return true;
    }
    return false;
  }

  get saldo(): number {
    return this._saldo;
  }
}

const cuenta = new CuentaBancaria("Ana", 1000);
cuenta.depositar(500);
console.log("Ejercicio 2:", cuenta.saldo);
cuenta.retirar(200);
console.log("Ejercicio 2:", cuenta.saldo);

// ─── Ejercicio 3: Enum ─────────────────────────────────────────────────────
// Define un enum EstadoPedido con Pendiente, Enviado, Entregado, Cancelado

enum EstadoPedido {
  Pendiente = "PENDIENTE",
  Enviado = "ENVIADO",
  Entregado = "ENTREGADO",
  Cancelado = "CANCELADO",
}

function mostrarEstado(estado: EstadoPedido): string {
  return `El pedido está ${estado}`;
}

console.log("Ejercicio 3:", mostrarEstado(EstadoPedido.Enviado));

// ─── Ejercicio 4: Async con Promise<string> ─────────────────────────────────
// Simula una llamada a API con setTimeout

function simularAPI(exito: boolean): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (exito) resolve("Datos recibidos");
      else reject(new Error("Error de red"));
    }, 100);
  });
}

simularAPI(true).then(console.log).catch(console.error);
simularAPI(false).then(console.log).catch(() => console.log("Ejercicio 4: Error manejado"));

// ─── Ejercicio 5: Async/Await ──────────────────────────────────────────────
// Usa async/await con la función simularAPI

async function obtenerDatos(): Promise<string> {
  try {
    const resultado = await simularAPI(true);
    return `Resultado: ${resultado}`;
  } catch (error: unknown) {
    if (error instanceof Error) return `Error: ${error.message}`;
    return "Error desconocido";
  }
}

obtenerDatos().then(console.log);

// ─── Ejercicio 6: Fetch tipado ─────────────────────────────────────────────
// Tipa la respuesta de fetch para JSONPlaceholder

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

async function obtenerTodo(id: number): Promise<Todo> {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
}

obtenerTodo(1).then(todo => console.log("Ejercicio 6:", todo));

// ─── Ejercicio 7: Abstract class ───────────────────────────────────────────
// Crea una clase abstracta Animal con método abstracto hacerSonido

abstract class Animal {
  constructor(public nombre: string) {}
  abstract hacerSonido(): string;
}

class Perro extends Animal {
  hacerSonido(): string {
    return "¡Guau!";
  }
}

class Gato extends Animal {
  hacerSonido(): string {
    return "¡Miau!";
  }
}

const perro = new Perro("Max");
const gato = new Gato("Luna");
console.log("Ejercicio 7:", perro.hacerSonido(), gato.hacerSonido());

// ─── Ejercicio 8: Manejo de errores con unknown ────────────────────────────
// Función segura que procesa JSON

function procesarJSON(texto: string): { exito: boolean; datos?: unknown; error?: string } {
  try {
    const datos = JSON.parse(texto);
    return { exito: true, datos };
  } catch (error: unknown) {
    if (error instanceof Error) {
      return { exito: false, error: error.message };
    }
    return { exito: false, error: "Error desconocido al parsear JSON" };
  }
}

console.log("Ejercicio 8:", procesarJSON('{"ok": true}'));
console.log("Ejercicio 8:", procesarJSON("json inválido"));
