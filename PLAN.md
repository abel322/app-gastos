# Plan del Proyecto: App de Gastos Personales

## Arquitectura

El proyecto es una aplicación web de seguimiento de gastos personales (Personal Expense Tracker). La arquitectura consta de:

- **Backend**: Aplicación en Python utilizando el micro-framework Flask. Provee una API RESTful y renderiza las plantillas HTML.
- **Base de Datos**: Base de datos SQLite (`expenses.db`) utilizada para almacenar los gastos en una tabla única `expenses`.
- **Frontend**: Una interfaz de usuario simple construida con HTML, CSS (`style.css`), y Vanilla JavaScript (`script.js`). El frontend se comunica asíncronamente con la API del backend.

## Funcionalidades

- **Añadir Gasto**: Los usuarios pueden agregar nuevos gastos proporcionando descripción, monto, categoría (Comida, Transporte, Entretenimiento, Servicios y Otros) y fecha.
- **Visualizar Gastos**: Los gastos se listan ordenados por fecha en formato de tabla.
- **Eliminar Gasto**: Los usuarios pueden eliminar un gasto existente de la lista.

## Estructura de Archivos

- `app.py`: El servidor principal de Flask y las rutas de la API.
- `expenses.db`: La base de datos SQLite (se genera dinámicamente, no debe subirse al repositorio).
- `test_app.py`: Suite de pruebas unitarias para el backend.
- `requirements.txt`: Lista de dependencias de Python.
- `templates/index.html`: Plantilla principal del frontend.
- `static/script.js`: Lógica del lado del cliente en JavaScript.
- `static/style.css`: Estilos de la aplicación.
