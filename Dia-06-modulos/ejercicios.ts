/**
 * Día 06 — Módulos y Configuración
 * ==================================
 * Completa los ejercicios a continuación.
 * Conceptos: export/import, re-exports, tsconfig.json, @types,
 * declaración de módulos, error handling con unknown, namespaces.
 *
 * Para verificar: npx ts-node Dia-06-modulos/ejercicios.ts
 */

// ─── 1. Export / Import ──────────────────────────────────────────────────────
// Crea un archivo utils.ts con funciones exportadas (sumar, restar).
// Impórtalas aquí y úsalas.

// ─── 2. Default Export ───────────────────────────────────────────────────────
// Crea una clase Logger con export default en logger.ts.
// Impórtala aquí.

// ─── 3. Re-exports (Barrel) ─────────────────────────────────────────────────
// Crea varios archivos (usuarios.ts, productos.ts).
// Crea un index.ts que re-exporte todo.
// Importa desde index.ts aquí.

// ─── 4. Declaración de módulos (.d.ts) ──────────────────────────────────────
// Crea un archivo declarations.d.ts que declare un módulo sin tipos.
// Impórtalo aquí.

// ─── 5. Error handling con unknown ──────────────────────────────────────────
// Función async leerArchivo(ruta: string): Promise<string>
// que maneje errores con unknown y valide con instanceof Error

// async function leerArchivo(ruta: string): Promise<string> { }

// ─── 6. Namespaces (legacy) ─────────────────────────────────────────────────
// Crea un namespace Validaciones con funciones email() y url()

// namespace Validaciones { }

// ====================================================================
// 🧠 Tu turno — Práctica libre
// ====================================================================

// Configura paths en tsconfig.json ("@/*": ["./src/*"]).
// Crea un archivo en src/mi-modulo/ y otro que importe usando @/mi-modulo/...
// Instala @types/node y @types/express como dependencias de desarrollo.
