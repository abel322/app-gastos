# Control de Gastos Personales

## Descripción del Proyecto
Esta es una aplicación para registrar y gestionar gastos personales. Permite al usuario llevar un control sobre en qué gasta su dinero, estableciendo descripciones, montos, categorías y la fecha de cada gasto.

## Arquitectura

El proyecto utiliza una arquitectura Cliente-Servidor:

*   **Backend:** Construido en Python utilizando el framework **Flask**. Gestiona la lógica de negocio y se comunica con la base de datos.
*   **Base de Datos:** Utiliza **SQLite** (archivo `expenses.db`). La base de datos tiene una única tabla `expenses` con las siguientes columnas:
    *   `id`: Identificador único (INTEGER PRIMARY KEY AUTOINCREMENT).
    *   `description`: Descripción del gasto (TEXT NOT NULL).
    *   `amount`: Monto del gasto (REAL NOT NULL).
    *   `category`: Categoría del gasto (TEXT NOT NULL).
    *   `date`: Fecha del gasto (TEXT NOT NULL).
*   **Frontend:** Interfaz de usuario renderizada desde el backend utilizando HTML, CSS y Vanilla JavaScript.
    *   **HTML:** Estructura de la aplicación, incluyendo el formulario para agregar gastos y la tabla para visualizarlos (`templates/index.html`).
    *   **CSS:** Estilos para la interfaz, para hacerla atractiva y responsiva (`static/style.css`).
    *   **JavaScript:** Lógica del lado del cliente para realizar peticiones asíncronas al backend (crear, leer, eliminar) y actualizar la vista dinámicamente (`static/script.js`).

## Características

*   **Ver Gastos:** Los usuarios pueden visualizar una lista de todos sus gastos registrados, mostrando la descripción, monto, categoría y fecha.
*   **Añadir Gasto:** Formulario para introducir un nuevo gasto.
*   **Eliminar Gasto:** Botón para borrar un gasto existente de la lista y de la base de datos.
*   **Categorías Estándar:** El sistema permite categorizar los gastos en (pero no se limita a, aunque el frontend se va a actualizar a usarlas):
    *   Comida
    *   Transporte
    *   Entretenimiento
    *   Servicios
    *   Otros
