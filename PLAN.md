# Plan del Proyecto: Control de Gastos Personales

## Arquitectura
- **Backend:** Python con el framework Flask.
- **Base de Datos:** SQLite. Los datos se almacenan en el archivo `expenses.db`.
- **Frontend:** HTML, CSS y JavaScript vainilla. Los archivos estáticos se encuentran en el directorio `static/` y las plantillas en `templates/`.

## Características
- **Agregar Gastos:** Los usuarios pueden agregar nuevos gastos proporcionando una descripción, monto, categoría y fecha.
- **Listar Gastos:** La aplicación muestra una lista de todos los gastos registrados, ordenados por fecha de forma descendente.
- **Eliminar Gastos:** Los usuarios pueden eliminar gastos existentes de la lista.
