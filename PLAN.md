# Control de Gastos Personales

## Arquitectura del Proyecto

Este proyecto es una aplicación web para el seguimiento de gastos personales. La arquitectura se basa en las siguientes tecnologías:

- **Backend:** Flask (Python)
- **Base de Datos:** SQLite
- **Frontend:** HTML, CSS, y JavaScript (Vanilla)

## Características de la Aplicación

- **Agregar Gastos:** Los usuarios pueden agregar nuevos gastos proporcionando una descripción, monto, categoría y fecha.
- **Listar Gastos:** Los gastos registrados se muestran en una tabla ordenados por fecha.
- **Eliminar Gastos:** Los usuarios pueden eliminar gastos existentes de la lista.
- **Categorías Estándar:** Los gastos se pueden categorizar en: Comida, Transporte, Entretenimiento, Servicios y Otros.

## Estructura de Directorios

- `app.py`: Archivo principal del servidor Flask y definición de rutas.
- `expenses.db`: Base de datos SQLite (no se incluye en el control de versiones).
- `templates/`: Plantillas HTML (ej. `index.html`).
- `static/`: Archivos estáticos como estilos (`style.css`) y scripts de cliente (`script.js`).
- `test_app.py`: Pruebas unitarias para el backend.
