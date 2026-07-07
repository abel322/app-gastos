# Arquitectura del Proyecto de Control de Gastos Personales

## Descripción
Esta es una aplicación web simple para llevar un control de gastos personales. Permite al usuario registrar sus gastos, categorizarlos y ver un listado de los mismos, además de poder eliminarlos.

## Arquitectura

El proyecto sigue una arquitectura clásica de cliente-servidor:

### Backend
- **Framework**: Python con Flask.
- **Base de Datos**: SQLite3 (`expenses.db`), que se inicializa al arrancar la aplicación si no existe.
- **Rutas Principales**:
  - `GET /`: Sirve el archivo HTML principal (frontend).
  - `GET /expenses`: Obtiene todos los gastos ordenados por fecha en formato JSON.
  - `POST /expenses`: Agrega un nuevo gasto a la base de datos.
  - `DELETE /expenses/<id>`: Elimina un gasto específico según su ID.

### Frontend
- **HTML**: Se encuentra en `templates/index.html`. Contiene el formulario para ingresar nuevos gastos y la tabla para mostrarlos. Ahora utiliza un elemento `<select>` para asegurar que solo se ingresen categorías válidas.
- **CSS**: Se encuentra en `static/style.css` y se encarga del diseño visual de la interfaz.
- **JavaScript**: Se encuentra en `static/script.js`. Controla la lógica del cliente, manejando el envío del formulario (POST), la solicitud inicial para mostrar gastos (GET), y la acción de eliminar (DELETE), actualizando el DOM de forma dinámica sin recargar la página.

## Características (Features)
- Agregar un nuevo gasto (Descripción, Monto, Categoría, Fecha).
- Ver un listado de todos los gastos.
- Las categorías disponibles son: Comida, Transporte, Entretenimiento, Servicios y Otros.
- Eliminar un gasto de la lista.
- Persistencia de los datos en base de datos SQLite.