# Plan del Proyecto: Control de Gastos Personales

## Arquitectura

El proyecto es una aplicación web de seguimiento de gastos personales (Personal Expense Tracker).
La arquitectura está dividida en dos componentes principales:

1.  **Backend:**
    *   Desarrollado en Python utilizando el framework **Flask**.
    *   Proporciona una API RESTful para gestionar los gastos (`/expenses`).
    *   Sirve los archivos estáticos y la plantilla principal (`index.html`).

2.  **Base de Datos:**
    *   Utiliza **SQLite** como motor de base de datos ligero.
    *   El archivo de la base de datos se llama `expenses.db` (y no debe incluirse en el repositorio).
    *   Tabla `expenses` con las columnas: `id`, `description`, `amount`, `category`, y `date`.

3.  **Frontend:**
    *   Interfaz de usuario simple construida con **HTML**, **CSS** (vainilla) y **JavaScript** (vainilla).
    *   Se comunica asíncronamente (vía `fetch`) con la API del backend para realizar operaciones CRUD sin recargar la página.

## Características Funcionales

*   **Agregar Gastos:** Permite a los usuarios registrar un nuevo gasto ingresando descripción, monto, categoría (seleccionable de una lista: Comida, Transporte, Entretenimiento, Servicios, Otros) y fecha.
*   **Listar Gastos:** Muestra todos los gastos registrados en una tabla ordenados por fecha descendente.
*   **Eliminar Gastos:** Los usuarios pueden eliminar un gasto específico mediante un botón en la interfaz, lo cual refleja el cambio tanto en la base de datos como en la vista.
*   **Interfaz Localizada:** La aplicación de usuario final está diseñada y localizada en español.

## Notas Adicionales

*   El servidor local de desarrollo corre en el puerto 5000 por defecto.
*   Las pruebas unitarias están implementadas utilizando el módulo `unittest` nativo de Python en `test_app.py`.
