# Plan del Proyecto: App de Gastos Personales

## Arquitectura del Proyecto
- **Backend:** Python Flask
- **Base de Datos:** SQLite
- **Frontend:** HTML, CSS, JavaScript (Vanilla)

## Características del MVP (Producto Mínimo Viable)
- Agregar un nuevo gasto con descripción, monto, categoría y fecha.
- Ver la lista de todos los gastos ordenados por fecha descendente.
- Eliminar un gasto existente.

## Categorías Estándar de Gastos
- Comida
- Transporte
- Entretenimiento
- Servicios
- Otros

## Esquema de la Base de Datos
La base de datos SQLite tiene una tabla `expenses` con las siguientes columnas:
- `id`: INTEGER PRIMARY KEY AUTOINCREMENT
- `description`: TEXT NOT NULL
- `amount`: REAL NOT NULL
- `category`: TEXT NOT NULL
- `date`: TEXT NOT NULL
