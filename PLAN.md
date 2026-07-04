# Control de Gastos Personales

## Arquitectura del Proyecto

El proyecto está construido usando una arquitectura clásica cliente-servidor:

*   **Backend:** Python utilizando el framework Flask.
*   **Base de Datos:** SQLite. El esquema consta de una tabla `expenses` con las columnas: `id`, `description`, `amount`, `category`, y `date`.
*   **Frontend:** Aplicación web construida con HTML, CSS y JavaScript (vanilla). La interfaz de usuario está completamente en español y se comunica con el backend a través de peticiones HTTP (API REST).

## Características

1.  **Agregar Gasto:** Permite al usuario registrar un nuevo gasto ingresando la descripción, el monto, la categoría y la fecha.
2.  **Listar Gastos:** Muestra una tabla con todos los gastos registrados, ordenados por fecha de forma descendente.
3.  **Eliminar Gasto:** Permite al usuario borrar un gasto existente mediante un botón en la interfaz.

## Categorías de Gastos
Las categorías estándar para clasificar los gastos son:
*   Comida
*   Transporte
*   Entretenimiento
*   Servicios
*   Otros
