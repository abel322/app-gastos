# Plan para construir una aplicación de Control de Gastos Personales

## Arquitectura y Stack Tecnológico
La aplicación sigue una arquitectura cliente-servidor clásica con renderizado mixto (algunas partes desde el backend, con dinamismo a través de JavaScript y una API RESTful).
- **Backend:** Python con el framework Flask.
- **Base de datos:** SQLite.
- **Frontend:** HTML, CSS (en `/static/style.css`), y Vanilla JavaScript (en `/static/script.js`).
- **Pruebas:** `unittest` incluido en Python.

## Estructura de Datos
La base de datos (SQLite - `expenses.db`) contendrá una tabla `expenses` con las siguientes columnas:
- `id` (INTEGER PRIMARY KEY AUTOINCREMENT)
- `description` (TEXT NOT NULL)
- `amount` (REAL NOT NULL)
- `category` (TEXT NOT NULL) - Las categorías estándar sugeridas son: Comida, Transporte, Entretenimiento, Servicios y Otros.
- `date` (TEXT NOT NULL - formato YYYY-MM-DD)

## Plan de Ejecución (Fases de Desarrollo)

### Fase 1: Configuración Inicial
1. Inicializar un repositorio Git (si no está hecho).
2. Crear un entorno virtual de Python.
3. Crear un archivo `requirements.txt` con las dependencias necesarias (`Flask`).
4. Configurar `.gitignore` para ignorar archivos como entornos virtuales, logs (`*.log`), y la base de datos (`expenses.db`).

### Fase 2: Desarrollo de la API Backend (Flask)
1. Crear el script principal `app.py`.
2. Implementar la conexión y creación de la tabla en SQLite (`init_db()`).
3. Definir la ruta de inicio `/` que sirva la plantilla HTML (render_template).
4. Implementar los endpoints REST:
    - **GET `/expenses`**: Obtener todos los gastos, ordenados por fecha.
    - **POST `/expenses`**: Recibir datos (JSON) para insertar un nuevo gasto en la base de datos.
    - **DELETE `/expenses/<id>`**: Eliminar un gasto específico dado su ID.

### Fase 3: Desarrollo del Frontend (UI/UX)
1. Crear `templates/index.html` con un formulario para añadir los gastos y una tabla para visualizarlos.
    - Utilizar un `<select>` para la categoría, en lugar de un campo de texto libre, para mantener consistencia.
2. Añadir estilos en `static/style.css` para presentar un diseño limpio y moderno.
3. Crear el archivo `static/script.js` con las llamadas a la API utilizando `fetch()`.
    - Funciones principales: obtener y renderizar todos los gastos, enviar el formulario para agregar uno nuevo, y manejar el botón de eliminar.

### Fase 4: Pruebas y Aseguramiento de Calidad
1. Escribir pruebas unitarias en `test_app.py` utilizando `unittest`.
2. Probar escenarios de creación de gastos (código 201), lectura (200), y borrado (200).
3. Asegurar de correr las pruebas usando una base de datos temporal en memoria o un archivo diferente.

### Fase 5: Revisión de Código y Despliegue (Simulado)
1. Validar que la aplicación corra de forma local exitosamente ejecutando `python3 app.py`.
2. Verificar el funcionamiento manual interactuando con la interfaz en `http://localhost:5000`.
3. Validar con pruebas automatizadas y limpieza final de código antes de realizar el envío/push.