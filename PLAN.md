# Plan del Proyecto: Control de Gastos Personales

## Arquitectura del Proyecto

Este proyecto es una aplicación de Control de Gastos Personales estructurada con una arquitectura cliente-servidor:

- **Backend:** Desarrollado en Python utilizando el micro-framework Flask. El backend provee una API RESTful para gestionar los gastos.
- **Base de Datos:** SQLite, utilizada para almacenar los datos de manera persistente. El esquema de la base de datos consiste en una tabla `expenses` con las siguientes columnas: `id`, `description`, `amount`, `category`, y `date`.
- **Frontend:** Construido con tecnologías web estándar: HTML, CSS y JavaScript (Vanilla). La interfaz de usuario permite interactuar con la API del backend de forma dinámica.

## Características del Producto Mínimo Viable (MVP)

El MVP de la aplicación incluye las funcionalidades esenciales para que un usuario pueda llevar un registro básico de sus gastos:

1. **Agregar Gastos:**
   - Interfaz para registrar un nuevo gasto proporcionando: descripción, monto, categoría y fecha.
   - Las categorías estándar de gastos están definidas como: Comida, Transporte, Entretenimiento, Servicios y Otros.

2. **Visualizar la Lista de Gastos:**
   - Vista en forma de tabla que muestra todos los gastos registrados.
   - Se muestran los detalles de cada gasto: descripción, monto, categoría y fecha.

3. **Eliminar Gastos:**
   - Funcionalidad para borrar un gasto específico de la lista.
