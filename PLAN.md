# Control de Gastos Personales - Plan del Proyecto

## Arquitectura del Proyecto
El proyecto es una aplicación web de Control de Gastos Personales (Personal Expense Tracker) construida con la siguiente arquitectura:
- **Backend:** Python con el framework Flask.
- **Base de Datos:** SQLite.
- **Frontend:** HTML, CSS y Vanilla JavaScript.
- **Idioma:** La interfaz de usuario está localizada en español.

## Características del MVP (Producto Mínimo Viable)
Las funcionalidades principales de la aplicación permiten al usuario gestionar sus gastos:
- **Agregar un gasto:** Los usuarios pueden registrar un nuevo gasto proporcionando una descripción, el monto, la categoría y la fecha.
- **Ver gastos:** Los usuarios pueden visualizar una lista de todos los gastos registrados, ordenados del más reciente al más antiguo.
- **Eliminar un gasto:** Los usuarios pueden eliminar un gasto existente de la lista.

### Categorías de Gastos
Las categorías estándar permitidas para los gastos son:
- Comida
- Transporte
- Entretenimiento
- Servicios
- Otros

## Esquema de Base de Datos
La base de datos SQLite contiene una tabla principal llamada `expenses` con las siguientes columnas:
- `id`: Identificador único del gasto (INTEGER PRIMARY KEY AUTOINCREMENT).
- `description`: Descripción del gasto (TEXT NOT NULL).
- `amount`: Monto del gasto (REAL NOT NULL).
- `category`: Categoría del gasto (TEXT NOT NULL).
- `date`: Fecha del gasto (TEXT NOT NULL).
