# Día 03 — Funciones y Type Narrowing

## 1. Function Types y Call Signatures

```typescript
// Anotación básica
function sumar(a: number, b: number): number {
  return a + b;
}

// Arrow function
const restar = (a: number, b: number): number => a - b;

// Type para función
type Operacion = (a: number, b: number) => number;
const multiplicar: Operacion = (a, b) => a * b;
```

## 2. Parámetros opcionales y por defecto

```typescript
function saludar(nombre: string, saludo?: string): string {
  return `${saludo ?? "Hola"}, ${nombre}`;
}

function crearUsuario(nombre: string, activo: boolean = true): void {
  console.log(nombre, activo);
}
```

## 3. Rest Parameters

```typescript
function sumarTodos(...numeros: number[]): number {
  return numeros.reduce((acc, n) => acc + n, 0);
}
```

## 4. Function Overloads

Múltiples firmas para una misma función:

```typescript
function procesar(valor: string): string[];
function procesar(valor: number): number[];
function procesar(valor: string | number): string[] | number[] {
  if (typeof valor === "string") return valor.split("");
  return [valor];
}
```

## 5. Type Narrowing

Reducir un tipo union a un tipo más específico:

```typescript
function esString(valor: unknown): valor is string {
  return typeof valor === "string";
}
```

### typeof narrowing
```typescript
function duplicar(valor: string | number): string | number {
  if (typeof valor === "string") return valor + valor;
  return valor * 2;
}
```

### instanceof narrowing
```typescript
class Perro { ladrar() {} }
class Gato { maullar() {} }

function sonido(animal: Perro | Gato) {
  if (animal instanceof Perro) animal.ladrar();
  else animal.maullar();
}
```

### Discriminated Unions
```typescript
type Figura =
  | { tipo: "circulo"; radio: number }
  | { tipo: "rectangulo"; ancho: number; alto: number };

function area(figura: Figura): number {
  if (figura.tipo === "circulo") return Math.PI * figura.radio ** 2;
  return figura.ancho * figura.alto;
}
```

### Type Predicates
```typescript
interface Pez { nadar: () => void }
interface Ave { volar: () => void }

function esPez(animal: Pez | Ave): animal is Pez {
  return "nadar" in animal;
}
```

## 6. this en funciones

```typescript
interface Boton {
  texto: string;
  onClick: (this: HTMLElement, e: Event) => void;
}
```
