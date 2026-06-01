# Día 01 — Primitivos y Entorno

## 1. Configuración del entorno

TypeScript se instala vía npm y se transpila a JavaScript con `tsc`:

```bash
npm install -D typescript ts-node @types/node
npx tsc --init          # Genera tsconfig.json
npx ts-node archivo.ts  # Ejecuta directamente
```

## 2. Tipos primitivos

| Tipo | Ejemplo | Descripción |
|------|---------|-------------|
| `string` | `"hola"`, `'mundo'`, `` `temp` `` | Texto |
| `number` | `42`, `3.14`, `0xff`, `Infinity` | Números (todos son `number`) |
| `boolean` | `true`, `false` | Lógicos |
| `null` | `null` | Ausencia intencional de valor |
| `undefined` | `undefined` | Variable no inicializada |

```typescript
let nombre: string = "Ana";
let edad: number = 30;
let activo: boolean = true;
let vacio: null = null;
let sinDefinir: undefined = undefined;
```

## 3. Type Inference (Inferencia de tipos)

TypeScript infiere el tipo automáticamente. No es necesario anotarlo siempre:

```typescript
let mensaje = "Hola";       // TypeScript infiere: string
let cantidad = 42;          // number
let esValido = false;       // boolean
```

## 4. `any`, `unknown`, `void`, `never`

| Tipo | Uso |
|------|-----|
| `any` | Desactiva el type-checking. Evitar su uso. |
| `unknown` | Tipo seguro para valores desconocidos. Requiere validación. |
| `void` | Función que no retorna nada. |
| `never` | Función que nunca retorna (lanza error o bucle infinito). |

```typescript
let peligroso: any = "texto";    // Evitar
peligroso = 42;                   // Sin error

let seguro: unknown = "texto";
// seguro.toUpperCase() // Error: necesita validación
if (typeof seguro === "string") {
  seguro.toUpperCase(); // OK
}

function lanzarError(mensaje: string): never {
  throw new Error(mensaje);
}
```

## 5. Strict Mode

En `tsconfig.json`:
```json
{
  "compilerOptions": {
    "strict": true
    // Habilita: noImplicitAny, strictNullChecks, etc.
  }
}
```

- `strictNullChecks`: `null` y `undefined` no son asignables a otros tipos sin validación.
- `noImplicitAny`: Error si TypeScript no puede inferir el tipo.

## 6. Literal Types y Type Aliases

```typescript
type Direccion = "norte" | "sur" | "este" | "oeste";
let dir: Direccion = "norte"; // Válido
// dir = "centro"; // Error
```
