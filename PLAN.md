# Plan del Proyecto: Control de Gastos Personales

## Arquitectura del Proyecto

El proyecto sigue una arquitectura clásica cliente-servidor:
- **Backend:** Desarrollado en Python utilizando el microframework Flask. Expone una API REST para gestionar las operaciones de la aplicación y sirve los archivos estáticos y plantillas del frontend.
- **Base de Datos:** SQLite, utilizada para almacenar los gastos de manera local y sencilla.
- **Frontend:** Construido con HTML, CSS y Vanilla JavaScript. Consume la API REST expuesta por el backend para mostrar y actualizar la información de manera asíncrona.

## Características del MVP (Minimum Viable Product)

El Producto Mínimo Viable (MVP) incluye las siguientes funcionalidades básicas:
1.  **Visualización de gastos:** Ver una lista de todos los gastos registrados, ordenados por fecha.
2.  **Creación de gastos:** Agregar nuevos gastos mediante un formulario, proporcionando descripción, monto, categoría y fecha.
3.  **Eliminación de gastos:** Eliminar un gasto específico de la lista.

## Esquema de la Base de Datos

La base de datos SQLite contiene una única tabla principal para manejar los gastos.

### Tabla: `expenses`

| Columna       | Tipo de Dato | Descripción                                      |
| :------------ | :----------- | :----------------------------------------------- |
| `id`          | INTEGER      | Clave primaria, autoincremental.                 |
| `description` | TEXT         | Breve descripción del gasto. No nulo.             |
| `amount`      | REAL         | Monto del gasto. No nulo.                        |
| `category`    | TEXT         | Categoría del gasto. No nulo.                    |
| `date`        | TEXT         | Fecha en la que se realizó el gasto. No nulo.    |
