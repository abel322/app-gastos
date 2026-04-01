# Plan para App de Gastos Personales

## Arquitectura del Proyecto

Este proyecto es una aplicación web para rastrear gastos personales, construida con las siguientes tecnologías:

- **Backend:** Python Flask
- **Base de Datos:** SQLite
- **Frontend:** HTML, CSS, JavaScript (Vanilla JS)

## Funcionalidades del Producto Mínimo Viable (MVP)

1. **Gestión de Gastos:**
   - **Añadir Gasto:** Los usuarios pueden agregar un nuevo gasto ingresando descripción, cantidad, categoría y fecha.
   - **Ver Gastos:** Mostrar una lista de todos los gastos registrados, ordenados por fecha descendente.
   - **Eliminar Gasto:** Los usuarios pueden eliminar gastos registrados previamente.

2. **Categorías Estándar de Gastos:**
   La aplicación soportará inicialmente las siguientes categorías estándar:
   - Comida
   - Transporte
   - Entretenimiento
   - Servicios
   - Otros

## Esquema de Base de Datos (SQLite)

La base de datos utiliza una sola tabla llamada `expenses` con el siguiente esquema:
- `id`: INTEGER PRIMARY KEY AUTOINCREMENT
- `description`: TEXT NOT NULL
- `amount`: REAL NOT NULL
- `category`: TEXT NOT NULL
- `date`: TEXT NOT NULL

## Interfaz de Usuario (UI)

- La aplicación está localizada en **Español**.
- Una sola página de inicio (`index.html`) contendrá un formulario para nuevos gastos y la lista de los mismos.

## Entorno Local

- El servidor de desarrollo local se ejecuta de manera predeterminada en `http://localhost:5000`.
- Se inicia con el comando `python3 app.py`.
- Dependencias definidas en `requirements.txt`.
