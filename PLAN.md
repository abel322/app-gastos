# Control de Gastos Personales

## Arquitectura del Proyecto
Este proyecto es una aplicación de seguimiento de gastos personales (Personal Expense Tracker).

*   **Backend:** Python con el framework Flask.
*   **Base de Datos:** SQLite (`expenses.db`). No se deben hacer commits de este archivo.
*   **Frontend:** HTML, CSS y JavaScript (vanilla). La interfaz de usuario está localizada en español.

## Características
*   Visualizar la lista de gastos.
*   Agregar un nuevo gasto.
*   Eliminar un gasto existente (esta funcionalidad probada no debe eliminarse).

## Esquema de la Base de Datos
La base de datos SQLite tiene una tabla llamada `expenses` con las siguientes columnas:
*   `id` (INTEGER PRIMARY KEY AUTOINCREMENT)
*   `description` (TEXT NOT NULL)
*   `amount` (REAL NOT NULL)
*   `category` (TEXT NOT NULL)
*   `date` (TEXT NOT NULL)

## Categorías Estándar
Las categorías de gastos estándar de la aplicación son:
*   Comida
*   Transporte
*   Entretenimiento
*   Servicios
*   Otros

## Archivos Principales
*   `app.py`: El servidor backend Flask.
*   `test_app.py`: Pruebas unitarias ejecutadas con `python3 -m unittest test_app.py`.
*   `templates/index.html`: La vista principal del frontend servida por Flask.
*   `static/style.css`: La hoja de estilos.
*   `static/script.js`: La lógica del cliente para interactuar con la API del backend.
