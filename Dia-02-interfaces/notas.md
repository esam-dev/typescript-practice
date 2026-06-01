# Día 02 — Objetos y Modelado de Tipos

## 1. Interfaces

Definen la forma de un objeto:

```typescript
interface Usuario {
  nombre: string;
  edad: number;
  email?: string;        // Opcional
  readonly id: number;   // Solo lectura
}
```

## 2. Type Aliases vs Interfaces

| Característica | `interface` | `type` |
|---------------|-------------|--------|
| Extender | `extends` | `&` (intersección) |
| Uniones | ❌ | ✅ `type A = B \| C` |
| Tuplas | ❌ | ✅ `type Par = [string, number]` |
| Declaration merging | ✅ | ❌ |

```typescript
interface Animal {
  nombre: string;
}
interface Perro extends Animal {
  raza: string;
}

type Coordenada = [number, number];
type Resultado = { ok: true; data: string } | { ok: false; error: string };
```

## 3. Arrays y Tuplas

```typescript
let numeros: number[] = [1, 2, 3];
let textos: Array<string> = ["a", "b"];     // Forma genérica
let tupla: [string, number] = ["Ana", 30];   // Longitud fija
```

## 4. Index Signatures

Para objetos con claves dinámicas:

```typescript
interface Diccionario {
  [clave: string]: number;
}
const edades: Diccionario = { Ana: 30, Luis: 25 };
```

## 5. Readonly y ReadonlyArray

```typescript
interface Config {
  readonly apiUrl: string;
  readonly puertos: readonly number[];
}

type Punto = readonly [number, number];
```

## 6. Intersecciones y Uniones

```typescript
type A = { a: string };
type B = { b: number };
type C = A & B; // { a: string; b: number }

type Estado = "cargando" | "exito" | "error";
type Respuesta<T> = 
  | { estado: "exito"; datos: T }
  | { estado: "error"; mensaje: string }
  | { estado: "cargando" };
```

## 7. Satisfies Operator

Verifica que un valor cumple un tipo sin cambiar su tipo inferido:

```typescript
type RGB = Record<string, string>;
const colores = {
  rojo: "#ff0000",
  verde: "#00ff00",
} satisfies RGB;
```
