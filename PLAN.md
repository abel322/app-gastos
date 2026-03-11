# Plan de Desarrollo: Personal Expense Tracker

Este documento detalla la arquitectura del proyecto y las características clave del Producto Mínimo Viable (MVP) para la aplicación de seguimiento de gastos personales (Personal Expense Tracker).

## Arquitectura del Proyecto

El sistema está construido siguiendo una arquitectura de tres capas:

1.  **Frontend (Interfaz de Usuario)**
    *   **Tecnologías:** HTML, CSS y Vanilla JavaScript.
    *   **Propósito:** Proporcionar una interfaz interactiva y fácil de usar para que los usuarios puedan registrar, visualizar y eliminar sus gastos. La interfaz de usuario (UI) está completamente localizada en español.

2.  **Backend (Lógica de Servidor)**
    *   **Tecnologías:** Python y Flask.
    *   **Propósito:** Manejar las solicitudes de la API del frontend, procesar la lógica de negocio y comunicarse con la base de datos.
    *   **Ejecución:** El servidor se inicia con el comando `python3 app.py`.

3.  **Base de Datos (Almacenamiento de Datos)**
    *   **Tecnologías:** SQLite.
    *   **Propósito:** Almacenar de forma persistente la información de los gastos.
    *   **Esquema de Base de Datos:** Se utiliza una tabla principal llamada `expenses`.
        *   Columnas:
            *   `id`: Identificador único del gasto (INTEGER PRIMARY KEY AUTOINCREMENT).
            *   `description`: Descripción del gasto (TEXT).
            *   `amount`: Monto del gasto (REAL).
            *   `category`: Categoría a la que pertenece el gasto (TEXT).
            *   `date`: Fecha en que se realizó el gasto (TEXT).

## Características del MVP (Producto Mínimo Viable)

El MVP de la aplicación de gastos personales incluye las siguientes funcionalidades esenciales:

1.  **Registro de Gastos:**
    *   Los usuarios pueden añadir un nuevo gasto proporcionando:
        *   Una descripción (ej. "Almuerzo de trabajo").
        *   El monto del gasto.
        *   La fecha del gasto.
        *   Selección de una categoría predefinida.

2.  **Categorías Estándar:**
    *   Para facilitar la organización, los gastos deben clasificarse en las siguientes categorías estándar:
        *   Comida
        *   Transporte
        *   Entretenimiento
        *   Servicios
        *   Otros

3.  **Visualización de Gastos:**
    *   La aplicación muestra una lista de todos los gastos registrados, ordenados cronológicamente (generalmente del más reciente al más antiguo).

4.  **Eliminación de Gastos:**
    *   Los usuarios tienen la capacidad de eliminar un gasto específico si se ha registrado por error o ya no es relevante.

5.  **Localización en Español:**
    *   Toda la interfaz de usuario, incluyendo textos, botones y mensajes, está en español para atender a la audiencia objetivo.

## Configuración y Entorno

*   **Dependencias:** Las dependencias del proyecto se instalan ejecutando `pip install -r requirements.txt`.
*   **Archivos Ignorados:** Los archivos de registro (`*.log`) no deben incluirse en el repositorio de control de versiones y están gestionados mediante `.gitignore`.
*   **Pruebas:** Las pruebas unitarias de la aplicación se ejecutan mediante el comando `python3 -m unittest test_app.py`.
*   **Verificación del Frontend:** Si es necesario ejecutar pruebas de verificación del frontend con Playwright, se requiere instalar los navegadores previamente utilizando el comando `playwright install`.
