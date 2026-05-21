# Plan de Arquitectura y Características de la Aplicación de Gastos Personales

## Arquitectura del Proyecto

El proyecto de "Control de Gastos Personales" utiliza una arquitectura cliente-servidor tradicional.

### Backend
*   **Lenguaje y Framework:** Python con el framework Flask (`app.py`).
*   **Base de Datos:** SQLite (`expenses.db`), que se inicializa al arrancar la aplicación en modo desarrollo.
*   **API:** Proveé endpoints RESTful para la gestión de gastos (crear, leer, eliminar).

### Frontend
*   **Archivos:** `templates/index.html` sirve como interfaz de usuario principal.
*   **Estilos:** `static/style.css` contiene los estilos visuales de la aplicación.
*   **Interactividad:** `static/script.js` maneja la lógica del cliente (Vanilla JavaScript), incluyendo las llamadas a la API (fetch) para actualizar la vista dinámicamente sin recargar la página.

## Características Principales

1.  **Registro de Gastos:** Los usuarios pueden agregar nuevos gastos proporcionando descripción, monto, fecha y seleccionando una categoría.
2.  **Visualización:** El historial de gastos se muestra en una tabla ordenada cronológicamente (más recientes primero).
3.  **Eliminación:** Cada gasto en la lista tiene una opción para ser eliminado individualmente.
4.  **Categorías de Gastos:** Se utilizan las siguientes categorías estándar para clasificar los gastos:
    *   Comida
    *   Transporte
    *   Entretenimiento
    *   Servicios
    *   Otros
