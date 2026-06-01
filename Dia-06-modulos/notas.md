# Día 06 — Módulos y Configuración

## 1. Export / Import

```typescript
// archivo.ts
export interface Usuario {
  nombre: string;
}

export function saludar(nombre: string): string {
  return `Hola ${nombre}`;
}

export const PI = 3.1416;

// default export
export default class Logger { ... }
```

```typescript
// otro.ts
import Logger, { Usuario, saludar, PI } from "./archivo";
import * as Utils from "./archivo";
import type { Usuario } from "./archivo"; // Solo tipo
```

## 2. Re-exports

```typescript
export { Usuario, saludar } from "./archivo";
export * from "./archivo";
export type { Usuario } from "./archivo";
```

## 3. tsconfig.json en profundidad

| Opción | Descripción |
|--------|-------------|
| `target` | Versión JS de salida (`ES2022`) |
| `module` | Sistema de módulos (`CommonJS`, `ESNext`, `NodeNext`) |
| `moduleResolution` | Cómo resolver imports (`node`, `bundler`, `NodeNext`) |
| `outDir` | Carpeta de salida |
| `rootDir` | Carpeta raíz del proyecto |
| `strict` | Habilita todas las opciones strict |
| `noUnusedLocals` | Error si hay variables no usadas |
| `noUnusedParameters` | Error si hay parámetros no usados |
| `exactOptionalPropertyTypes` | Strict con propiedades opcionales |
| `paths` | Alias para imports |
| `resolveJsonModule` | Importar archivos `.json` |

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "NodeNext",
    "moduleResolution": "NodeNext",
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "resolveJsonModule": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["src"],
  "exclude": ["node_modules", "dist"]
}
```

## 4. @types y DefinitelyTyped

```bash
npm install -D @types/node
npm install -D @types/express
npm install -D @types/lodash
```

## 5. Declaración de módulos

Cuando un módulo no tiene tipos:

```typescript
// declarations.d.ts
declare module "mi-libreria-sin-tipos" {
  export function hacerAlgo(): void;
  export const version: string;
}
```

## 6. Error handling con unknown

```typescript
async function leerArchivo(ruta: string): Promise<string> {
  try {
    return await fs.promises.readFile(ruta, "utf-8");
  } catch (error: unknown) {
    if (error instanceof Error) {
      if ("code" in error) {
        const err = error as NodeJS.ErrnoException;
        if (err.code === "ENOENT") return "Archivo no encontrado";
      }
      throw error;
    }
    throw new Error("Error desconocido");
  }
}
```

## 7. Namespaces (legacy)

```typescript
namespace Validaciones {
  export function email(valor: string): boolean {
    return valor.includes("@");
  }
  export function url(valor: string): boolean {
    return valor.startsWith("http");
  }
}
```
