# Plan de Desarrollo: Gestor de Gastos Personales

## Arquitectura del Proyecto

- **Backend:** Aplicación Flask escrita en Python.
- **Base de Datos:** SQLite, usando el archivo `expenses.db`.
- **Frontend:** HTML, CSS, y JavaScript vanilla (Vanilla JS). Los archivos de frontend se sirven mediante plantillas en `templates/` y archivos estáticos en `static/`.

## Características del MVP (Producto Mínimo Viable)

El MVP está estrictamente restringido a las siguientes características esenciales:

1. **Añadir Gastos:** Permitir al usuario registrar un nuevo gasto ingresando la descripción, cantidad, categoría y fecha.
2. **Ver Gastos:** Mostrar una lista de todos los gastos registrados, ordenados cronológicamente (más recientes primero).

### Categorías Estándar

Las categorías de gastos soportadas por la aplicación son:
- Comida
- Transporte
- Entretenimiento
- Servicios
- Otros

## Consideraciones Adicionales

- La base de datos es inicializada automáticamente en el archivo `expenses.db` si no existe.
- Los archivos `.db` y los archivos de registro (`*.log`) no deben incluirse en el control de versiones.
- La aplicación se ejecuta de forma local en `http://localhost:5000`.
- Todas las respuestas de datos estructurados se manejan en formato JSON.