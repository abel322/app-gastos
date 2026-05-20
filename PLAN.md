# Plan de Aplicación de Gastos Personales

## Arquitectura

La aplicación es un rastreador de gastos personales (Personal Expense Tracker) construido con:
- **Backend**: Python con Flask, ofreciendo una API RESTful para gestionar gastos.
- **Base de Datos**: SQLite, usando un esquema simple de tabla `expenses`.
- **Frontend**: HTML, CSS y JavaScript vainilla, interactuando con el backend vía peticiones asíncronas (`fetch`).
- **Localización**: La interfaz de usuario (UI) está localizada en Español.
- **Pruebas**: Suite de pruebas unitarias implementada con `unittest` en Python.

## Características (Features)

- **Añadir Gasto**: Los usuarios pueden añadir nuevos gastos especificando descripción, monto, categoría y fecha.
- **Listar Gastos**: Los usuarios pueden ver la lista de todos sus gastos, ordenados desde el más reciente.
- **Eliminar Gasto**: Los usuarios pueden borrar gastos existentes con confirmación previa.
- **Categorías Estándar**: Comida, Transporte, Entretenimiento, Servicios y Otros.

## Rutas del Backend

- `GET /`: Devuelve el archivo `templates/index.html`.
- `GET /expenses`: Obtiene todos los gastos registrados.
- `POST /expenses`: Crea y registra un nuevo gasto.
- `DELETE /expenses/<id>`: Elimina el gasto con el identificador `<id>`.

## Esquema de Base de Datos (`expenses.db`)

Tabla `expenses`:
- `id` (INTEGER PRIMARY KEY AUTOINCREMENT)
- `description` (TEXT NOT NULL)
- `amount` (REAL NOT NULL)
- `category` (TEXT NOT NULL)
- `date` (TEXT NOT NULL)

## Despliegue Local

- Instalar dependencias: `pip install -r requirements.txt`
- Correr tests: `python3 -m unittest test_app.py`
- Iniciar aplicación: `python3 app.py`
- Acceso: http://localhost:5000