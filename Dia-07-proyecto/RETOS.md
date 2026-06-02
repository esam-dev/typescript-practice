# 🧠 Retos — Proyecto Final

Implementa cada reto modificando los archivos del proyecto.

## Reto 1: Ver comentarios de un post
Endpoint `GET /posts/{postId}/comments`. Crea interface `Comment`, función en `api.ts`, y opción en el menú.

## Reto 2: Filtrar usuarios por ciudad
Pide una ciudad al usuario, filtra usuarios donde `address.city` coincida (case-insensitive).

## Reto 3: Mostrar usuarios con sus posts
Obtén todos los usuarios y posts. Para cada usuario, muestra su nombre y el título de su post más reciente (id más alto).

## Reto 4: Filtro por palabra clave en posts
Pide una palabra clave, busca en todos los posts (título y cuerpo) los que la contengan. Muestra `[#id] — título (usuario)`.

## Reto 5: Favoritos locales
Guarda posts favoritos en un array en memoria. Opciones: añadir por Post ID y ver lista de favoritos.

---

```bash
node --loader ts-node/esm Dia-07-proyecto/src/index.ts
```
