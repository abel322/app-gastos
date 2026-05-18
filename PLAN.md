# Control de Gastos Personales - MVP

## Arquitectura del Proyecto

Este proyecto es una aplicación web de Control de Gastos Personales con una arquitectura cliente-servidor tradicional.

- **Backend:** Utiliza Python con el framework Flask para exponer una API REST.
- **Base de Datos:** Emplea SQLite (`expenses.db`) para el almacenamiento persistente. Existe una tabla principal llamada `expenses` que guarda la información de cada gasto (id, descripción, monto, categoría, fecha).
- **Frontend:** Consiste en una interfaz de usuario renderizada desde `templates/index.html` e incluye archivos estáticos (`style.css` y `script.js` dentro del directorio `static/`) utilizando HTML, CSS y JavaScript vainilla.
- **Pruebas:** Incorpora pruebas unitarias mediante el módulo `unittest` de Python en `test_app.py`.

## Características del Producto Mínimo Viable (MVP)

Las funcionalidades de este proyecto se encuentran restringidas estrictamente a las características del MVP:

1. **Agregar Gastos:** Los usuarios pueden agregar nuevos gastos proporcionando una descripción, un monto, seleccionando una categoría (Comida, Transporte, Entretenimiento, Servicios u Otros) y definiendo una fecha.
2. **Ver Gastos:** Los usuarios pueden visualizar un registro de todos los gastos que han añadido, ordenados descendentemente por fecha.

*(Nota: La funcionalidad de eliminar gastos no es parte del MVP y ha sido removida del alcance.)*