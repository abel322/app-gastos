# Arquitectura del Proyecto

## Descripción
Este proyecto es un Rastreador de Gastos Personales (Personal Expense Tracker).

## Backend
El backend está construido en Python utilizando el framework **Flask**.
El servidor local de desarrollo corre en `http://localhost:5000` por defecto.

## Base de Datos
Se utiliza **SQLite** para el almacenamiento de datos.
El archivo de la base de datos es `expenses.db`.
El esquema consiste en una tabla `expenses` con las siguientes columnas:
- `id` (INTEGER PRIMARY KEY)
- `description` (TEXT)
- `amount` (REAL)
- `category` (TEXT)
- `date` (TEXT)

## Frontend
El frontend está construido con HTML, CSS, y JavaScript vainilla (vanilla JS).
La aplicación es servida por el backend usando la plantilla `templates/index.html` y archivos estáticos ubicados en el directorio `static/` (`script.js`, `style.css`).

## MVP (Producto Mínimo Viable)
Las características del MVP están restringidas estrictamente a las siguientes funcionalidades:
1.  **Agregar un gasto**: Permite a los usuarios ingresar la descripción, el monto, la categoría y la fecha de un gasto.
2.  **Ver gastos**: Permite a los usuarios ver una lista de todos los gastos que han ingresado.

## Categorías Estándar
Las categorías estándar de gastos definidas para la aplicación son:
- Comida
- Transporte
- Entretenimiento
- Servicios
- Otros

## Configuración y Ejecución
- Instalar dependencias: `pip install -r requirements.txt`
- Ejecutar el servidor: `python3 app.py`
- Ejecutar pruebas unitarias: `python3 -m unittest test_app.py`
