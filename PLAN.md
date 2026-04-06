# Plan de la Aplicación de Gastos Personales

## Arquitectura del Proyecto
La aplicación es un rastreador de gastos personales (Personal Expense Tracker) construido con:
- **Backend:** Python usando el framework Flask.
- **Base de Datos:** SQLite.
- **Frontend:** HTML, CSS y JavaScript vainilla.
- **Idioma de la Interfaz:** Español.

## Funcionalidades del Producto Mínimo Viable (MVP)
Las características principales incluyen:
- **Agregar Gastos:** Los usuarios pueden ingresar la descripción, el monto, la categoría y la fecha del gasto.
- **Ver Gastos:** Los usuarios pueden visualizar una lista de todos los gastos registrados, ordenados por fecha.
- **Eliminar Gastos:** Los usuarios pueden borrar gastos específicos de la lista.

## Esquema de la Base de Datos SQLite
La base de datos contiene una única tabla llamada `expenses` con las siguientes columnas:
- `id`: Número entero, clave primaria autoincremental.
- `description`: Texto (no nulo).
- `amount`: Número real (no nulo).
- `category`: Texto (no nulo).
- `date`: Texto (no nulo).

## Categorías Estándar de Gastos
Las categorías predefinidas para clasificar los gastos son:
- Comida
- Transporte
- Entretenimiento
- Servicios
- Otros
