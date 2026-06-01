# Día 07 — Proyecto Final

## Objetivo

Crear una aplicación de línea de comandos que consuma la API de JSONPlaceholder y presente los datos de forma formateada. El proyecto integra todos los conceptos aprendidos:

- ✅ Tipado estricto con interfaces y types
- ✅ Genéricos y utility types
- ✅ Async/await con fetch tipado
- ✅ Manejo de errores con unknown
- ✅ Clases y enumeraciones
- ✅ Módulos (import/export)

## Funcionalidades

1. **Listar usuarios** — Obtiene y muestra los 10 usuarios de `/users`
2. **Ver posts de un usuario** — Muestra los posts filtrados por `userId`
3. **Top de usuarios por posts** — Cuenta cuántos posts ha escrito cada usuario

## Uso

```bash
npx ts-node Dia-07-proyecto/src/index.ts
```

## Estructura

```
Dia-07-proyecto/
├── README.md
└── src/
    ├── types.ts     # Interfaces, types y enums
    ├── api.ts       # Funciones genéricas de fetch
    └── index.ts     # Entry point con la lógica principal
```

## API

[JSONPlaceholder](https://jsonplaceholder.typicode.com/) — API REST gratuita para testing.

| Endpoint | Descripción |
|----------|-------------|
| `GET /users` | Lista de usuarios |
| `GET /posts?userId=1` | Posts de un usuario |
| `GET /posts` | Todos los posts |
