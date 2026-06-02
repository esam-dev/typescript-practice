/**
 * Día 02 — Objetos y Modelado de Tipos
 * ======================================
 * Completa los ejercicios a continuación.
 * Para verificar: npx ts-node Dia-02-interfaces/ejercicios.ts
 */

// ─── Ejercicio 1: Interface básica ──────────────────────────────────────────
// Define una interface 'Producto' con nombre, precio, y categoria opcional

// interface Producto { }

// ─── Ejercicio 2: Interface con readonly ────────────────────────────────────
// Crea una interface 'Pedido' con id (readonly), producto y cantidad

// interface Pedido { }

// ─── Ejercicio 3: Intersección de types ─────────────────────────────────────
// Combina Direccion y Contacto en un type UsuarioCompleto

// type Direccion = { calle: string; ciudad: string };
// type Contacto = { email: string; telefono: string };
// type UsuarioCompleto = Direccion & Contacto;

// ─── Ejercicio 4: Array tipado ──────────────────────────────────────────────
// Declara un array de productos usando la interface del ejercicio 1

// const inventario: Producto[] = [ ];

// ─── Ejercicio 5: Tupla ─────────────────────────────────────────────────────
// Crea un type Coordenada como tupla [number, number] y úsalo

// type Coordenada = [number, number];

// ─── Ejercicio 6: Index Signature ───────────────────────────────────────────
// Crea un interface 'Aprobaciones' donde cada clave string tiene valor boolean

// interface Aprobaciones { }

// ─── Ejercicio 7: Discriminated Union ───────────────────────────────────────
// Modela una respuesta de API que puede ser éxito o error

// type RespuestaAPI = { };

// ─── Ejercicio 8: satisfies ─────────────────────────────────────────────────
// Usa satisfies para tipar un objeto literal de colores

// const colores = { } satisfies Record<string, string>;

// ====================================================================
// 🧠 Tu turno — Escribe tu código aquí
// ====================================================================

// ─── Práctica 1: Interface desde cero ───────────────────────────────
// Define interface Libro (titulo, autor, año?, readonly isbn).
// Crea dos objetos Libro.

// ─── Práctica 2: Tupla personalizada ────────────────────────────────
// Crea type ParClaveValor = [string, string | number].
// Declara 2 tuplas con datos reales.

// ─── Práctica 3: Index Signature ─────────────────────────────────────
// Interface ContadorPalabras con [palabra: string]: number.
// Crea un objeto con 3 palabras y su frecuencia.

// ─── Práctica 4: Discriminated Union ────────────────────────────────
// EstadoReproductor: "reproduciendo" | "pausado" | "detenido".
// Función mostrarEstado(estado): string que describa cada estado.

// ─── Práctica 5: Intersección de types ──────────────────────────────
// Combina Tiempo {horas, minutos} & Fecha {dia, mes, año} → DateTime.
// Crea una variable ahora: DateTime.
