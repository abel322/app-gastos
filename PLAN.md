# Plan: Personal Expense Tracker (App de Gastos Personales)

## 1. Arquitectura del Proyecto
- **Backend:** Python con Flask. El backend sirve el frontend y provee una API REST para administrar los gastos.
- **Frontend:** HTML, CSS y Vanilla JavaScript. Se ubica en `templates/index.html` y los archivos estáticos en el directorio `static/` (`script.js` y `style.css`).
- **Base de Datos:** SQLite. El archivo de la base de datos se llama `expenses.db`.
- **Idioma de UI:** La interfaz de usuario de la aplicación está localizada en español.

## 2. Esquema de Base de Datos
La base de datos SQLite consiste en una sola tabla principal:
- **Tabla:** `expenses`
- **Columnas:**
  - `id` (INTEGER PRIMARY KEY)
  - `description` (TEXT)
  - `amount` (REAL)
  - `category` (TEXT)
  - `date` (TEXT)

## 3. Categorías de Gastos Estándar
Las categorías estándar permitidas para la aplicación son:
- Comida
- Transporte
- Entretenimiento
- Servicios
- Otros

## 4. Ejecución y Desarrollo
- **Instalación de Dependencias:** Ejecutar `pip install -r requirements.txt`
- **Servidor de Desarrollo:** Se inicia ejecutando `python3 app.py`. Por defecto, corre en `http://localhost:5000`.
- **Ejecución de Pruebas Unitarias:** Para correr las pruebas ejecutar `python3 -m unittest test_app.py`.
