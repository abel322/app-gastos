# Plan del Proyecto: Aplicación de Control de Gastos Personales

## Arquitectura del Proyecto
El proyecto sigue una arquitectura cliente-servidor básica con las siguientes tecnologías:
- **Backend:** Python con el framework Flask (`app.py`).
- **Base de Datos:** SQLite (`expenses.db`), la cual cuenta con una tabla `expenses` (id, description, amount, category, date).
- **Frontend:** Archivos estáticos y plantillas. Se utiliza HTML (`templates/index.html`), CSS (`static/style.css`) y JavaScript Vanilla (`static/script.js`).

## Funcionalidades Actuales
- **Añadir Gastos:** Se pueden registrar nuevos gastos proporcionando descripción, monto, categoría y fecha. Las categorías estándar de gastos son: Comida, Transporte, Entretenimiento, Servicios, y Otros.
- **Listar Gastos:** Los gastos registrados se listan en orden descendente de fecha en la página principal.
- **Eliminar Gastos:** Los usuarios pueden eliminar gastos haciendo clic en el botón de eliminación de un registro.

## Detalles de Desarrollo
- La aplicación se encuentra localizada en Español.
- El servidor de desarrollo local se levanta por defecto en http://localhost:5000.
- Las dependencias del proyecto se encuentran en `requirements.txt`.
- Las pruebas unitarias se ejecutan utilizando `python3 -m unittest test_app.py`.
