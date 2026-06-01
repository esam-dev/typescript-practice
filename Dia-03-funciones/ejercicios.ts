/**
 * Día 03 — Funciones y Type Narrowing
 * =====================================
 */

// ─── Ejercicio 1: Function type ─────────────────────────────────────────────
// Define un type 'Transformador' que reciba string y retorne string

type Transformador = (texto: string) => string;
const mayusculas: Transformador = (texto) => texto.toUpperCase();

console.log("Ejercicio 1:", mayusculas("hola"));

// ─── Ejercicio 2: Parámetros opcionales ─────────────────────────────────────
// Crea una función que salude a un usuario con título opcional

function saludoCompleto(nombre: string, titulo?: string): string {
  return titulo ? `${titulo} ${nombre}` : `Hola ${nombre}`;
}

console.log("Ejercicio 2:", saludoCompleto("Ana"), saludoCompleto("Luis", "Dr."));

// ─── Ejercicio 3: Rest parameters ───────────────────────────────────────────
// Crea una función que concatene todos los strings que reciba

function concatenar(...textos: string[]): string {
  return textos.join(" ");
}

console.log("Ejercicio 3:", concatenar("TypeScript", "es", "genial"));

// ─── Ejercicio 4: typeof narrowing ──────────────────────────────────────────
// Procesa un valor que puede ser number | boolean | string

function formatear(valor: number | boolean | string): string {
  if (typeof valor === "number") return `Número: ${valor}`;
  if (typeof valor === "boolean") return valor ? "Verdadero" : "Falso";
  return `Texto: ${valor}`;
}

console.log("Ejercicio 4:", formatear(42), formatear(true), formatear("TS"));

// ─── Ejercicio 5: Discriminated Union ───────────────────────────────────────
// Calcula el área de diferentes formas geométricas

type Figura =
  | { tipo: "circulo"; radio: number }
  | { tipo: "rectangulo"; ancho: number; alto: number }
  | { tipo: "triangulo"; base: number; altura: number };

function calcularArea(figura: Figura): number {
  switch (figura.tipo) {
    case "circulo":
      return Math.PI * figura.radio ** 2;
    case "rectangulo":
      return figura.ancho * figura.alto;
    case "triangulo":
      return (figura.base * figura.altura) / 2;
  }
}

console.log("Ejercicio 5:", calcularArea({ tipo: "circulo", radio: 5 }));

// ─── Ejercicio 6: Type Predicate ────────────────────────────────────────────
// Crea un type predicate que valide si un valor es un número par

function esNumeroPar(valor: unknown): valor is number {
  return typeof valor === "number" && valor % 2 === 0;
}

const valores: unknown[] = [1, "dos", 3, 4, "cinco", 6];
const soloPares = valores.filter(esNumeroPar);
console.log("Ejercicio 6:", soloPares);

// ─── Ejercicio 7: Function overloads ────────────────────────────────────────
// Crea overloads para una función que acepte string o number[]

function obtenerLongitud(valor: string): number;
function obtenerLongitud(valor: number[]): number;
function obtenerLongitud(valor: string | number[]): number {
  return valor.length;
}

console.log("Ejercicio 7:", obtenerLongitud("TypeScript"), obtenerLongitud([1, 2, 3]));

// ─── Ejercicio 8: Parámetros por defecto ────────────────────────────────────
// Función para crear un usuario con valores por defecto

function crearConfiguracion(host: string, puerto: number = 3000, ssl: boolean = true): object {
  return { host, puerto, ssl, protocolo: ssl ? "https" : "http" };
}

console.log("Ejercicio 8:", crearConfiguracion("localhost"));
