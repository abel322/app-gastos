# Plan y Arquitectura: App de Gastos Personales

## Descripción General
Esta aplicación es un "Control de Gastos Personales" que permite a los usuarios llevar un registro de sus gastos. La interfaz de usuario (UI) está completamente en español.

## Arquitectura del Proyecto

*   **Backend:** Python con el framework Flask (`app.py`).
*   **Base de Datos:** SQLite (`expenses.db`). Se utiliza una tabla `expenses` con las columnas: `id`, `description`, `amount`, `category`, y `date`.
*   **Frontend:** HTML, CSS, y JavaScript "vanilla".
    *   Plantilla principal: `templates/index.html`
    *   Lógica del cliente: `static/script.js`
    *   Estilos: `static/style.css`

## Características Principales

1.  **Añadir Gastos:** Los usuarios pueden agregar nuevos gastos proporcionando descripción, monto, categoría y fecha.
2.  **Listar Gastos:** Se muestran todos los gastos en una tabla, ordenados por fecha.
3.  **Eliminar Gastos:** Los usuarios pueden eliminar gastos individuales.
4.  **Categorías Estándar:** Las categorías recomendadas o estándar para los gastos son:
    *   Comida
    *   Transporte
    *   Entretenimiento
    *   Servicios
    *   Otros

## Ejecución y Desarrollo

*   **Instalación de dependencias:** `pip install -r requirements.txt`
*   **Servidor de desarrollo:** `python3 app.py` (ejecuta el servidor en `http://localhost:5000` por defecto).
*   **Pruebas unitarias:** `python3 -m unittest test_app.py`
