# Proyecto: Control de Gastos Personales

## Arquitectura del Proyecto

Este proyecto es una aplicación web sencilla para gestionar y realizar seguimiento de gastos personales. Su arquitectura está compuesta por:

- **Backend:** Python con el micro-framework Flask.
- **Base de Datos:** SQLite, usando el archivo `expenses.db` (excluido del control de versiones).
- **Frontend:** Aplicación de página única (SPA) desarrollada con HTML, CSS, y JavaScript "vanilla" (nativo).

El backend expone una API RESTful para realizar operaciones sobre los datos, mientras que el frontend consume estos endpoints asíncronamente mediante la API `fetch`.

## Características de la Aplicación

La aplicación provee las siguientes funcionalidades básicas (CRUD) sobre los gastos:

1. **Agregar Gasto:** Permite registrar un nuevo gasto proporcionando una descripción, monto, categoría y fecha.
2. **Listar Gastos:** Muestra una lista actualizada de todos los gastos registrados en la base de datos ordenados por la fecha más reciente.
3. **Eliminar Gasto:** Permite eliminar un gasto existente de la lista y la base de datos tras la confirmación del usuario.

## Categorías Estándar de Gastos

Se recomienda categorizar los gastos utilizando las siguientes categorías estándar:

- Comida
- Transporte
- Entretenimiento
- Servicios
- Otros
