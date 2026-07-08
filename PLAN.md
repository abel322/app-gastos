# Proyecto de Control de Gastos Personales

## Descripción de la Arquitectura
Este proyecto es una aplicación web para el control de gastos personales. Está construida utilizando las siguientes tecnologías:

- **Backend:** Python con el framework Flask (`app.py`).
- **Base de Datos:** SQLite (`expenses.db`), la cual cuenta con una tabla `expenses` que almacena: `id`, `description`, `amount`, `category` y `date`.
- **Frontend:** HTML, CSS y Vanilla JavaScript.
  - La interfaz de usuario se encuentra en `templates/index.html`.
  - Los estilos están en `static/style.css`.
  - La lógica del cliente para interactuar con la API del backend se encuentra en `static/script.js`.

## Características
- **Agregar Gasto:** Permite registrar un nuevo gasto con descripción, monto, categoría (Comida, Transporte, Entretenimiento, Servicios, Otros) y fecha.
- **Listar Gastos:** Muestra todos los gastos registrados de forma descendente (los más recientes primero).
- **Eliminar Gasto:** Permite al usuario eliminar un gasto de la lista y de la base de datos.
- **Internacionalización:** La interfaz de la aplicación (UI) está localizada en español.

## Pruebas
- Las pruebas unitarias están localizadas en el archivo `test_app.py` y se pueden ejecutar usando `python3 -m unittest test_app.py`.
