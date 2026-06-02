/**
 * Día 07 — Proyecto Final: API Client
 * =====================================
 * Implementa el cliente tipado para consumir la API REST de JSONPlaceholder.
 *
 * 1. Define BASE_URL = "https://jsonplaceholder.typicode.com"
 * 2. Crea una clase ApiError que extienda Error con status: number
 * 3. Crea una función genérica fetchJSON<T>(endpoint): Promise<T>
 *    - Usa fetch, verifica res.ok, lanza ApiError si falla
 *    - Retorna res.json() como Promise<T>
 * 4. Crea funciones:
 *    - obtenerUsuarios(): Promise<Usuario[]>
 *    - obtenerPosts(userId?: number): Promise<Post[]>
 */

// ─── Configuración ──────────────────────────────────────────────────────────
// const BASE_URL = "https://jsonplaceholder.typicode.com";

// ─── Clase de error personalizada ───────────────────────────────────────────
// class ApiError extends Error { }

// ─── Función genérica fetchJSON<T> ──────────────────────────────────────────
// async function fetchJSON<T>(endpoint: string): Promise<T> { }

// ─── Funciones del API ──────────────────────────────────────────────────────
// export async function obtenerUsuarios(): Promise<Usuario[]> { }
// export async function obtenerPosts(userId?: number): Promise<Post[]> { }
