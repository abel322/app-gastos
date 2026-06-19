# Plan y Arquitectura del Proyecto: Control de Gastos Personales

## Descripción General
Esta es una aplicación de Control de Gastos Personales diseñada para que los usuarios puedan registrar y gestionar sus gastos cotidianos. La interfaz de usuario (UI) está completamente localizada en español.

## Arquitectura

### Backend
- **Tecnología:** Python con el micro-framework Flask.
- **Servidor Local:** Por defecto, el servidor de desarrollo local se ejecuta en `http://localhost:5000`.
- **Rutas Principales:**
  - `GET /` - Sirve la página principal (`index.html`).
  - `GET /expenses` - Recupera la lista de todos los gastos registrados, ordenados por fecha de forma descendente.
  - `POST /expenses` - Permite registrar un nuevo gasto en la base de datos.
  - `DELETE /expenses/<id>` - Elimina un gasto específico según su ID.

### Base de Datos
- **Tecnología:** SQLite.
- **Archivo:** `expenses.db` (nota: este archivo no se comitea al repositorio).
- **Esquema (`expenses`):**
  - `id`: INTEGER PRIMARY KEY AUTOINCREMENT
  - `description`: TEXT NOT NULL
  - `amount`: REAL NOT NULL
  - `category`: TEXT NOT NULL
  - `date`: TEXT NOT NULL

### Frontend
- **Tecnologías:** HTML5, CSS3, y JavaScript puro (vanilla).
- **Archivos y Estructura:**
  - `templates/index.html`: Plantilla principal servida por Flask.
  - `static/style.css`: Estilos de la aplicación.
  - `static/script.js`: Lógica del lado del cliente para interactuar con la API (fetch, renderizado dinámico, eliminación de gastos).

## Características Principales
- **Registro de Gastos:** Los usuarios pueden ingresar la descripción, monto, categoría y fecha de un gasto.
- **Visualización:** Tabla dinámica que muestra todos los gastos previamente almacenados en la base de datos.
- **Eliminación:** Posibilidad de borrar un registro de gasto mediante un botón "Eliminar".

## Estándares del Proyecto
- **Categorías Estándar:** Comida, Transporte, Entretenimiento, Servicios y Otros.
- **Ignorados en Control de Versiones:** Archivos de log (`*.log`) y de base de datos (`*.db`) están configurados en `.gitignore`.
- **Pruebas:** Existen pruebas unitarias desarrolladas con `unittest` (`test_app.py`) para asegurar el funcionamiento del backend.
