# Plan del Proyecto: Control de Gastos Personales

## Arquitectura del Proyecto
- **Backend:** Desarrollado en Python utilizando el framework Flask.
- **Base de Datos:** SQLite (archivo `expenses.db`). La estructura incluye una tabla `expenses` con las columnas: `id`, `description`, `amount`, `category` y `date`.
- **Frontend:** Construido con HTML, CSS y JavaScript nativo. Los archivos se sirven desde los directorios `templates/` y `static/`.

## Características del MVP (Producto Viable Mínimo)
Las funcionalidades del MVP están restringidas estrictamente a:
1. **Agregar gastos:** Permite registrar un gasto ingresando su descripción, monto, categoría y fecha.
2. **Ver gastos:** Permite visualizar una lista con los gastos registrados.

## Categorías Estándar
Las categorías estándar permitidas para los gastos son:
- Comida
- Transporte
- Entretenimiento
- Servicios
- Otros
