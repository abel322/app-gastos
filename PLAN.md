# Plan y Arquitectura del Proyecto de Control de Gastos Personales

## Arquitectura del Proyecto
El proyecto es una aplicación de Control de Gastos Personales con la siguiente arquitectura:
- **Backend:** Desarrollado en Python utilizando el framework Flask.
- **Base de Datos:** SQLite, cuyo archivo local es `expenses.db`.
- **Frontend:** Implementado con HTML, CSS y JavaScript (vanilla).
  - La plantilla principal es servida desde `templates/index.html`.
  - Los archivos estáticos se encuentran en `static/`, incluyendo la lógica de cliente en `script.js` y los estilos en `style.css`.

## Características Existentes
La aplicación permite la gestión de gastos mediante las siguientes funcionalidades:
- **Agregar gastos:** Creación de nuevos registros con descripción, monto, categoría y fecha.
- **Listar gastos:** Visualización de todos los gastos registrados en una tabla.
- **Eliminar gastos:** Capacidad de borrar un gasto existente de la base de datos y de la vista del usuario.
