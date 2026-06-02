/**
 * Día 07 — Proyecto Final: Entry Point
 * ======================================
 * Aplicación CLI que consume JSONPlaceholder API.
 * Integra: tipos, genéricos, async/await, manejo de errores, clases, enums.
 */

import { obtenerUsuarios, obtenerPosts } from "./api.js";
import type { Usuario, Post, AccionMenu } from "./types.js";
import { Color, colorizar } from "./types.js";
import * as readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function preguntar(query: string): Promise<string> {
  return new Promise((resolve) => rl.question(query, resolve));
}

function mostrarMenu(): void {
  console.log("\n" + colorizar("=== MENÚ PRINCIPAL ===", Color.Cyan));
  console.log("1. Listar usuarios");
  console.log("2. Ver posts de un usuario");
  console.log("3. Top de usuarios por posts");
  console.log("4. Salir");
}

async function listarUsuarios(): Promise<void> {
  try {
    const usuarios = await obtenerUsuarios();
    console.log(colorizar("\n--- USUARIOS ---", Color.Verde));
    for (const u of usuarios) {
      console.log(`${u.id}. ${u.name} (${u.email}) — ${u.company.name}`);
    }
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(colorizar(`Error: ${error.message}`, Color.Rojo));
    }
  }
}

async function verPosts(): Promise<void> {
  const input = await preguntar("Ingresa el ID del usuario: ");
  const userId = parseInt(input, 10);

  if (isNaN(userId)) {
    console.log(colorizar("ID inválido", Color.Rojo));
    return;
  }

  try {
    const posts = await obtenerPosts(userId);
    if (posts.length === 0) {
      console.log(colorizar("El usuario no tiene posts", Color.Amarillo));
      return;
    }
    console.log(colorizar(`\n--- POSTS (usuario ${userId}) ---`, Color.Verde));
    for (const p of posts) {
      console.log(`\n[#${p.id}] ${colorizar(p.title, Color.Amarillo)}`);
      console.log(`  ${p.body.slice(0, 80)}...`);
    }
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(colorizar(`Error: ${error.message}`, Color.Rojo));
    }
  }
}

async function mostrarTopUsuarios(): Promise<void> {
  try {
    const [usuarios, todosPosts] = await Promise.all([
      obtenerUsuarios(),
      obtenerPosts(),
    ]);

    const conteo = new Map<number, number>();
    for (const p of todosPosts) {
      conteo.set(p.userId, (conteo.get(p.userId) || 0) + 1);
    }

    const mapaUsuario = new Map<number, Usuario>();
    for (const u of usuarios) {
      mapaUsuario.set(u.id, u);
    }

    const ranking = [...conteo.entries()]
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5);

    console.log(colorizar("\n--- TOP 5 USUARIOS CON MÁS POSTS ---", Color.Verde));
    for (const [userId, total] of ranking) {
      const usuario = mapaUsuario.get(userId);
      if (usuario) {
        console.log(`${usuario.name}: ${total} posts`);
      }
    }
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(colorizar(`Error: ${error.message}`, Color.Rojo));
    }
  }
}

async function main(): Promise<void> {
  console.log(colorizar("=== GESTOR DE JSONPLACEHOLDER ===", Color.Cyan));
  console.log(colorizar("Aplicación de demostración de TypeScript", Color.Amarillo));

  let corriendo = true;

  while (corriendo) {
    mostrarMenu();
    const opcion = await preguntar("Selecciona una opción: ");

    switch (opcion) {
      case "1":
        await listarUsuarios();
        break;
      case "2":
        await verPosts();
        break;
      case "3":
        await mostrarTopUsuarios();
        break;
      case "4":
        corriendo = false;
        console.log(colorizar("¡Hasta luego!", Color.Verde));
        break;
      default:
        console.log(colorizar("Opción inválida", Color.Rojo));
    }
  }

  rl.close();
}

main().catch((error: unknown) => {
  if (error instanceof Error) {
    console.error(colorizar(`Error fatal: ${error.message}`, Color.Rojo));
  }
  process.exit(1);
});
