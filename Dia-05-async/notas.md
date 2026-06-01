# Día 05 — Clases, Enums y Async

## 1. Clases en TypeScript

### Access Modifiers

| Modificador | Acceso |
|------------|--------|
| `public` (default) | Desde cualquier lugar |
| `private` | Solo dentro de la clase |
| `protected` | Dentro de la clase y subclases |

```typescript
class Persona {
  public nombre: string;
  private documento: string;
  protected edad: number;

  constructor(nombre: string, documento: string, edad: number) {
    this.nombre = nombre;
    this.documento = documento;
    this.edad = edad;
  }
}
```

### Shorthand constructor (Parameter Properties)

```typescript
class Usuario {
  constructor(
    public readonly id: number,
    public nombre: string,
    private password: string
  ) {}
}
```

### implements

```typescript
interface IEmpleado {
  nombre: string;
  trabajar(): void;
}

class Empleado implements IEmpleado {
  constructor(public nombre: string) {}
  trabajar(): void {
    console.log(`${this.nombre} está trabajando`);
  }
}
```

### abstract classes

```typescript
abstract class Forma {
  abstract calcularArea(): number;
  descripcion(): string {
    return `Área: ${this.calcularArea()}`;
  }
}

class Circulo extends Forma {
  constructor(private radio: number) { super(); }
  calcularArea(): number {
    return Math.PI * this.radio ** 2;
  }
}
```

## 2. Enums

```typescript
enum Direccion {
  Norte,    // 0
  Sur,      // 1
  Este,     // 2
  Oeste,    // 3
}

enum StatusCode {
  OK = 200,
  NotFound = 404,
  Error = 500,
}

enum Color {
  Rojo = "ROJO",
  Verde = "VERDE",
  Azul = "AZUL",
}
```

## 3. Promise<T>

TypeScript tipa las promesas con genéricos:

```typescript
const promesa: Promise<string> = new Promise((resolve) => {
  resolve("Hecho");
});
```

## 4. Async / Await

```typescript
async function obtenerDatos(): Promise<number> {
  const respuesta = await fetch("https://api.example.com/data");
  const datos = await respuesta.json();
  return datos.length;
}
```

## 5. Fetch con tipado

```typescript
interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

async function obtenerPosts(): Promise<Post[]> {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json(); // Promise<Post[]>
}
```

## 6. Manejo de errores

```typescript
async function ejecutar(): Promise<void> {
  try {
    const posts = await obtenerPosts();
    console.log(posts);
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(error.message);
    } else {
      console.error("Error desconocido", error);
    }
  }
}
```
