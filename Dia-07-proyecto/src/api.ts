/**
 * Día 07 — Proyecto Final: API Client
 * =====================================
 */

import type { Usuario, Post } from "./types";

const BASE_URL = "https://jsonplaceholder.typicode.com";

class ApiError extends Error {
  constructor(
    public status: number,
    mensaje: string
  ) {
    super(mensaje);
    this.name = "ApiError";
  }
}

async function fetchJSON<T>(endpoint: string): Promise<T> {
  const res = await fetch(`${BASE_URL}${endpoint}`);

  if (!res.ok) {
    throw new ApiError(res.status, `HTTP ${res.status}: ${res.statusText}`);
  }

  return res.json() as Promise<T>;
}

export async function obtenerUsuarios(): Promise<Usuario[]> {
  return fetchJSON<Usuario[]>("/users");
}

export async function obtenerPosts(userId?: number): Promise<Post[]> {
  const query = userId ? `?userId=${userId}` : "";
  return fetchJSON<Post[]>(`/posts${query}`);
}
