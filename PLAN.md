# Plan de la Aplicación de Gastos Personales

## Arquitectura del Proyecto
- **Backend:** Desarrollado en Python utilizando el framework Flask.
- **Base de Datos:** SQLite, almacenada localmente en el archivo `expenses.db`.
- **Frontend:** Construido con HTML, CSS y JavaScript (Vanilla), servido desde las carpetas `templates/` y `static/`.

## Esquema de la Base de Datos
La base de datos contiene una tabla `expenses` con las siguientes columnas:
- `id`: Identificador único (INTEGER PRIMARY KEY AUTOINCREMENT).
- `description`: Descripción del gasto (TEXT).
- `amount`: Monto del gasto (REAL).
- `category`: Categoría del gasto (TEXT).
- `date`: Fecha del gasto (TEXT).

## Características Principales
1. **Agregar Gastos:** Interfaz para registrar nuevos gastos, solicitando descripción, monto, categoría y fecha.
2. **Listar Gastos:** Visualización de todos los gastos registrados.
3. **Eliminar Gastos:** Funcionalidad para eliminar gastos individuales de la lista y la base de datos.

## Categorías Estándar
Las categorías estándar definidas para los gastos son:
- Comida
- Transporte
- Entretenimiento
- Servicios
- Otros

## Ejecución Local
- El servidor de desarrollo local se ejecuta en `http://localhost:5000` por defecto.
- Para iniciar el servidor: `python3 app.py`
- Las dependencias se pueden instalar con: `pip install -r requirements.txt`
- Para correr las pruebas unitarias: `python3 -m unittest test_app.py`
