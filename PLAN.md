# Control de Gastos Personales

## Arquitectura del Proyecto
- **Backend:** Python Flask
- **Base de Datos:** SQLite
  - Tabla: `expenses`
  - Columnas: `id`, `description`, `amount`, `category`, `date`
- **Frontend:** HTML, CSS, y JavaScript vainilla (Vanilla JS)

## Características del MVP (Producto Mínimo Viable)
- Interfaz de usuario (UI) localizada en Español.
- Capacidad para agregar nuevos gastos (descripción, monto, categoría y fecha).
- Categorías estándar de gastos: Comida, Transporte, Entretenimiento, Servicios y Otros.
- Capacidad para ver la lista de todos los gastos ordenados por fecha.
- Capacidad para eliminar un gasto existente.
- Servidor de desarrollo local que corre en http://localhost:5000 por defecto.

## Ejecución del proyecto
- Instalar dependencias: `pip install -r requirements.txt`
- Iniciar el servidor: `python3 app.py`
- Ejecutar pruebas: `python3 -m unittest test_app.py`
