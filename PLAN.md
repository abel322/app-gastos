# Plan del Proyecto: Aplicación de Control de Gastos Personales

## Arquitectura
- **Backend:** Python con el framework Flask.
- **Base de Datos:** SQLite. El archivo de la base de datos se llama `expenses.db` (no debe ser commiteado al repositorio).
- **Frontend:** HTML, CSS y JavaScript (Vanilla JS).

## Características de la Aplicación
- Interfaz de usuario completamente en español.
- Formulario para agregar nuevos gastos (descripción, monto, categoría y fecha).
- Las categorías estándar de gastos son: Comida, Transporte, Entretenimiento, Servicios y Otros.
- Visualización de los gastos registrados en una tabla ordenados por fecha.
- Funcionalidad para eliminar gastos existentes.

## Dependencias
- Las dependencias se pueden instalar ejecutando `pip install -r requirements.txt`. Actualmente incluye `Flask`.

## Pruebas
- Las pruebas unitarias se encuentran en `test_app.py` y se pueden ejecutar usando `python3 -m unittest test_app.py`.
- Se utiliza una base de datos temporal en las pruebas para asegurar que el entorno de producción no se vea afectado.
