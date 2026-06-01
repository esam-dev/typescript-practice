/**
 * Día 02 — Objetos y Modelado de Tipos
 * ======================================
 */

// ─── Ejercicio 1: Interface básica ──────────────────────────────────────────
// Define una interface 'Producto' con nombre, precio, y categoria opcional

interface Producto {
  nombre: string;
  precio: number;
  categoria?: string;
}

const producto1: Producto = { nombre: "Laptop", precio: 1200 };
const producto2: Producto = { nombre: "Mouse", precio: 25, categoria: "Periféricos" };

console.log("Ejercicio 1:", producto1, producto2);

// ─── Ejercicio 2: Interface con readonly ────────────────────────────────────
// Crea una interface 'Pedido' con id (readonly), producto y cantidad

interface Pedido {
  readonly id: number;
  producto: string;
  cantidad: number;
}

const pedido: Pedido = { id: 1, producto: "Laptop", cantidad: 2 };
// pedido.id = 5; // Error: readonly

console.log("Ejercicio 2:", pedido);

// ─── Ejercicio 3: Intersección de types ─────────────────────────────────────
// Combina Direccion y Contacto en un type UsuarioCompleto

type Direccion = { calle: string; ciudad: string };
type Contacto = { email: string; telefono: string };
type UsuarioCompleto = Direccion & Contacto;

const usuario: UsuarioCompleto = {
  calle: "Av. Siempre Viva",
  ciudad: "Madrid",
  email: "user@mail.com",
  telefono: "123456789",
};

console.log("Ejercicio 3:", usuario);

// ─── Ejercicio 4: Array tipado ──────────────────────────────────────────────
// Declara un array de productos usando la interface del ejercicio 1

const inventario: Producto[] = [
  { nombre: "Monitor", precio: 300 },
  { nombre: "Teclado", precio: 50, categoria: "Periféricos" },
];

console.log("Ejercicio 4:", inventario);

// ─── Ejercicio 5: Tupla ─────────────────────────────────────────────────────
// Crea un type Coordenada como tupla [number, number] y úsalo

type Coordenada = [number, number];
const origen: Coordenada = [0, 0];
const destino: Coordenada = [10.5, -3.2];

console.log("Ejercicio 5:", origen, destino);

// ─── Ejercicio 6: Index Signature ───────────────────────────────────────────
// Crea un interface 'Aprobaciones' donde cada clave string tiene valor boolean

interface Aprobaciones {
  [usuario: string]: boolean;
}

const aprobaciones: Aprobaciones = {
  ana: true,
  luis: false,
  carlos: true,
};

console.log("Ejercicio 6:", aprobaciones);

// ─── Ejercicio 7: Discriminated Union ───────────────────────────────────────
// Modela una respuesta de API que puede ser éxito o error

type RespuestaAPI =
  | { estado: "exito"; datos: string }
  | { estado: "error"; mensaje: string };

function manejarRespuesta(resp: RespuestaAPI): string {
  if (resp.estado === "exito") {
    return `Datos: ${resp.datos}`;
  }
  return `Error: ${resp.mensaje}`;
}

console.log("Ejercicio 7:", manejarRespuesta({ estado: "exito", datos: "OK" }));

// ─── Ejercicio 8: satisfies ─────────────────────────────────────────────────
// Usa satisfies para tipar un objeto literal de colores

type Colores = Record<string, string>;
const colores = {
  rojo: "#ff0000",
  verde: "#00ff00",
  azul: "#0000ff",
} satisfies Colores;

console.log("Ejercicio 8:", colores.rojo);
