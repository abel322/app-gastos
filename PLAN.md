# Plan del Proyecto: Aplicación de Control de Gastos Personales

## 1. Visión General
Esta aplicación es un sistema simple pero efectivo para realizar un seguimiento de los gastos personales. Está construida utilizando Python con el framework Flask para el backend, SQLite para la base de datos, y HTML/CSS/JavaScript puro para el frontend.

## 2. Arquitectura del Sistema
*   **Backend:** Python con Flask (`app.py`). Maneja las rutas HTTP (GET, POST, DELETE), interactúa con la base de datos y sirve los archivos del frontend.
*   **Base de Datos:** SQLite (`expenses.db`). Se crea automáticamente al iniciar la aplicación si no existe.
*   **Frontend:**
    *   `templates/index.html`: La estructura principal de la interfaz de usuario, incluyendo el formulario de ingreso y la tabla de gastos.
    *   `static/style.css`: Estilos para hacer la aplicación visualmente atractiva, estructurada y fácil de usar.
    *   `static/script.js`: Lógica del lado del cliente para manejar el envío de formularios, realizar solicitudes HTTP asíncronas (fetch) al backend para agregar, obtener y eliminar gastos, y actualizar el DOM dinámicamente.

## 3. Características (Features)
*   **Listar Gastos (GET /expenses):** Muestra una tabla con todos los gastos registrados, ordenados por fecha de forma descendente.
*   **Agregar Gasto (POST /expenses):** Permite al usuario registrar un nuevo gasto ingresando la descripción, el monto, la categoría y la fecha.
*   **Eliminar Gasto (DELETE /expenses/<id>):** Proporciona un botón para eliminar un registro de gasto específico de la base de datos.
*   **Interfaz Responsiva Básica:** Un diseño centrado y limpio con un formulario fácil de usar y una tabla para visualizar los datos.

## 4. Estructura de la Base de Datos
La base de datos SQLite contiene una única tabla llamada `expenses` con la siguiente estructura:

*   `id` (INTEGER): Clave primaria, autoincremental. Identificador único para cada gasto.
*   `description` (TEXT): Descripción o concepto del gasto. No nulo.
*   `amount` (REAL): El valor monetario del gasto. No nulo.
*   `category` (TEXT): La categoría a la que pertenece el gasto (ej. Comida, Transporte, etc.). No nulo.
*   `date` (TEXT): La fecha en la que se realizó el gasto (formato YYYY-MM-DD). No nulo.

## 5. Ejecución y Desarrollo
*   **Dependencias:** Especificadas en `requirements.txt` (Flask, etc.). Instalar con `pip install -r requirements.txt`.
*   **Ejecutar Servidor:** `python3 app.py`. El servidor estará disponible en `http://localhost:5000`.
*   **Pruebas:** Ejecutar las pruebas unitarias con `python3 -m unittest test_app.py`. Utiliza una base de datos temporal `test_expenses.db` para asegurar la integridad de los datos de producción durante las pruebas.
