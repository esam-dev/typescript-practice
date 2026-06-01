# Día 04 — Genéricos y Utility Types

## 1. Generic Functions

Los genéricos permiten crear componentes reutilizables que funcionan con varios tipos:

```typescript
function primera<T>(arr: T[]): T | undefined {
  return arr[0];
}

const num = primera([1, 2, 3]);    // T → number
const str = primera(["a", "b"]);   // T → string
```

## 2. Múltiples type parameters

```typescript
function pareja<T, U>(a: T, b: U): [T, U] {
  return [a, b];
}

const p = pareja("hola", 42); // [string, number]
```

## 3. Generic Constraints

Restringir qué tipos puede aceptar un genérico:

```typescript
interface ConLongitud {
  length: number;
}

function mostrarLongitud<T extends ConLongitud>(item: T): number {
  return item.length;
}

mostrarLongitud("texto");         // OK
mostrarLongitud([1, 2, 3]);       // OK
// mostrarLongitud(123);           // Error
```

## 4. Generic Interfaces

```typescript
interface ApiResponse<T> {
  datos: T;
  error: string | null;
}

type UsuarioResponse = ApiResponse<{ id: number; nombre: string }>;
```

## 5. Generic Constraints con keyof

```typescript
function getPropiedad<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const user = { nombre: "Ana", edad: 30 };
getPropiedad(user, "nombre"); // string
// getPropiedad(user, "email"); // Error
```

## 6. Utility Types

| Utility | Descripción |
|---------|-------------|
| `Partial<T>` | Todas las propiedades opcionales |
| `Required<T>` | Todas las propiedades requeridas |
| `Pick<T, K>` | Selecciona propiedades específicas |
| `Omit<T, K>` | Omite propiedades específicas |
| `Record<K, V>` | Objeto con claves K y valores V |
| `Readonly<T>` | Todas las propiedades readonly |
| `ReturnType<T>` | Tipo de retorno de una función |
| `Parameters<T>` | Tipos de parámetros de una función |

```typescript
interface Usuario {
  id: number;
  nombre: string;
  email: string;
}

type UsuarioParcial = Partial<Usuario>;
type SoloNombre = Pick<Usuario, "nombre" | "email">;
type SinEmail = Omit<Usuario, "email">;
type DiccionarioUsuarios = Record<string, Usuario>;
```

## 7. Mapped Types

Crear tipos a partir de otros tipos:

```typescript
type SoloLectura<T> = {
  readonly [K in keyof T]: T[K];
};

type Opcional<T> = {
  [K in keyof T]?: T[K];
};

type Nullable<T> = {
  [K in keyof T]: T[K] | null;
};
```

## 8. Template Literal Types

```typescript
type Evento = "click" | "focus" | "blur";
type Handler = `on${Capitalize<Evento>}`; // "onClick" | "onFocus" | "onBlur"
```
