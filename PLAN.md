# Plan del Proyecto: App de Gastos Personales

## Arquitectura del Proyecto
El proyecto es una aplicación de seguimiento de gastos personales (Personal Expense Tracker) con la siguiente arquitectura:
- **Backend:** Python con el framework Flask.
- **Base de Datos:** SQLite (`expenses.db`), con una tabla `expenses` que incluye `id`, `description`, `amount`, `category`, y `date`.
- **Frontend:** HTML, CSS y Vanilla JavaScript.

## Características del MVP (Producto Viable Mínimo)
El MVP incluye las siguientes funcionalidades:
1. **Agregar Gastos:** Formulario para registrar un nuevo gasto con descripción, monto, categoría y fecha.
2. **Visualizar Gastos:** Lista de todos los gastos registrados, ordenados por fecha.
3. **Eliminar Gastos:** Opción para borrar un gasto de la lista y la base de datos.

## Categorías Estándar de Gastos
Las categorías estándar definidas para los gastos son:
- Comida
- Transporte
- Entretenimiento
- Servicios
- Otros
