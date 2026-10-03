# Plan del Proyecto: Control de Gastos Personales

## Arquitectura
La aplicación es una herramienta de seguimiento de gastos personales (Personal Expense Tracker) construida con:
- **Backend:** Python con el framework Flask.
- **Base de datos:** SQLite (archivo local `expenses.db`).
- **Frontend:** HTML, CSS y Vanilla JavaScript puro, integrado a través de plantillas servidas por el backend.

## Características de la aplicación
La aplicación permite a los usuarios gestionar sus gastos financieros mediante las siguientes funcionalidades:
- **Visualizar gastos:** Listar todos los gastos registrados en orden cronológico, mostrando la descripción, monto, categoría y fecha.
- **Añadir gastos:** Ingresar un nuevo gasto indicando:
  - Descripción
  - Monto
  - Categoría (opciones estándar: Comida, Transporte, Entretenimiento, Servicios, y Otros)
  - Fecha
- **Eliminar gastos:** Eliminar un gasto existente de la lista.

## Estructura
- El servidor backend arranca desde `app.py`.
- Las rutas del API gestionan la obtención, inserción y borrado de los gastos (`GET /expenses`, `POST /expenses`, `DELETE /expenses/<id>`).
- El frontend se renderiza con el archivo `templates/index.html` y utiliza archivos estáticos que se encuentran en la carpeta `static/` (`script.js`, `style.css`).
