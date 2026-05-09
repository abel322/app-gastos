# Arquitectura y MVP: Aplicación de Gastos Personales

## Arquitectura del Proyecto

La aplicación utiliza una arquitectura sencilla con los siguientes componentes:

*   **Backend (Python/Flask):** El servidor está implementado en Python usando el framework Flask (`app.py`). Expone una API REST para interactuar con los datos y sirve los archivos del frontend.
*   **Base de Datos (SQLite):** Utiliza SQLite como base de datos local. El archivo principal es `expenses.db`. El esquema incluye una tabla `expenses` con las columnas `id`, `description`, `amount`, `category` y `date`.
*   **Frontend (HTML/CSS/JS):**
    *   **HTML:** Utiliza la plantilla `templates/index.html` servida por Flask.
    *   **Estilos y Lógica:** Los estilos y la lógica de la interfaz están en `static/style.css` y `static/script.js` respectivamente. Utiliza JavaScript vanilla para hacer peticiones asíncronas a la API del backend.
*   **Servidor de desarrollo:** La aplicación se inicia ejecutando `python3 app.py` y se sirve localmente en `http://localhost:5000`.

## Características del Producto Mínimo Viable (MVP)

Las funcionalidades de este proyecto se restringen estrictamente a las siguientes características del MVP:

1.  **Agregar Gastos:** Los usuarios pueden añadir un nuevo gasto mediante un formulario, proporcionando su descripción, monto, categoría (Comida, Transporte, Entretenimiento, Servicios, Otros) y fecha.
2.  **Visualizar Gastos:** Los usuarios pueden visualizar en forma de tabla una lista de todos los gastos previamente registrados.
