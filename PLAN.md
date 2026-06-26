# Plan: Aplicación de Control de Gastos Personales

## Descripción General
El objetivo de este proyecto es construir una aplicación web para el seguimiento y control de gastos personales. La aplicación permite a los usuarios registrar sus gastos diarios, categorizarlos y visualizarlos en una interfaz sencilla e intuitiva.

## Arquitectura
La aplicación sigue una arquitectura cliente-servidor clásica:
- **Backend:** Desarrollado en Python utilizando el framework **Flask**. Se encarga de manejar la lógica de negocio, las peticiones HTTP y la comunicación con la base de datos.
- **Frontend:** Desarrollado con **HTML, CSS y JavaScript (Vanilla)**. Provee la interfaz de usuario para interactuar con la aplicación.
- **Base de Datos:** **SQLite**, utilizada para almacenar los registros de gastos de forma local y ligera.

## Esquema de Base de Datos
La base de datos SQLite (`expenses.db`) contendrá una única tabla llamada `expenses` con la siguiente estructura:

| Columna | Tipo de Dato | Descripción |
| :--- | :--- | :--- |
| `id` | INTEGER | Clave primaria autoincremental |
| `description` | TEXT | Breve descripción del gasto (ej. "Cena restaurante") |
| `amount` | REAL | Monto o valor del gasto |
| `category` | TEXT | Categoría del gasto (ej. Comida, Transporte, Entretenimiento, Servicios, Otros) |
| `date` | TEXT | Fecha en la que se realizó el gasto (formato YYYY-MM-DD) |

## Endpoints de la API (Backend)
El servidor Flask expondrá los siguientes endpoints:

1. **`GET /`**
   - **Propósito:** Sirve la página principal de la aplicación (el frontend).
   - **Retorno:** Archivo `templates/index.html`.

2. **`GET /expenses`**
   - **Propósito:** Obtener la lista completa de gastos registrados, ordenados por fecha de forma descendente.
   - **Retorno:** Lista en formato JSON con los registros.

3. **`POST /expenses`**
   - **Propósito:** Añadir un nuevo gasto.
   - **Cuerpo (JSON):** `{"description": "...", "amount": 0.0, "category": "...", "date": "YYYY-MM-DD"}`
   - **Retorno:** El nuevo gasto creado en formato JSON junto con su `id`.

4. **`DELETE /expenses/<int:id>`**
   - **Propósito:** Eliminar un gasto específico utilizando su identificador (`id`).
   - **Retorno:** Mensaje de confirmación.

## Estructura del Frontend
El frontend se organiza en los siguientes archivos estáticos:
- `templates/index.html`: Define la estructura visual de la aplicación, el formulario para agregar gastos y la tabla para listarlos.
- `static/style.css`: Contiene los estilos visuales para hacer la interfaz agradable y responsiva.
- `static/script.js`: Maneja la lógica del cliente. Intercepta el envío del formulario, se comunica con la API mediante `fetch` (para obtener, crear y eliminar gastos), y actualiza dinámicamente el DOM de la tabla.

## Pruebas (Testing)
Para garantizar el correcto funcionamiento del backend, se utilizará el módulo `unittest` de Python.
El archivo `test_app.py` contendrá pruebas para cada endpoint clave utilizando un cliente de prueba de Flask en una base de datos temporal en memoria o un archivo temporal (`test_expenses.db`).
- Probar que un gasto se agrega correctamente (`POST /expenses`).
- Probar que la lista de gastos se devuelve correctamente (`GET /expenses`).
- Probar que un gasto puede ser eliminado de forma exitosa (`DELETE /expenses/<id>`).
