# Plan del Proyecto: Control de Gastos Personales

## Arquitectura

El proyecto es un "Control de Gastos Personales" (Personal Expense Tracker).

### Backend
- Está desarrollado utilizando **Python** con el framework **Flask**.
- El servidor de desarrollo local por defecto se ejecuta en `http://localhost:5000` (`python3 app.py`).
- Provee los siguientes endpoints (API REST):
  - `GET /`: Sirve el frontend usando `templates/index.html`.
  - `GET /expenses`: Retorna la lista de todos los gastos.
  - `POST /expenses`: Agrega un nuevo gasto.
  - `DELETE /expenses/<id>`: Elimina un gasto existente.

### Base de Datos
- Utiliza **SQLite** como motor de base de datos (`expenses.db`).
- **Nota:** Los archivos de base de datos no deben subirse al repositorio.
- Contiene una tabla llamada `expenses` con el siguiente esquema:
  - `id` (INTEGER PRIMARY KEY AUTOINCREMENT)
  - `description` (TEXT NOT NULL)
  - `amount` (REAL NOT NULL)
  - `category` (TEXT NOT NULL)
  - `date` (TEXT NOT NULL)

### Frontend
- Construido con HTML, CSS y Vanilla JavaScript.
- La interfaz de usuario (UI) está localizada en español.
- Archivos estáticos (`script.js`, `style.css`) ubicados en el directorio `static/`.
- Permite la interacción con el backend a través de `fetch`.

## Características Actuales (Features)
- **Añadir gastos**: A través de un formulario, el usuario puede introducir descripción, monto, categoría y fecha para registrar un nuevo gasto.
- **Listar gastos**: Los gastos registrados se listan de forma tabular y cronológica descendente.
- **Eliminar gastos**: Cada gasto en la lista cuenta con un botón para ser eliminado (requiere confirmación del usuario).

## Dependencias y Pruebas
- Las dependencias de la aplicación pueden instalarse vía `pip install -r requirements.txt`.
- Cuenta con una suite de pruebas unitarias implementada con `unittest` (`test_app.py`). Para correrla usar `python3 -m unittest test_app.py`.
