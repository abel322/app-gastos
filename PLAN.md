# Plan y Arquitectura: Control de Gastos Personales

## Arquitectura del Proyecto
Este proyecto es una aplicación de Control de Gastos Personales (Personal Expense Tracker).
La arquitectura está basada en una separación de responsabilidades entre frontend, backend y base de datos:

- **Frontend**: Desarrollado con HTML, CSS (en `static/style.css`) y Vanilla JavaScript (en `static/script.js`). La interfaz de usuario (`templates/index.html`) está localizada en español y se comunica con el backend mediante peticiones `fetch` (AJAX).
- **Backend**: Implementado en Python utilizando el framework Flask (`app.py`). Sirve la página principal y expone una API RESTful para gestionar los gastos (operaciones GET, POST y DELETE).
- **Base de Datos**: Utiliza SQLite (`expenses.db`), un sistema de gestión de bases de datos relacional ligero, con una tabla `expenses` que almacena los campos: `id`, `description`, `amount`, `category`, y `date`.

## Características y Funcionalidades
1. **Agregar Gasto**: Permite al usuario registrar un nuevo gasto especificando una descripción, un monto, la categoría y la fecha.
2. **Listar Gastos**: Muestra todos los gastos registrados en una tabla, ordenados por fecha de forma descendente.
3. **Eliminar Gasto**: Funcionalidad existente (y que debe mantenerse) que permite al usuario eliminar un registro específico tras una confirmación.
4. **Categorías Estándar**: Al agregar un gasto, la categoría se selecciona desde un menú desplegable. Las categorías estándar definidas son:
   - Comida
   - Transporte
   - Entretenimiento
   - Servicios
   - Otros

## Consideraciones Adicionales
- El servidor de desarrollo local se ejecuta en `http://localhost:5000` por defecto.
- Las dependencias de la aplicación se instalan a través de `pip install -r requirements.txt`.
- Las pruebas unitarias se ejecutan utilizando el módulo `unittest` (`python3 -m unittest test_app.py`).
- Los archivos de base de datos (`.db`) y los archivos de registro (`.log`) se omiten del control de versiones.
