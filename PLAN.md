# Plan de la Aplicación de Control de Gastos Personales

## Arquitectura

La aplicación es un proyecto web con arquitectura cliente-servidor:
- **Backend:** Desarrollado en Python usando el microframework Flask. Expone una API REST para gestionar los gastos y sirve la interfaz gráfica.
- **Base de Datos:** SQLite se utiliza como motor de base de datos para almacenar la información (archivo `expenses.db`).
- **Frontend:** Implementado usando HTML5, CSS puro y JavaScript (Vanilla JS).

## Características Actuales

La aplicación cuenta con las siguientes funcionalidades:
- **Visualización de Gastos:** Una tabla muestra todos los gastos previamente registrados, ordenados por fecha de forma descendente.
- **Agregar Gasto:** A través de un formulario, los usuarios pueden ingresar un nuevo gasto indicando:
  - Descripción (texto libre).
  - Monto (número con decimales).
  - Categoría (lista desplegable con opciones predefinidas: Comida, Transporte, Entretenimiento, Servicios y Otros).
  - Fecha (selector de fecha).
- **Eliminar Gasto:** Cada gasto en la tabla tiene un botón "Eliminar" que permite borrar el registro permanentemente después de una confirmación.
- **Persistencia de Datos:** Todos los gastos se guardan en la base de datos local SQLite.

## Archivos Principales

- `app.py`: Contiene la configuración del servidor, inicialización de la BD y los endpoints (GET, POST, DELETE).
- `test_app.py`: Contiene los tests unitarios automatizados del backend.
- `templates/index.html`: Plantilla principal de la interfaz de usuario.
- `static/style.css`: Hoja de estilos que da el diseño visual a la aplicación.
- `static/script.js`: Archivo JavaScript encargado de las peticiones a la API y la interactividad del usuario en tiempo real.
