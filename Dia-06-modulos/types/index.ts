/**
 * Día 06 — Tipos y utilidades compartidas
 * =========================================
 */

// ─── Interfaces ─────────────────────────────────────────────────────────────

export interface UsuarioComp {
  id: number;
  nombre: string;
  email: string;
}

export interface RespuestaAPI<T = unknown> {
  exito: boolean;
  datos?: T;
  error?: string;
}

// ─── Funciones ──────────────────────────────────────────────────────────────

export function sumar(a: number, b: number): number {
  return a + b;
}

export function restar(a: number, b: number): number {
  return a - b;
}

export const PI = 3.1415926535;

// ─── Re-exports (barrel) ───────────────────────────────────────────────────

export type { UsuarioComp as Usuario };
