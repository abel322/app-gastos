# Plan del Proyecto: App de Gastos Personales

## Arquitectura
*   **Backend:** Python con Flask. Provee una API REST para interactuar con los datos.
*   **Base de Datos:** SQLite (`expenses.db`). Guarda los gastos con las columnas: `id`, `description`, `amount`, `category`, y `date`.
*   **Frontend:** HTML, CSS, y JavaScript (Vanilla) servido desde `templates/` y `static/`.

## Características
*   **Agregar Gastos:** Permite al usuario registrar un nuevo gasto ingresando la descripción, monto, categoría y fecha.
*   **Listar Gastos:** Muestra una tabla con todos los gastos registrados, ordenados por fecha de forma descendente.
*   **Eliminar Gastos:** Permite al usuario borrar un gasto específico de la lista.

## Localización e Interfaz
*   La interfaz de usuario está en español.
*   Las categorías estándar de gastos definidas son: Comida, Transporte, Entretenimiento, Servicios, y Otros.
