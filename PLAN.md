# Plan del Proyecto: Control de Gastos Personales

## Arquitectura
Este proyecto es un rastreador de gastos personales (Personal Expense Tracker).
La arquitectura se divide en:
- **Backend:** Python con Flask.
- **Base de Datos:** SQLite (el archivo es `expenses.db` con una tabla `expenses`).
- **Frontend:** Interfaz web construida con HTML, CSS, y JavaScript puro (vanilla). La UI está en español.

## Características
- Agregar un nuevo gasto (descripción, monto, categoría y fecha).
- Ver la lista de todos los gastos.
- Eliminar un gasto existente.

## Categorías de Gastos
Las categorías estándar para los gastos son:
- Comida
- Transporte
- Entretenimiento
- Servicios
- Otros
