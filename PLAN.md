# Plan de Proyecto: Aplicación de Control de Gastos Personales (MVP)

## Arquitectura del Proyecto
- **Backend:** Desarrollado utilizando Python y el microframework Flask.
- **Base de Datos:** SQLite, usando un archivo `expenses.db`.
- **Frontend:** HTML, CSS y Vanilla JavaScript.
- **Servidor de Desarrollo:** Corre por defecto en http://localhost:5000.
- **Localización:** La interfaz de usuario está en español.

## Esquema de Base de Datos
La aplicación utiliza una tabla principal llamada `expenses` con las siguientes columnas:
- `id`: Identificador único del gasto (INTEGER PRIMARY KEY AUTOINCREMENT).
- `description`: Descripción del gasto (TEXT).
- `amount`: Monto del gasto (REAL).
- `category`: Categoría del gasto (TEXT).
- `date`: Fecha del gasto (TEXT).

## Características del Producto Mínimo Viable (MVP)
- **Añadir Gasto:** Los usuarios pueden agregar nuevos gastos proporcionando una descripción, el monto, la categoría y la fecha.
- **Visualización de Gastos:** Los usuarios pueden ver una lista de todos sus gastos registrados, ordenados por fecha de forma descendente.
- **Eliminar Gasto:** Se permite borrar un gasto existente a través de su identificador.

## Categorías Estándar de Gastos
La aplicación soporta las siguientes categorías de gastos por defecto:
- Comida
- Transporte
- Entretenimiento
- Servicios
- Otros
