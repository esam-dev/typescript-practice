/**
 * Día 06 — Módulos y Configuración
 * ==================================
 * Completa los ejercicios a continuación.
 * Para verificar: npx ts-node Dia-06-modulos/ejercicios.ts
 */

// ─── Ejercicio 1: Export / Import ───────────────────────────────────────────
// Crea un archivo utils.ts con funciones exportadas e impórtalas aquí

// ─── Ejercicio 2: Default export ────────────────────────────────────────────
// Crea una clase Logger con export default e impórtala

// ─── Ejercicio 3: Re-exports ────────────────────────────────────────────────
// Crea un archivo index.ts que re-exporte todo desde varios módulos

// ─── Ejercicio 4: Import type ───────────────────────────────────────────────
// Usa import type para importar solo tipos

// ─── Ejercicio 5: Namespace ─────────────────────────────────────────────────
// Crea un namespace Validaciones con funciones email() y url()

// namespace Validaciones { }

// ─── Ejercicio 6: Declaración de módulos ────────────────────────────────────
// Crea un archivo .d.ts que declare un módulo sin tipos

// ─── Ejercicio 7: Error handling con unknown ────────────────────────────────
// Crea una función leerArchivo que maneje errores con unknown

// async function leerArchivo(ruta: string): Promise<string> { }

// ====================================================================
// 🧠 Tu turno — Escribe tu código aquí
// ====================================================================

// ─── Práctica 1: Path aliases ──────────────────────────────────────
// Configura paths en tsconfig.json ("@/*": ["./src/*"]).
// Crea un archivo en src/utils/ y otro que importe con @/utils/...

// ─── Práctica 2: Barrel exports ────────────────────────────────────
// Crea varios archivos (usuarios.ts, productos.ts, pedidos.ts).
// Un index.ts que re-exporte todo. Importa desde index.ts.

// ─── Práctica 3: Módulo con genéricos ──────────────────────────────
// Crea un módulo colecciones.ts con funciones genéricas crearMapa<K,V>().
// Úsalo importando desde este archivo.

// ─── Práctica 4: Módulo con tipos complejos ────────────────────────
// Crea types/api.ts con tipos de una API REST.
// types/domain.ts con tipos de dominio.
// types/index.ts que re-exporte todo.
