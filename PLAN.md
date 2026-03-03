# Plan para Aplicación de Control de Gastos Personales

## 1. Definición del Proyecto
- **Objetivo:** Crear una aplicación web sencilla para registrar, visualizar y gestionar gastos personales.
- **Tecnologías:**
  - **Backend:** Python con Flask.
  - **Base de Datos:** SQLite.
  - **Frontend:** HTML, CSS y JavaScript (Vanilla).

## 2. Características Principales (MVP)
1. **Registrar un Gasto:**
   - Formulario para ingresar: descripción, monto, categoría (Comida, Transporte, Entretenimiento, Servicios, Otros) y fecha.
2. **Listar Gastos:**
   - Tabla que muestra todos los gastos registrados, ordenados por fecha de forma descendente.
3. **Eliminar un Gasto:**
   - Botón en cada fila de la tabla para eliminar un registro específico.

## 3. Diseño de la Base de Datos
- **Tabla:** `expenses`
  - `id`: INTEGER, PRIMARY KEY, AUTOINCREMENT.
  - `description`: TEXT, NOT NULL.
  - `amount`: REAL, NOT NULL.
  - `category`: TEXT, NOT NULL.
  - `date`: TEXT, NOT NULL.

## 4. Estructura del Backend (API REST)
- **Rutas:**
  - `GET /`: Sirve la página principal (`index.html`).
  - `GET /expenses`: Retorna la lista de gastos en formato JSON.
  - `POST /expenses`: Recibe datos JSON y los inserta en la base de datos.
  - `DELETE /expenses/<id>`: Elimina un gasto específico por su ID.

## 5. Diseño del Frontend
- **HTML (`templates/index.html`):** Contiene el formulario de entrada (con un `<select>` para las categorías) y la estructura de la tabla vacía.
- **CSS (`static/style.css`):** Estilos básicos para la aplicación (botones, tabla, formulario).
- **JavaScript (`static/script.js`):**
  - Hace una petición `GET` inicial para cargar la tabla.
  - Escucha el evento `submit` del formulario para hacer la petición `POST` y actualizar la tabla sin recargar la página.
  - Contiene la lógica para enviar peticiones `DELETE` cuando se hace clic en los botones de eliminar.

## 6. Pruebas Unitarias
- Escribir pruebas para el backend (`test_app.py`) usando el módulo `unittest`.
- Probar:
  - Adición de un gasto válido (estado 201).
  - Listado de gastos (estado 200).
  - Eliminación de un gasto existente (estado 200).
- Usar una base de datos temporal en memoria o en un archivo temporal durante las pruebas.

## 7. Verificación
- Levantar el servidor de desarrollo (`python3 app.py`).
- Navegar a la página en un navegador (o usando herramientas automatizadas como Playwright) para comprobar que la interfaz funciona, se registran gastos y se eliminan correctamente.
