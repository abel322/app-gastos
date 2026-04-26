# Plan del Proyecto: Aplicación de Gastos Personales

## Arquitectura del Proyecto
- **Backend:** Desarrollado con Python utilizando el framework web Flask.
- **Base de Datos:** SQLite (archivo `expenses.db`). Cuenta con una tabla `expenses` que contiene las columnas: `id`, `description`, `amount`, `category` y `date`.
- **Frontend:** Implementado con HTML, CSS y JavaScript (Vanilla JS).
- **Entorno de Desarrollo:** El servidor local corre en http://localhost:5000 por defecto (`python3 app.py`).

## Características del MVP (Producto Viable Mínimo)
1. **Listado de Gastos:** Visualizar todos los gastos registrados, mostrados de forma descendente según la fecha.
2. **Registro de Gastos:** Capacidad de añadir un nuevo gasto proporcionando:
   - Descripción del gasto.
   - Monto gastado.
   - Categoría del gasto. Las categorías estándar definidas son: *Comida, Transporte, Entretenimiento, Servicios y Otros*.
   - Fecha en la que se realizó el gasto.
3. **Eliminación de Gastos:** Posibilidad de borrar un gasto de la base de datos de manera definitiva.
4. **Localización:** Toda la interfaz de usuario está en español.

## Estructura de Archivos
- `app.py`: Archivo principal del servidor backend Flask y configuración de la base de datos.
- `test_app.py`: Pruebas unitarias para los endpoints.
- `requirements.txt`: Dependencias del backend.
- `templates/index.html`: Estructura principal de la interfaz web.
- `static/script.js`: Lógica del frontend para conectarse a la API REST.
- `static/style.css`: Estilos visuales de la aplicación.
