# Proyecto: Control de Gastos Personales (Personal Expense Tracker)

## Arquitectura del Proyecto
- **Backend:** Python con el framework Flask.
- **Base de Datos:** SQLite. El archivo de la base de datos es `expenses.db`.
- **Frontend:** HTML, CSS y vanilla JavaScript. Interfaz de usuario en Español.

## Funcionalidades MVP (Producto Mínimo Viable)
- Ver una lista de todos los gastos (ordenados por fecha descendente).
- Agregar un nuevo gasto.
- Eliminar un gasto existente.

## Esquema de Base de Datos
La tabla principal se llama `expenses` y cuenta con las siguientes columnas:
- `id`: Identificador único del gasto (INTEGER PRIMARY KEY AUTOINCREMENT).
- `description`: Descripción del gasto (TEXT NOT NULL).
- `amount`: Monto del gasto (REAL NOT NULL).
- `category`: Categoría del gasto (TEXT NOT NULL).
- `date`: Fecha en que se realizó el gasto (TEXT NOT NULL).

## Categorías Estándar
Las categorías estándar sugeridas para clasificar los gastos son:
- Comida
- Transporte
- Entretenimiento
- Servicios
- Otros
