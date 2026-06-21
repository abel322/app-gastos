# Control de Gastos Personales

## Arquitectura del Proyecto

Esta es una aplicación para registrar y hacer seguimiento de los gastos personales. La arquitectura está dividida en un backend basado en Python usando el microframework Flask, y un frontend clásico usando HTML, CSS y JavaScript vainilla (Vanilla JS).

### Backend
- **Framework:** Flask (Python)
- **Base de Datos:** SQLite. El archivo de base de datos se denomina `expenses.db` e incluye una tabla llamada `expenses` con las columnas `id`, `description`, `amount`, `category` y `date`.
- **API:** Exposición de un API REST con rutas para obtener todos los gastos (`GET /expenses`), agregar un gasto (`POST /expenses`) y eliminar un gasto (`DELETE /expenses/<id>`).

### Frontend
- **HTML:** Archivo principal `templates/index.html`.
- **CSS:** Archivo de estilos `static/style.css`.
- **JavaScript:** Lógica de cliente en `static/script.js` que interactúa con la API REST mediante fetch para cargar, agregar y eliminar gastos de forma asíncrona.

## Características

- **Agregar gastos:** Permite ingresar descripción, monto, categoría (Comida, Transporte, Entretenimiento, Servicios, Otros) y fecha.
- **Listar gastos:** Muestra el historial de gastos.
- **Eliminar gastos:** Permite borrar un registro existente, pidiendo confirmación al usuario.
