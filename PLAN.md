# Plan de Proyecto: Control de Gastos Personales

## Descripción General
Esta es una aplicación para llevar el control de los gastos personales. Permite al usuario registrar sus gastos diarios y verlos en una lista ordenada, así como eliminarlos si es necesario.

## Arquitectura

### Frontend
El frontend de la aplicación está construido con tecnologías web estándar (Vanilla web stack):
- **HTML:** Estructura de la página y formulario de entrada (en `templates/index.html`).
- **CSS:** Estilos básicos para la interfaz (en `static/style.css`).
- **JavaScript (Vanilla JS):** Lógica del lado del cliente para manejar el envío de formularios, realizar peticiones asíncronas (fetch) al backend y actualizar el DOM dinámicamente (en `static/script.js`).

### Backend
El backend está desarrollado en Python utilizando el framework web Flask:
- **Flask:** Maneja las rutas, recibe las peticiones de la API REST del cliente y se encarga de renderizar el HTML inicial (en `app.py`).

### Base de Datos
- **SQLite:** Se utiliza una base de datos local ligera (`expenses.db`) para almacenar la información de los gastos.
- **Esquema:** Existe una tabla `expenses` con las columnas:
  - `id` (Entero, Clave primaria)
  - `description` (Texto)
  - `amount` (Real)
  - `category` (Texto)
  - `date` (Texto)

## Funcionalidades Actuales
- Agregar un nuevo gasto (descripción, monto, categoría y fecha).
- Listar los gastos existentes, ordenados de forma descendente por fecha.
- Eliminar gastos mediante un botón en cada fila de la tabla.
