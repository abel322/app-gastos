# Plan del Proyecto: App de Gastos Personales

## Arquitectura del Proyecto
- **Backend:** Python con Flask.
- **Base de Datos:** SQLite (`expenses.db`).
- **Frontend:** HTML, CSS y JavaScript nativo (Vanilla JS). El backend sirve el frontend mediante `templates/index.html` y los archivos estáticos desde el directorio `static/`.

## Funcionalidades del MVP (Producto Mínimo Viable)
Las funcionalidades iniciales están estrictamente restringidas a:
1. **Agregar gastos:** Los usuarios pueden registrar un nuevo gasto con su descripción, cantidad, categoría (Comida, Transporte, Entretenimiento, Servicios u Otros) y fecha.
2. **Ver gastos:** Los usuarios pueden visualizar una lista de los gastos previamente registrados.

*Nota: No se contemplan en esta fase otras funcionalidades más allá de agregar y visualizar.*