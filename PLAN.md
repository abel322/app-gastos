# Plan de la Aplicación de Gastos Personales

## Estado Actual (MVP)
La aplicación actual ya implementa las características básicas de un registro de gastos personales.

*   **Arquitectura:**
    *   **Backend:** Python con el framework Flask.
    *   **Base de Datos:** SQLite (`expenses.db` con una tabla `expenses`).
    *   **Frontend:** HTML, CSS y JavaScript (Vanilla JS).
*   **Funcionalidades Existentes:**
    *   Agregar un nuevo gasto (Descripción, Monto, Categoría, Fecha).
    *   Listar todos los gastos registrados, ordenados por fecha descendente.
    *   Eliminar un gasto específico.

## Esquema de Base de Datos
*   **Tabla `expenses`:**
    *   `id` (INTEGER, Primary Key)
    *   `description` (TEXT)
    *   `amount` (REAL)
    *   `category` (TEXT)
    *   `date` (TEXT)

## Mejoras Propuestas

Para llevar la aplicación de gastos personales al siguiente nivel y mejorar la experiencia del usuario, se sugieren las siguientes implementaciones:

1.  **Estandarización de Categorías:**
    *   Modificar el formulario de entrada en el frontend para utilizar un menú desplegable (`<select>`) en lugar de un campo de texto libre para la "Categoría".
    *   Las categorías estándar deben ser: **Comida, Transporte, Entretenimiento, Servicios y Otros**.
2.  **Visualización de Datos:**
    *   Integrar gráficos (por ejemplo, usando Chart.js) en el frontend para mostrar un desglose de los gastos por categoría.
    *   Añadir un resumen del gasto total en la vista principal.
3.  **Filtrado y Búsqueda:**
    *   Permitir a los usuarios filtrar la lista de gastos por mes, por año o por categoría específica.
4.  **Internacionalización / Localización:**
    *   Asegurar que toda la interfaz de usuario siga estando localizada en español.

## Instrucciones de Ejecución y Pruebas
*   **Instalación:** `pip install -r requirements.txt`
*   **Ejecución del Servidor:** `python3 app.py`
*   **Pruebas Unitarias:** `python3 -m unittest test_app.py`
