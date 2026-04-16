# Proyecto: Control de Gastos Personales

## Arquitectura del Proyecto
El proyecto es una aplicación web para el control de gastos personales. Su arquitectura consiste en:
- **Backend:** Python con Flask que proporciona una API RESTful para gestionar los gastos.
- **Base de Datos:** SQLite para el almacenamiento de datos persistentes. La base de datos tiene una tabla `expenses` con las columnas `id`, `description`, `amount`, `category`, y `date`.
- **Frontend:** Interfaz de usuario construida con HTML, CSS y Vanilla JavaScript. Los archivos estáticos se sirven mediante Flask desde los directorios `templates` y `static`.

## Características del MVP (Producto Mínimo Viable)
- **Añadir Gasto:** Formulario que permite al usuario ingresar la descripción, monto, categoría (Comida, Transporte, Entretenimiento, Servicios, Otros) y fecha del gasto.
- **Visualizar Gastos:** Tabla que muestra una lista de todos los gastos registrados, ordenados cronológicamente, con sus respectivos detalles (descripción, monto, categoría, fecha).
- **Eliminar Gasto:** Opción para que el usuario pueda eliminar de la lista cualquier gasto previamente registrado.
