# Plan del Proyecto: App de Gastos Personales

## Arquitectura

La aplicación es un Control de Gastos Personales (Personal Expense Tracker).
Está construida utilizando una arquitectura de cliente-servidor clásica:
- **Backend:** Desarrollado en Python con el framework Flask.
- **Base de datos:** Utiliza SQLite para el almacenamiento de datos (`expenses.db`).
- **Frontend:** Construido con HTML, CSS y JavaScript vainilla. Los archivos estáticos (`script.js`, `style.css`) se sirven desde la carpeta `static/` y la plantilla HTML principal (`index.html`) se sirve desde `templates/`.

## Características
1. **Ver Gastos:** El usuario puede visualizar una lista de todos sus gastos registrados.
2. **Agregar Gasto:** El usuario puede registrar un nuevo gasto, indicando la descripción, el monto, la categoría y la fecha.
3. **Eliminar Gasto:** El usuario puede eliminar un gasto de la lista.
4. **Categorías Estándar:** Los gastos se pueden agrupar en categorías estándar predefinidas: Comida, Transporte, Entretenimiento, Servicios y Otros.

## Notas Adicionales
- El servidor de desarrollo local corre en `http://localhost:5000` por defecto.
- Se utiliza `unittest` para las pruebas del backend en `test_app.py`.
- Los archivos de registro (`*.log`) y la base de datos local (`expenses.db`) son ignorados por el control de versiones y no deben ser comprometidos.
