/**
 * Día 06 — Módulos y Configuración
 * ==================================
 */

// ─── Ejercicio 1: Import de tipos ──────────────────────────────────────────
// Importa la interface UsuarioComp from './types'

import type { UsuarioComp } from "./types/index.js";

function mostrarUsuario(usuario: UsuarioComp): string {
  return `${usuario.nombre} (${usuario.email})`;
}

// ─── Ejercicio 2: Export de funciones y variables ─────────────────────────
// Exporta e importa funciones desde types

import { sumar, restar, PI } from "./types/index.js";

console.log("Ejercicio 2:", sumar(10, 5), restar(10, 5), PI);

// ─── Ejercicio 3: Re-export ────────────────────────────────────────────────
// Crea un barrel export desde types/index.ts que re-exporte todo

// ─── Ejercicio 4: Manejo de errores con unknown ────────────────────────────
// Función que procesa datos parseando JSON de forma segura

function parsearSeguro(texto: string): { ok: boolean; datos?: unknown } {
  try {
    const datos = JSON.parse(texto);
    return { ok: true, datos };
  } catch (error: unknown) {
    if (error instanceof SyntaxError) {
      return { ok: false };
    }
    throw error; // Errores inesperados se relanzan
  }
}

console.log("Ejercicio 4:", parsearSeguro('{"a":1}'), parsearSeguro("{"));

// ─── Ejercicio 5: Type-only import ─────────────────────────────────────────
// Usa import type para importar solo tipos (no afecta el runtime)

import type { RespuestaAPI } from "./types/index.js";

function procesarRespuesta(resp: RespuestaAPI): void {
  console.log("Ejercicio 5:", resp);
}

// ─── Ejercicio 6: Módulos con NodeNext ─────────────────────────────────────
// Usa extensión .js en imports (requerido con module: NodeNext)

// ─── Ejercicio 7: Declaración de módulos ───────────────────────────────────
// Declara un módulo para una librería sin tipos

// ─── Ejercicio 8: Import dinámico ──────────────────────────────────────────
// Usa import() dinámico para cargar un módulo condicionalmente

async function cargarModulo(nombre: string): Promise<void> {
  if (nombre === "types") {
    const modulo = await import("./types/index.js");
    console.log("Ejercicio 8:", modulo.sumar(40, 2));
  }
}

cargarModulo("types");

// ─── Ejercicio complementario ──────────────────────────────────────────────
// Descomenta la línea de abajo y ejecuta mostrarUsuario

const usuarioEjemplo: UsuarioComp = {
  id: 1,
  nombre: "Ana García",
  email: "ana@mail.com",
};
console.log("Ejercicio 1:", mostrarUsuario(usuarioEjemplo));

// ====================================================================
// 🧠 Tu turno — Escribe tu código aquí
// ====================================================================

// ─── Práctica 1: Import nombrado ────────────────────────────────────
// Importa `restar` desde "./types/index.js" y úsala: restar(100, 37).

// ─── Práctica 2: Exportar tu propia función ─────────────────────────
// En types/index.ts agrega una función multiplicar(a, b): number.
// Impórtala aquí y úsala.

// ─── Práctica 3: Type-only import ───────────────────────────────────
// Cambia el import de UsuarioComp (línea 9) a `import type`.
// Declara una variable UsuarioComp con datos reales.

// ─── Práctica 4: Import dinámico ────────────────────────────────────
// Función asíncrona que haga await import("./types/index.js")
// y llame a sumar(5, 7) mostrando el resultado.

// ─── Práctica 5: Declaración de módulo ──────────────────────────────
// Crea un declare module "mi-libreria" con función saludar y constante version.
