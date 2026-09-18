# Plan de Arquitectura y Características del Proyecto: Control de Gastos Personales

## Descripción General
Este proyecto es una aplicación web para el control de gastos personales. Permite a los usuarios llevar un registro de sus gastos diarios, clasificándolos en diferentes categorías estándar.

## Arquitectura
La aplicación sigue una arquitectura cliente-servidor clásica con las siguientes tecnologías:

- **Backend:** Python con Flask.
- **Base de Datos:** SQLite (`expenses.db`), utilizando la tabla `expenses` (id, description, amount, category, date).
- **Frontend:** HTML5, CSS3, y JavaScript puro (Vanilla JS).
- **Comunicación:** API RESTful mediante JSON.

## Características Principales

### 1. Agregar Gastos
- Los usuarios pueden agregar nuevos gastos proporcionando:
  - Descripción del gasto.
  - Monto (con soporte para decimales).
  - Categoría (seleccionable mediante un menú desplegable con opciones predefinidas: Comida, Transporte, Entretenimiento, Servicios y Otros).
  - Fecha del gasto.

### 2. Ver Gastos
- La aplicación muestra una lista de todos los gastos registrados en la base de datos, ordenados de forma descendente por fecha.
- Se presenta en formato de tabla para facilitar la lectura.

### 3. Eliminar Gastos
- Cada fila de gasto en la tabla incluye un botón de "Eliminar".
- Al hacer clic, se solicita confirmación antes de borrar permanentemente el gasto de la base de datos y actualizar la vista de la lista.

## Estructura de Directorios
- `app.py`: Archivo principal del servidor Flask que define las rutas de la API.
- `test_app.py`: Pruebas unitarias para los endpoints de la API usando `unittest`.
- `requirements.txt`: Lista de dependencias del entorno de Python.
- `templates/index.html`: Vista principal y única de la aplicación.
- `static/style.css`: Hojas de estilo para la apariencia de la aplicación.
- `static/script.js`: Lógica del cliente para interactuar con la API del backend.
