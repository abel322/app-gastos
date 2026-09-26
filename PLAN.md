# Plan del Proyecto: App de Gastos Personales

## Arquitectura
El proyecto es una aplicación web para el control de gastos personales construida con las siguientes tecnologías:
- **Backend:** Python con el framework Flask.
- **Base de Datos:** SQLite. Los datos se almacenan de forma local en el archivo `expenses.db`.
- **Frontend:** HTML, CSS y JavaScript vainilla.
- **Comunicación:** El frontend se comunica con el backend mediante peticiones HTTP (API REST).

## Funcionalidades
- **Agregar Gastos:** Los usuarios pueden agregar nuevos gastos especificando descripción, monto, categoría y fecha. Las categorías estándar son: Comida, Transporte, Entretenimiento, Servicios y Otros.
- **Visualizar Gastos:** Se muestra una lista de todos los gastos registrados en la plataforma.
- **Eliminar Gastos:** Los usuarios pueden eliminar gastos previamente registrados, funcionalidad que debe mantenerse intacta.

## Estructura del Proyecto
- `app.py`: Archivo principal del servidor Flask que define las rutas de la API y la inicialización de la base de datos.
- `test_app.py`: Archivo que contiene pruebas unitarias para asegurar la calidad y estabilidad de la aplicación.
- `requirements.txt`: Archivo con las dependencias del proyecto.
- `templates/index.html`: Plantilla principal del frontend de la aplicación.
- `static/style.css`: Hoja de estilos del frontend.
- `static/script.js`: Archivo con la lógica del frontend (JavaScript vainilla) para interactuar con la API REST.
