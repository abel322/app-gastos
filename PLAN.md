# Plan y Arquitectura del Proyecto: Control de Gastos Personales

## Descripción General
Este proyecto es una aplicación web para el control de gastos personales (Personal Expense Tracker). La interfaz de usuario (UI) está localizada en español. Permite a los usuarios registrar sus gastos diarios, ver el historial de gastos, y eliminarlos.

## Arquitectura
La aplicación sigue una arquitectura cliente-servidor clásica:

### Backend
- **Framework:** Python con Flask.
- **Base de Datos:** SQLite (`expenses.db`).
- **Lógica principal:**
  - El archivo `app.py` contiene las rutas para la API REST y sirve la interfaz web.
  - La base de datos tiene una tabla `expenses` con las columnas: `id`, `description`, `amount`, `category`, `date`.

### Frontend
- **Tecnologías:** HTML, CSS, JavaScript (Vanilla).
- **Archivos:**
  - `templates/index.html`: Estructura principal de la aplicación.
  - `static/style.css`: Estilos de la aplicación.
  - `static/script.js`: Lógica del lado del cliente para interactuar con la API REST (fetch).

## Características
- **Agregar Gasto:** Los usuarios pueden ingresar la descripción, monto, categoría (Comida, Transporte, Entretenimiento, Servicios, Otros) y fecha de un gasto.
- **Listar Gastos:** Los gastos registrados se muestran en una tabla ordenados por fecha descendente.
- **Eliminar Gasto:** Los usuarios pueden borrar un gasto específico de la lista.

## Entorno de Desarrollo y Pruebas
- **Servidor local:** El servidor de desarrollo se ejecuta en `http://localhost:5000` por defecto. Iniciar con `python3 app.py`.
- **Dependencias:** Instaladas vía `pip install -r requirements.txt`.
- **Pruebas:** Pruebas unitarias definidas en `test_app.py`, se pueden ejecutar con `python3 -m unittest test_app.py`.
- **Verificación Frontend:** Se puede utilizar Playwright para verificar la interfaz.
