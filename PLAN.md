# Control de Gastos Personales

## Arquitectura del Proyecto
Esta es una aplicación para el Control de Gastos Personales.
- **Backend**: Python Flask
- **Base de Datos**: SQLite
- **Frontend**: HTML, CSS, y JavaScript puro (vanilla)

## Características del MVP (Producto Mínimo Viable)
- Agregar un gasto con descripción, monto, categoría y fecha.
- Ver una lista de todos los gastos, ordenados por fecha descendente.
- Eliminar un gasto.

## Esquema de la Base de Datos
La base de datos SQLite tiene una única tabla:
- **Nombre de la tabla**: `expenses`
- **Columnas**:
  - `id`: INTEGER PRIMARY KEY AUTOINCREMENT
  - `description`: TEXT NOT NULL
  - `amount`: REAL NOT NULL
  - `category`: TEXT NOT NULL
  - `date`: TEXT NOT NULL

## Categorías Estándar de Gastos
- Comida
- Transporte
- Entretenimiento
- Servicios
- Otros
