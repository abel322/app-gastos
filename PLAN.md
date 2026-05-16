# Plan del Proyecto: App de Gastos Personales

## Arquitectura del Proyecto
El proyecto es un Rastreador de Gastos Personales (Personal Expense Tracker) que utiliza la siguiente pila tecnológica:
- **Backend:** Python con el framework Flask.
- **Base de Datos:** SQLite. El archivo de la base de datos es `expenses.db` e incluye una tabla `expenses` con las columnas: `id`, `description`, `amount`, `category`, y `date`.
- **Frontend:** Interfaz de usuario servida mediante `templates/index.html` e implementada utilizando HTML, CSS y JavaScript puro (vanilla), localizados en el directorio `static/`.

## Características del MVP (Producto Mínimo Viable)
Las funcionalidades del MVP están **estrictamente restringidas** a:
1. **Agregar gastos:** Permitir al usuario registrar un nuevo gasto ingresando descripción, monto, categoría y fecha.
2. **Ver gastos:** Permitir al usuario visualizar la lista de todos los gastos registrados.

*Nota: Cualquier otra funcionalidad (como la eliminación, que actualmente existe en el código, u otras características avanzadas) queda fuera del estricto enfoque del MVP documentado en este plan, aunque su soporte básico esté presente en el código.*

## Categorías Estándar
Los gastos se clasificarán utilizando las siguientes categorías estándar:
- Comida
- Transporte
- Entretenimiento
- Servicios
- Otros
