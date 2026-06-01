/**
 * Día 07 — Proyecto Final: Types
 * ================================
 */

export interface Geo {
  lat: string;
  lng: string;
}

export interface Direccion {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

export interface Compania {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface Usuario {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Direccion;
  phone: string;
  website: string;
  company: Compania;
}

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface PostConUsuario extends Post {
  userName: string;
}

export type AccionMenu = "usuarios" | "posts" | "top" | "salir";

export enum Color {
  Reset = "\x1b[0m",
  Rojo = "\x1b[31m",
  Verde = "\x1b[32m",
  Amarillo = "\x1b[33m",
  Azul = "\x1b[34m",
  Cyan = "\x1b[36m",
}

export function colorizar(texto: string, color: Color): string {
  return `${color}${texto}${Color.Reset}`;
}
