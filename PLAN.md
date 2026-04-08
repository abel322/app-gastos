# PLAN - Personal Expense Tracker

## Arquitectura del Proyecto

El proyecto es una aplicación de registro de gastos personales (Personal Expense Tracker).

*   **Backend:** Servidor en Python usando el micro-framework **Flask**.
*   **Base de datos:** **SQLite**, con una tabla llamada `expenses` que contiene las columnas: `id`, `description`, `amount`, `category`, y `date`.
*   **Frontend:** Interfaz de usuario construida con **HTML**, **CSS**, y **JavaScript vanilla**.

## Características del MVP (Minimum Viable Product)

El MVP incluye las siguientes funcionalidades básicas:

1.  **Listado de gastos:** Visualizar todos los gastos registrados de forma ordenada.
2.  **Agregar un nuevo gasto:** Formulario que permite ingresar un nuevo gasto con:
    *   Descripción
    *   Monto
    *   Categoría (Opciones estándar: Comida, Transporte, Entretenimiento, Servicios, y Otros)
    *   Fecha
3.  **Eliminar un gasto:** Capacidad para eliminar registros de gastos existentes en la base de datos.
4.  **Localización:** La interfaz de usuario de la aplicación está en **Español**.

## Configuración y Entorno

*   **Servidor de desarrollo local:** Se ejecuta por defecto en `http://localhost:5000` (`python3 app.py`).
*   **Dependencias:** Instalación a través de `pip install -r requirements.txt`.
*   **Pruebas:** Pruebas unitarias disponibles que se pueden ejecutar con `python3 -m unittest test_app.py`.
