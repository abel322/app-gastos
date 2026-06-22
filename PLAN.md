# Control de Gastos Personales - Plan y Arquitectura

## Descripción
Esta es una aplicación de Control de Gastos Personales desarrollada con un backend de Python Flask y una base de datos de SQLite, junto con un frontend basado en HTML, CSS, y JavaScript estándar. La aplicación permite a los usuarios agregar, listar y eliminar sus gastos personales. La interfaz de usuario está en español.

## Arquitectura

### Backend (Python/Flask)
- **app.py:** El servidor backend usando Flask que proporciona puntos finales REST.
- **Base de Datos:** SQLite (`expenses.db`). Se inicializa automáticamente en el arranque, creando la tabla `expenses` si no existe. La tabla incluye las columnas `id`, `description`, `amount`, `category`, y `date`.

### Endpoints (Rutas API)
- `GET /`: Muestra la página principal `templates/index.html`.
- `GET /expenses`: Devuelve una lista JSON de todos los gastos ordenados por fecha de forma descendente.
- `POST /expenses`: Permite crear un nuevo gasto. Espera un cuerpo JSON con `description`, `amount`, `category`, y `date`. Devuelve un estado 201 en caso de éxito.
- `DELETE /expenses/<id>`: Elimina un gasto específico por su ID. Devuelve un estado 200 en caso de éxito.

### Frontend
- **HTML (`templates/index.html`):** Estructura de la aplicación web incluyendo el formulario para agregar gastos y la tabla para listarlos. El campo de categoría es un `<select>` desplegable que incluye: Comida, Transporte, Entretenimiento, Servicios y Otros.
- **CSS (`static/style.css`):** Los estilos visuales de la aplicación.
- **JavaScript (`static/script.js`):** La lógica interactiva. Se encarga de buscar los datos iniciales, enviar el formulario para agregar gastos, actualizar la tabla dinámicamente y enviar peticiones de eliminación al backend.

## Pruebas
Las pruebas unitarias se encuentran en `test_app.py` utilizando la biblioteca `unittest`. Prueban las funcionalidades de agregar, listar y eliminar gastos haciendo uso de una base de datos en memoria para propósitos de test. Se ejecutan con el comando `python3 -m unittest test_app.py`.
