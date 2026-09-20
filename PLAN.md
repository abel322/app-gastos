# Control de Gastos Personales

## Arquitectura del Proyecto

Este es un proyecto para registrar y gestionar gastos personales.

- **Backend:** Flask (Python)
- **Base de Datos:** SQLite (archivo `expenses.db`)
- **Frontend:** HTML, CSS y JavaScript Vanilla (sin frameworks)

## Endpoints de la API

La aplicación cuenta con los siguientes endpoints expuestos en el backend de Flask (ver `app.py`):

1. **GET `/expenses`**
   - **Descripción:** Obtiene la lista de todos los gastos registrados en la base de datos, ordenados por fecha en orden descendente.
   - **Respuesta:** JSON con una lista de objetos que representan los gastos.

2. **POST `/expenses`**
   - **Descripción:** Crea un nuevo gasto en la base de datos.
   - **Cuerpo (JSON):**
     - `description` (texto)
     - `amount` (número)
     - `category` (texto)
     - `date` (texto, fecha)
   - **Respuesta:** JSON con los detalles del gasto creado (incluyendo su nuevo `id`), o un error 400 si faltan campos.

3. **DELETE `/expenses/<int:id>`**
   - **Descripción:** Elimina un gasto de la base de datos utilizando su identificador único (`id`).
   - **Respuesta:** JSON con un mensaje de éxito.

## Características

- Interfaz web localizada en español (UI).
- Los usuarios pueden agregar gastos completando un formulario.
- Los usuarios pueden ver una lista de sus gastos previamente agregados.
- Los usuarios pueden eliminar un gasto de la lista.
- Utiliza categorías estándar para los gastos: Comida, Transporte, Entretenimiento, Servicios y Otros.
