# Plan del Proyecto: Control de Gastos Personales

## Arquitectura del Proyecto

- **Backend**: Python utilizando el framework Flask (`app.py`).
- **Base de Datos**: SQLite (`expenses.db`).
- **Frontend**: HTML, CSS y JavaScript puro (ubicado en `templates/index.html`, `static/style.css` y `static/script.js`).

## Esquema de la Base de Datos

La base de datos cuenta con una tabla `expenses` con las siguientes columnas:
- `id`: INTEGER PRIMARY KEY AUTOINCREMENT
- `description`: TEXT NOT NULL
- `amount`: REAL NOT NULL
- `category`: TEXT NOT NULL
- `date`: TEXT NOT NULL

## Características

- **Visualizar Gastos**: Muestra la lista de gastos registrados, ordenados por fecha de forma descendente.
- **Agregar Gasto**: Permite registrar un nuevo gasto proporcionando descripción, monto, categoría y fecha.
- **Eliminar Gasto**: Permite borrar gastos previamente registrados.

## Categorías Estándar

Las categorías de gastos estándar definidas en la aplicación son:
- Comida
- Transporte
- Entretenimiento
- Servicios
- Otros
