# Plan del Proyecto: Rastreador de Gastos Personales (MVP)

## Arquitectura del Proyecto
El proyecto está construido utilizando las siguientes tecnologías:
- **Backend:** Python con el framework Flask.
- **Base de Datos:** SQLite.
- **Frontend:** HTML, CSS y JavaScript (Vanilla).

## Características del Producto Mínimo Viable (MVP)
El MVP incluye un sistema básico para añadir, visualizar y eliminar gastos personales.

### Interfaz de Usuario (UI)
- La interfaz de usuario está completamente localizada en español.
- Permite ingresar nuevos gastos a través de un formulario.
- Muestra el historial de gastos ordenados por fecha de forma descendente.
- Proporciona la funcionalidad para eliminar gastos registrados.

### Esquema de la Base de Datos
La aplicación utiliza una tabla llamada `expenses` en SQLite con el siguiente esquema:
- `id`: Identificador único del gasto (INTEGER PRIMARY KEY AUTOINCREMENT).
- `description`: Descripción del gasto (TEXT NOT NULL).
- `amount`: Monto del gasto (REAL NOT NULL).
- `category`: Categoría a la que pertenece el gasto (TEXT NOT NULL).
- `date`: Fecha en la que se realizó el gasto (TEXT NOT NULL).

### Categorías Estándar de Gastos
Las categorías predefinidas para clasificar los gastos son:
- Comida
- Transporte
- Entretenimiento
- Servicios
- Otros

## Instrucciones y Comandos
- **Instalación de dependencias:** `pip install -r requirements.txt`
- **Ejecutar el servidor:** `python3 app.py`
- **Ejecutar pruebas unitarias:** `python3 -m unittest test_app.py`
- **Verificación frontend:** Instalar binarios del navegador con `playwright install`.
