# Aplicación de Control de Gastos Personales

## Arquitectura del Proyecto
La aplicación está construida utilizando una arquitectura clásica cliente-servidor:

*   **Backend:** Python con el framework Flask. Maneja la lógica de negocio, las rutas de la API, y sirve los archivos estáticos y las plantillas.
*   **Base de Datos:** SQLite. Los datos de los gastos se almacenan en un archivo de base de datos local llamado `expenses.db`.
*   **Frontend:** HTML5, CSS3, y JavaScript (Vanilla JS). La interfaz de usuario está contenida en `templates/index.html` e interactúa con el backend de manera asíncrona mediante la API Fetch para proveer una experiencia fluida.
    *   Los estilos se encuentran en `static/style.css`.
    *   La lógica de la interfaz y las llamadas al servidor se encuentran en `static/script.js`.

## Características Principales

*   **Listado de Gastos:** Permite visualizar todos los gastos registrados en una tabla, mostrando la descripción, el monto, la categoría y la fecha.
*   **Agregar Gasto:** A través de un formulario, el usuario puede introducir y guardar un nuevo gasto con los campos: Descripción, Monto, Categoría y Fecha.
*   **Eliminar Gasto:** Se puede eliminar individualmente cada gasto de la lista pulsando el botón de "Eliminar" correspondiente.
*   **Categorías Estándar:** Para mantener un registro ordenado, se recomienda utilizar las siguientes categorías estándar:
    *   Comida
    *   Transporte
    *   Entretenimiento
    *   Servicios
    *   Otros
*   **Interfaz Localizada:** Toda la aplicación está diseñada en idioma español para mayor facilidad de uso.