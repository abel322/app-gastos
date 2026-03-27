# Plan para la Aplicación de Control de Gastos Personales

## Arquitectura del Proyecto
- **Backend:** Python Flask
- **Base de Datos:** SQLite
- **Frontend:** HTML, CSS y JavaScript (vanilla)

## Esquema de la Base de Datos
La aplicación utiliza una tabla `expenses` en SQLite con las siguientes columnas:
- `id`: Identificador único (INTEGER PRIMARY KEY)
- `description`: Descripción del gasto (TEXT)
- `amount`: Monto del gasto (REAL)
- `category`: Categoría del gasto (TEXT)
- `date`: Fecha del gasto (TEXT)

## Características del MVP
- **Añadir Gastos:** Los usuarios pueden registrar nuevos gastos proporcionando descripción, monto, categoría y fecha.
- **Categorías Estándar:** Las categorías disponibles son: Comida, Transporte, Entretenimiento, Servicios y Otros.
- **Visualización de Gastos:** Los gastos registrados se muestran en una lista ordenados por fecha.
- **Eliminar Gastos:** Los usuarios pueden eliminar gastos registrados previamente.
