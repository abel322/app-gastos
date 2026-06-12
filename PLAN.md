# Plan de la Aplicación de Gastos Personales

## Arquitectura del Proyecto
* **Backend:** Python con Flask.
* **Base de Datos:** SQLite. El archivo de base de datos se llama `expenses.db`. Contiene una tabla `expenses` con las columnas `id`, `description`, `amount`, `category` y `date`.
* **Frontend:** HTML, CSS, y JavaScript vanilla (ubicados en `templates/index.html` y la carpeta `static/`).

## Características Principales
* **Agregar Gastos:** Permite al usuario registrar un nuevo gasto con descripción, monto, categoría y fecha.
* **Listar Gastos:** Muestra todos los gastos registrados de manera ordenada.
* **Eliminar Gastos:** Permite eliminar un gasto existente del registro.
* **Categorías Estándar:** Los gastos se clasifican en las siguientes categorías predefinidas: Comida, Transporte, Entretenimiento, Servicios y Otros.
