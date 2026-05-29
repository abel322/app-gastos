# Control de Gastos Personales - Plan de Proyecto

## Arquitectura y Tecnologías
- **Backend**: Python con el microframework Flask.
- **Base de datos**: SQLite. El archivo de base de datos es `expenses.db` (no debe ser commiteado al repositorio). El esquema incluye una tabla `expenses` con: `id`, `description`, `amount`, `category`, y `date`.
- **Frontend**: Interfaz construida en HTML (`templates/index.html`), CSS (`static/style.css`), y JavaScript vanilla (`static/script.js`).

## Características
- **Listado de gastos**: Muestra los gastos registrados ordenados por fecha en orden descendente.
- **Agregar gasto**: Formulario para registrar un gasto con descripción, monto, categoría y fecha.
- **Eliminar gasto**: Botón para eliminar un gasto existente del listado y de la base de datos.
- **Categorías**: Soporte para las categorías estándar: Comida, Transporte, Entretenimiento, Servicios, y Otros.
- **Localización**: La UI está en español.

## Desarrollo Local
- El servidor de desarrollo se inicia con `python3 app.py` y por defecto corre en `http://localhost:5000`.
- Dependencias pueden ser instaladas usando `pip install -r requirements.txt`.
- Pruebas unitarias se ejecutan mediante `python3 -m unittest test_app.py`.
- Los archivos de log (*.log) están excluidos en `.gitignore`.
