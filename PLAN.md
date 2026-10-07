# Control de Gastos Personales

## Arquitectura del Proyecto
El proyecto es una aplicación web para el control de gastos personales (Personal Expense Tracker).
Está construido con la siguiente tecnología:
- **Backend**: Python con el framework Flask.
- **Base de Datos**: SQLite, utilizando un archivo local para persistencia (`expenses.db`).
- **Frontend**: HTML, CSS, y JavaScript (Vanilla), todo en un formato Single Page Application simple.

La base de datos tiene una única tabla `expenses` con las columnas: `id`, `description`, `amount`, `category`, y `date`.

## Características (Features)
Las funcionalidades principales y actuales del sistema son:
1. **Agregar gastos**: Los usuarios pueden añadir nuevos registros de gastos introduciendo una descripción, el monto, la categoría y la fecha.
2. **Listar gastos**: Los gastos registrados se listan de manera dinámica en la página principal, ordenados por fecha.
3. **Eliminar gastos**: Los usuarios pueden eliminar gastos previamente registrados.

## Categorías de Gastos
Las categorías estándar de los gastos son:
- Comida
- Transporte
- Entretenimiento
- Servicios
- Otros
