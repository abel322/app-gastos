# Plan de Arquitectura - Control de Gastos Personales

## Arquitectura del Proyecto
El proyecto es una aplicación web para llevar el control de gastos personales. Está compuesta por:

- **Backend:** Desarrollado en Python utilizando el framework Flask. El backend sirve la aplicación frontend y proporciona una API RESTful para gestionar los gastos (crear, leer, eliminar).
- **Base de Datos:** SQLite (`expenses.db`), que almacena los registros de los gastos. La tabla `expenses` contiene las columnas: `id`, `description`, `amount`, `category` y `date`.
- **Frontend:** Construido con HTML, CSS y JavaScript vainilla. La interfaz principal se sirve desde `templates/index.html` y utiliza archivos estáticos en el directorio `static/` (`script.js`, `style.css`).

## Características Principales
- **Registro de Gastos:** Los usuarios pueden registrar nuevos gastos proporcionando descripción, monto, categoría y fecha.
- **Categorías Estándar:** Los gastos pueden asignarse a una de las siguientes categorías predefinidas: Comida, Transporte, Entretenimiento, Servicios y Otros.
- **Visualización de Gastos:** Lista de todos los gastos registrados de forma dinámica y actualizada.
- **Eliminación de Gastos:** Opción de eliminar un gasto que haya sido ingresado previamente en el sistema.

## Desarrollo Local
- Instalar dependencias mediante `pip install -r requirements.txt`.
- Iniciar el servidor local ejecutando `python3 app.py`, que por defecto corre en http://localhost:5000.
- Ejecutar los tests usando `python3 -m unittest test_app.py`.
