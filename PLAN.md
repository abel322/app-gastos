# Plan del Proyecto: Aplicación de Gastos Personales

## Arquitectura del Proyecto

El proyecto sigue una arquitectura cliente-servidor tradicional, con las siguientes tecnologías clave:

*   **Backend:** Desarrollado utilizando **Python** con el framework **Flask**. El backend maneja las peticiones HTTP (GET, POST, DELETE), interactúa con la base de datos y expone una API RESTful simple para que el frontend la consuma.
*   **Base de Datos:** Se utiliza **SQLite**, una base de datos relacional ligera y embebida, ideal para aplicaciones sencillas. La base de datos guarda la información persistente de los gastos.
    *   **Esquema de la tabla `expenses`:**
        *   `id`: Identificador único del gasto (INTEGER PRIMARY KEY AUTOINCREMENT).
        *   `description`: Descripción del gasto (TEXT NOT NULL).
        *   `amount`: Monto del gasto (REAL NOT NULL).
        *   `category`: Categoría del gasto (TEXT NOT NULL).
        *   `date`: Fecha del gasto (TEXT NOT NULL).
*   **Frontend:** Construido con tecnologías web estándar:
    *   **HTML (`templates/index.html`):** Define la estructura de la página de la aplicación, el formulario de ingreso de datos y la tabla para mostrar el historial de gastos.
    *   **CSS (`static/style.css`):** Proporciona el diseño y la presentación visual, asegurando una interfaz limpia y amigable.
    *   **JavaScript (`static/script.js` - Vanilla JS):** Añade interactividad al cliente. Se encarga de capturar los datos del formulario, realizar peticiones asíncronas (`fetch`) a la API de Flask, y actualizar el DOM dinámicamente para mostrar los resultados sin recargar la página.

## Características del Producto Mínimo Viable (MVP)

El Producto Mínimo Viable de la aplicación de gastos personales incluye las siguientes características fundamentales para que los usuarios puedan llevar un control básico de sus finanzas:

1.  **Registro de Gastos:**
    *   Los usuarios pueden agregar un nuevo gasto a través de un formulario.
    *   Cada gasto requiere: una descripción, un monto (numérico), una categoría seleccionable de una lista predefinida y la fecha del gasto.
2.  **Visualización del Historial:**
    *   Los usuarios pueden ver una lista de todos los gastos registrados.
    *   Los gastos se muestran en formato de tabla, ordenados por fecha de forma descendente (los más recientes primero).
    *   Se muestran todos los detalles de cada gasto (descripción, monto, categoría y fecha).
3.  **Categorización Estándar:**
    *   Al registrar un gasto, el usuario debe elegir entre categorías predefinidas estándar: *Comida, Transporte, Entretenimiento, Servicios y Otros*. Esto facilita la futura organización y análisis de los datos.
4.  **Eliminación de Gastos:**
    *   Los usuarios pueden eliminar registros individuales de gastos de la lista en caso de error o si ya no desean mantener ese registro. Cada fila en la tabla de gastos cuenta con un botón de acción para eliminar.
5.  **Persistencia de Datos:**
    *   Toda la información ingresada se guarda de manera persistente en la base de datos SQLite local, asegurando que los datos no se pierdan al cerrar la aplicación o recargar la página.
6.  **Interfaz de Usuario Básica:**
    *   La aplicación se presenta en español, adaptándose al idioma del usuario objetivo.
    *   La interfaz es sencilla, limpia y fácil de entender y usar.
