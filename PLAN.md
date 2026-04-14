# Personal Expense Tracker - Plan & Architecture

## Arquitectura del Proyecto
- **Backend:** Desarrollado en Python utilizando el framework Flask.
- **Base de Datos:** SQLite, para almacenamiento ligero y local (`expenses.db`).
- **Frontend:** HTML, CSS y JavaScript vanilla (sin frameworks).

## Funcionalidades del MVP (Producto Mínimo Viable)
- Visualización de un listado de todos los gastos registrados, ordenados cronológicamente por fecha descendente.
- Formulario para agregar un nuevo gasto, requiriendo los siguientes campos: descripción, monto, categoría (seleccionable de una lista estándar) y fecha.
- Opción para eliminar gastos existentes.
- Categorías de gastos estándar soportadas: Comida, Transporte, Entretenimiento, Servicios y Otros.
