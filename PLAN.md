# Arquitectura y Características del Proyecto

## Descripción
Esta aplicación es un Tracker de Gastos Personales (Personal Expense Tracker) construido con un backend de Flask en Python, y un frontend en HTML, CSS y JavaScript (Vanilla). Utiliza una base de datos SQLite para almacenar la información de los gastos.

La interfaz de usuario está completamente en español y la aplicación está diseñada para correr localmente en http://localhost:5000 por defecto.

## Arquitectura

- **Backend (Python / Flask):**
  - Servidor: `app.py`. Maneja las rutas principales (`/`, `/expenses` para GET y POST, `/expenses/<id>` para DELETE) e interactúa con la base de datos SQLite.
  - Dependencias: Administradas a través de `requirements.txt`. El backend utiliza `flask`.
  - Pruebas: Un conjunto de pruebas unitarias está en `test_app.py` y se ejecutan con el módulo `unittest`.
  - Base de Datos: SQLite. Archivo de base de datos es `expenses.db` (no debe ser incluido en el repositorio). El esquema incluye una tabla `expenses` con las columnas: `id`, `description`, `amount`, `category` y `date`.

- **Frontend:**
  - Archivo Principal (HTML): `templates/index.html`.
  - Scripts: Lógica en el cliente alojada en `static/script.js`.
  - Estilos: Hoja de estilos alojada en `static/style.css`.
  - Comunicación: Se comunica asíncronamente (vía `fetch`) con la API de Flask para listar, agregar y eliminar gastos.

## Características

- **Agregar Gasto:** A través del formulario de la UI, se envían peticiones POST a la API `/expenses`.
- **Listar Gastos:** Carga todos los gastos de la base de datos haciendo GET a `/expenses`.
- **Eliminar Gastos:** Los gastos pueden ser borrados con peticiones DELETE a `/expenses/<id>`.
- **Categorías Estándar:** La aplicación categoriza los gastos en: Comida, Transporte, Entretenimiento, Servicios y Otros.

## Guías de Desarrollo

- **Pruebas:** Ejecutar `python3 -m unittest test_app.py` antes de cualquier confirmación de código (commit).
- **Ejecución:** Iniciar el servidor localmente con `python3 app.py`.
- **Pre-commit:** Se requiere completar todos los pasos pre-commit para asegurar una correcta validación, verificación y revisión de código.
