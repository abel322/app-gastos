# Plan del Proyecto: App de Control de Gastos Personales

## Arquitectura del Proyecto
La aplicación es un rastreador de gastos personales (Personal Expense Tracker) construido con la siguiente arquitectura:
- **Backend:** Desarrollado en Python utilizando el framework Flask.
- **Base de Datos:** SQLite. El archivo de base de datos es `expenses.db` e incluye una tabla `expenses` con las columnas: `id`, `description`, `amount`, `category` y `date`.
- **Frontend:** Construido con HTML, CSS y JavaScript puro (vanilla). La interfaz de usuario está en español.
- **Estructura de Archivos:**
  - El backend sirve el frontend mediante `templates/index.html`.
  - Los archivos estáticos (`script.js`, `style.css`) están localizados en el directorio `static/`.
- **Servidor Local:** Por defecto corre en `http://localhost:5000`. Se inicia con `python3 app.py`.

## Características del MVP (Producto Mínimo Viable)
- **Registro de Gastos:** Los usuarios pueden agregar gastos ingresando descripción, monto, categoría y fecha.
- **Visualización de Gastos:** Los gastos registrados se muestran en una tabla ordenados por fecha.
- **Eliminación de Gastos:** Opción para eliminar gastos existentes.
- **Categorías Estándar:** Las categorías permitidas para los gastos incluyen: Comida, Transporte, Entretenimiento, Servicios y Otros.
- **Localización:** Toda la aplicación (interfaz) se presenta en español.

## Pruebas y Dependencias
- Las dependencias se instalan utilizando `pip install -r requirements.txt`.
- Las pruebas unitarias se ejecutan mediante `python3 -m unittest test_app.py`.
