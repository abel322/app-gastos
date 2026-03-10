# PLAN.md

## Arquitectura del Proyecto

El proyecto **Control de Gastos Personales** utiliza una arquitectura cliente-servidor de tres capas:

1. **Backend (Servidor)**:
   - Desarrollado en **Python** utilizando el micro-framework **Flask**.
   - Expone una API REST con los siguientes endpoints:
     - `GET /`: Devuelve la aplicación web principal.
     - `GET /expenses`: Recupera todos los gastos.
     - `POST /expenses`: Agrega un nuevo gasto.
     - `DELETE /expenses/<id>`: Elimina un gasto específico.
2. **Base de Datos**:
   - Utiliza **SQLite** como motor de base de datos relacional.
   - El esquema consta de una tabla `expenses` con los campos: `id`, `description`, `amount`, `category` y `date`.
3. **Frontend (Cliente)**:
   - Construido con tecnologías web estándar: **HTML**, **CSS** y **Vanilla JavaScript**.
   - Consume la API REST del backend para mostrar y gestionar los gastos en una interfaz de usuario de una sola página (SPA).

## Características del MVP (Producto Mínimo Viable)

El MVP del Control de Gastos Personales incluye las siguientes funcionalidades:

* **Agregar Gasto**: Los usuarios pueden registrar un nuevo gasto proporcionando una descripción, monto, categoría y fecha.
* **Listar Gastos**: La aplicación muestra una tabla con todos los gastos registrados, ordenados por fecha de forma descendente.
* **Eliminar Gasto**: Los usuarios pueden borrar un gasto de la lista, lo que lo elimina permanentemente de la base de datos.
* **Categorías Estándar**: El sistema soporta una lista predefinida de categorías para clasificar los gastos (Comida, Transporte, Entretenimiento, Servicios y Otros).
* **Persistencia de Datos**: Toda la información de los gastos se guarda de forma segura en una base de datos local SQLite.
* **Interfaz Localizada**: La interfaz de usuario de la aplicación está completamente en español.
