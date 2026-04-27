# Proyecto: Control de Gastos Personales

## Arquitectura del Proyecto
Este proyecto es una aplicación web para el control de gastos personales. La arquitectura se compone de:

- **Backend:** Desarrollado en Python utilizando el framework Flask.
- **Base de Datos:** SQLite, utilizando un archivo llamado `expenses.db`.
  - **Esquema:** Existe una tabla `expenses` con las columnas: `id` (INTEGER PRIMARY KEY AUTOINCREMENT), `description` (TEXT), `amount` (REAL), `category` (TEXT) y `date` (TEXT).
- **Frontend:** Implementado con HTML, CSS y JavaScript puro (vanilla).
  - La interfaz principal se sirve a través de `templates/index.html`.
  - Los archivos estáticos (`script.js` y `style.css`) se encuentran en el directorio `static/`.
- **Servidor:** El servidor de desarrollo local se ejecuta por defecto en `http://localhost:5000` iniciando el archivo `app.py` (`python3 app.py`).
- **Idioma:** La interfaz de usuario de la aplicación está localizada en español.

## Características del Producto Mínimo Viable (MVP)
El MVP de la aplicación incluye las siguientes características:

1. **Añadir Gasto:** Permite a los usuarios agregar un nuevo gasto proporcionando una descripción, el monto, la categoría y la fecha.
2. **Listar Gastos:** Muestra una tabla con todos los gastos previamente añadidos ordenados por fecha.
3. **Eliminar Gasto:** Permite a los usuarios eliminar un gasto existente de la lista y la base de datos.
4. **Categorías Estándar:** La aplicación maneja categorías de gastos. Las categorías estándar definidas son:
   - Comida
   - Transporte
   - Entretenimiento
   - Servicios
   - Otros
