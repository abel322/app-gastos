# Plan de la Aplicación de Control de Gastos Personales

## Arquitectura del Proyecto
La aplicación es un sistema de seguimiento de gastos personales (Personal Expense Tracker).
Está construida usando una arquitectura cliente-servidor básica:
- **Backend**: Python con el microframework Flask.
- **Base de Datos**: SQLite, utilizando un archivo `expenses.db` para almacenar los registros. La tabla principal es `expenses` con las columnas: `id`, `description`, `amount`, `category`, y `date`.
- **Frontend**: Desarrollado con HTML, CSS, y JavaScript puro (Vanilla JS).
  - La interfaz de usuario (UI) está localizada en español.
  - El frontend se sirve desde la plantilla `templates/index.html`, y los archivos estáticos se ubican en el directorio `static/` (`script.js` y `style.css`).

## Características Existentes
La aplicación actual funciona completamente y permite a los usuarios gestionar sus gastos mediante las siguientes funcionalidades:
- **Agregar Gastos**: Los usuarios pueden registrar nuevos gastos a través de un formulario con campos para la descripción, monto, categoría y fecha.
- **Listar Gastos**: Se visualizan todos los gastos almacenados en una tabla.
- **Eliminar Gastos**: Se pueden borrar los gastos de la base de datos usando el botón "Eliminar" correspondiente. Las funcionalidades existentes probadas y en funcionamiento no deben ser eliminadas ni reducidas bajo supuestas limitaciones de alcance previas.

## Categorías Estándar de Gastos
El sistema contempla las siguientes categorías estándar para organizar los gastos:
- Comida
- Transporte
- Entretenimiento
- Servicios
- Otros

## Notas de Desarrollo
- **Instalación de Dependencias**: `pip install -r requirements.txt`.
- **Ejecución del Servidor**: El servidor de desarrollo local de Flask se ejecuta en `http://localhost:5000` por defecto utilizando `python3 app.py`.
- **Pruebas**: Las pruebas unitarias se ejecutan con `python3 -m unittest test_app.py`.
- **Reglas de Git**: Los archivos de base de datos (`expenses.db`) y archivos de logs (`*.log`) están ignorados por git y no deben subirse al repositorio.
