# Plan de la Aplicación de Gastos Personales

## Arquitectura del Proyecto

Esta es una aplicación web simple para el control de gastos personales. La arquitectura se compone de las siguientes tecnologías:

### Backend
- **Python con Flask**: El servidor backend está construido utilizando el micro-framework web Flask, exponiendo una API RESTful para interactuar con los gastos (rutas para añadir, eliminar, y obtener).
- **SQLite**: La base de datos es SQLite, que guarda de forma persistente los gastos en el archivo `expenses.db`. El esquema consiste en una sola tabla `expenses` con las columnas `id`, `description`, `amount`, `category`, y `date`.

### Frontend
- **HTML5**: Estructura la aplicación, sirviendo de interfaz principal `templates/index.html`.
- **CSS3**: Archivos de estilos (`static/style.css`) para darle una apariencia limpia y moderna a la interfaz.
- **JavaScript (Vanilla)**: Lógica en el lado del cliente (`static/script.js`) encargada de interactuar con la API REST del backend mediante llamadas `fetch()`, actualizar dinámicamente la tabla de gastos en el DOM, y manejar los eventos del formulario sin recargar la página.

## Características Funcionales

- **Añadir Gasto**: Los usuarios pueden rellenar un formulario para agregar un nuevo gasto, indicando la descripción, el monto, la fecha y seleccionando una categoría estandarizada de un menú desplegable (Comida, Transporte, Entretenimiento, Servicios, Otros).
- **Listar Gastos**: Los gastos se muestran en una tabla, ordenados por fecha, exhibiendo sus detalles clave.
- **Eliminar Gasto**: Cada fila de gasto incluye un botón para eliminarlo de manera segura (con una confirmación previa en la interfaz gráfica), actualizando inmediatamente la lista.
