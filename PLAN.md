# Plan del Proyecto: App de Gastos Personales

## Arquitectura del Proyecto
- **Backend:** Python con Flask.
- **Base de Datos:** SQLite.
- **Frontend:** HTML, CSS y JavaScript (Vanilla JS).

## Características del MVP (Producto Mínimo Viable)
- Interfaz de usuario en español.
- Formulario para agregar nuevos gastos.
- Visualización de la lista de gastos, ordenados por fecha.
- Capacidad para eliminar gastos existentes.
- Comunicación asíncrona mediante API REST para añadir, listar y borrar gastos sin recargar la página.

## Categorías Estándar de Gastos
- Comida
- Transporte
- Entretenimiento
- Servicios
- Otros

## Esquema de la Base de Datos
La base de datos SQLite consta de una tabla principal `expenses` con las siguientes columnas:
- `id`: Identificador único del gasto (INTEGER PRIMARY KEY AUTOINCREMENT).
- `description`: Descripción del gasto (TEXT NOT NULL).
- `amount`: Monto del gasto (REAL NOT NULL).
- `category`: Categoría del gasto (TEXT NOT NULL).
- `date`: Fecha del gasto (TEXT NOT NULL).
