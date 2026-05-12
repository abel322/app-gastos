# Plan de Arquitectura y Funcionalidades del MVP: Rastreador de Gastos Personales

## Arquitectura del Proyecto

El proyecto sigue una arquitectura clásica cliente-servidor estructurada de la siguiente manera:

*   **Backend:** Python utilizando el framework web Flask.
*   **Base de Datos:** SQLite. Los datos se almacenan en un archivo local llamado `expenses.db` (excluido del control de versiones).
*   **Frontend:** Interfaz de usuario renderizada desde `templates/index.html` utilizando HTML, CSS y JavaScript (Vanilla) servidos desde la carpeta `static/`. El idioma de la interfaz gráfica es el español.
*   **Servidor de Desarrollo:** Se ejecuta localmente en `http://localhost:5000` al iniciar `app.py`.

## Funcionalidades del Producto Mínimo Viable (MVP)

Las funcionalidades del MVP están estrictamente restringidas a las siguientes acciones esenciales:

1.  **Agregar un gasto:**
    *   El usuario puede registrar un nuevo gasto introduciendo:
        *   **Descripción:** Detalle del gasto.
        *   **Monto:** Valor numérico del gasto.
        *   **Fecha:** Fecha en la que se realizó el gasto.
        *   **Categoría:** Tipo de gasto. Solo se permiten las siguientes categorías estándar:
            *   Comida
            *   Transporte
            *   Entretenimiento
            *   Servicios
            *   Otros

2.  **Ver gastos:**
    *   El usuario puede visualizar una lista con todos los gastos previamente registrados, ordenados por fecha de manera descendente.
    *   Los gastos se cargan desde el servidor mediante una solicitud al backend Flask.
