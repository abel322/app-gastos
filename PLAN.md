# Plan de la Aplicación de Gastos Personales

## Arquitectura del Proyecto
- **Backend:** Python con Flask.
- **Base de Datos:** SQLite (archivo `expenses.db`).
- **Frontend:** HTML, CSS y JavaScript (Vanilla), localizado en español. Archivos estáticos servidos desde el directorio `static/` y plantillas desde `templates/`.

## Funcionalidades del MVP
El Producto Mínimo Viable (MVP) está estrictamente restringido a las siguientes funcionalidades:
1. **Añadir gastos:** El usuario puede ingresar un gasto con su descripción, monto, categoría (Comida, Transporte, Entretenimiento, Servicios y Otros) y fecha.
2. **Ver gastos:** El usuario puede visualizar una lista con todos los gastos previamente añadidos, ordenados por fecha de manera descendente.
