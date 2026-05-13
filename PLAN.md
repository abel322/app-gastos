# Plan de Arquitectura y Funcionalidades del MVP

## Arquitectura del Proyecto
- **Backend:** Desarrollado en Python utilizando el framework Flask.
- **Base de Datos:** SQLite (`expenses.db`), con una tabla `expenses` (columnas: `id`, `description`, `amount`, `category`, `date`).
- **Frontend:** Implementado con HTML, CSS y JavaScript vainilla (archivos estáticos en la carpeta `static/` y plantillas en `templates/`).

## Funcionalidades del MVP
Las funcionalidades de este Producto Mínimo Viable (MVP) están estrictamente restringidas a:
1. **Agregar gastos:** Permitir al usuario introducir la descripción, monto, categoría (Comida, Transporte, Entretenimiento, Servicios, Otros) y fecha del gasto.
2. **Ver gastos:** Mostrar un listado de los gastos previamente agregados.
