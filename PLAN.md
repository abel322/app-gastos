# Plan de Arquitectura y Características - Control de Gastos Personales

## Descripción General
Esta aplicación es un "Control de Gastos Personales" diseñada para ayudar al usuario a registrar, visualizar y gestionar sus gastos diarios.
La aplicación utiliza una arquitectura sencilla de cliente-servidor, con un backend en Python/Flask y un frontend en tecnologías web estándar (HTML/CSS/JS).

## Arquitectura

### 1. Backend (Python/Flask)
- **Framework**: Flask se encarga de servir la aplicación y definir las rutas de la API REST para interactuar con la base de datos.
- **Base de Datos**: Se utiliza `SQLite` (archivo `expenses.db`) para almacenar la información de los gastos.
- **Rutas API**:
  - `GET /` : Sirve el archivo `index.html` (Frontend).
  - `GET /expenses` : Retorna la lista de todos los gastos ordenados por fecha de forma descendente en formato JSON.
  - `POST /expenses` : Añade un nuevo gasto a la base de datos. Requiere: `description`, `amount`, `category`, `date`.
  - `DELETE /expenses/<id>` : Elimina un gasto específico utilizando su `id`.

### 2. Frontend (HTML/CSS/JS Vainilla)
- **Interfaz de Usuario**:
  - Un formulario (`index.html`) para introducir nuevos gastos. El campo de categoría es un `<select>` desplegable que incluye opciones estándar: "Comida", "Transporte", "Entretenimiento", "Servicios" y "Otros".
  - Una tabla dinámica donde se listan los gastos actuales.
- **Estilos**: Los estilos (`style.css`) proporcionan un diseño limpio, centrado en el usuario, responsivo y ordenado.
- **Lógica (JavaScript)**:
  - Consumo de la API del backend mediante `fetch`.
  - Actualización dinámica del DOM (tabla de gastos) sin necesidad de recargar la página.
  - Funciones para agregar (`POST`) y eliminar (`DELETE`) gastos, solicitando confirmación del usuario para la eliminación.

## Características Principales

1. **Añadir Gasto**: El usuario puede registrar un gasto introduciendo su descripción, monto, seleccionando la categoría correspondiente y la fecha.
2. **Listado de Gastos**: El sistema muestra los gastos añadidos más recientemente, proporcionando un resumen visual.
3. **Eliminar Gasto**: Es posible eliminar un gasto existente pulsando el botón "Eliminar", lo que pedirá una confirmación y borrará el registro de la base de datos.
4. **Categorización Estándar**: Las categorías están predefinidas (Comida, Transporte, Entretenimiento, Servicios, Otros) para facilitar la agrupación y el análisis de la información financiera.

## Futuras Mejoras (Sugerencias)
- **Filtros y Búsqueda**: Filtrar gastos por fecha o por categoría.
- **Resumen Estadístico**: Mostrar el total gastado por mes o un gráfico de pastel por categorías.
- **Edición de Gastos**: Permitir la actualización de un gasto en caso de error al insertarlo.
- **Paginación**: Si la cantidad de gastos crece mucho, añadir paginación en la tabla.