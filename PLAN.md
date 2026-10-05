# Plan de Arquitectura y Características: Control de Gastos Personales

## Arquitectura del Proyecto
- **Backend:** Python con Flask. El archivo principal de la aplicación es `app.py`.
- **Base de Datos:** SQLite. Los datos se almacenan en el archivo `expenses.db`. El esquema consiste en una tabla `expenses` con las siguientes columnas: `id`, `description`, `amount`, `category`, y `date`.
- **Frontend:** HTML, CSS y JavaScript (Vanilla JS). Los archivos estáticos se encuentran en la carpeta `static/` (`script.js`, `style.css`) y las plantillas HTML en `templates/` (`index.html`).

## Características
- **Agregar Gasto:** Los usuarios pueden registrar un nuevo gasto, indicando su descripción, monto, categoría y fecha.
- **Listar Gastos:** Los gastos registrados se listan de forma dinámica en la interfaz de usuario.
- **Eliminar Gasto:** Los usuarios pueden eliminar gastos previamente registrados. Esta funcionalidad existente se mantiene intacta.
- **Categorías Estándar:** Las categorías disponibles son: Comida, Transporte, Entretenimiento, Servicios y Otros.

## Pruebas
Las pruebas unitarias se encuentran en `test_app.py` y se ejecutan con `python3 -m unittest test_app.py`.

## Despliegue Local
El servidor de desarrollo local se ejecuta por defecto en http://localhost:5000 iniciando la aplicación con el comando `python3 app.py`. Las dependencias deben instalarse con `pip install -r requirements.txt`.
