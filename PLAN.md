# Plan del Proyecto: Control de Gastos Personales

## Arquitectura del Proyecto
La aplicación es un rastreador de gastos personales construido con las siguientes tecnologías:
- **Backend:** Python con el framework Flask.
- **Base de Datos:** SQLite para el almacenamiento de datos. La tabla principal se llama `expenses` y cuenta con las columnas: `id`, `description`, `amount`, `category` y `date`.
- **Frontend:** HTML, CSS y Vanilla JavaScript.
- **Interfaz de Usuario (UI):** Localizada en Español.

## Funcionalidades MVP (Producto Mínimo Viable)
- **Registro de Gastos:** Los usuarios pueden agregar un gasto especificando:
  - Descripción.
  - Monto.
  - Categoría (Comida, Transporte, Entretenimiento, Servicios, y Otros).
  - Fecha.
- **Visualización de Gastos:** Los usuarios pueden ver una lista de todos los gastos registrados, ordenados por fecha de manera descendente.
- **Eliminación de Gastos:** Los usuarios pueden eliminar un gasto existente de la lista.

## Entorno de Desarrollo Local
- El servidor de desarrollo local se ejecuta en `http://localhost:5000` por defecto.
- El servidor se inicia con el comando `python3 app.py`.
- Las dependencias se instalan vía `pip install -r requirements.txt`.
- Los tests unitarios se ejecutan usando `python3 -m unittest test_app.py`.
