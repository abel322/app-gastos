# Control de Gastos Personales - Plan y Arquitectura

Este documento describe la arquitectura y las características del proyecto de Control de Gastos Personales.

## Arquitectura del Proyecto

El proyecto está diseñado con las siguientes tecnologías:

- **Backend:** Python con el framework web **Flask**. Se encarga de manejar la API REST para el control de gastos (`app.py`).
- **Base de Datos:** **SQLite** (`expenses.db`), una base de datos ligera. El esquema contiene una tabla `expenses` con las columnas `id`, `description`, `amount`, `category` y `date`.
- **Frontend:** HTML básico (`templates/index.html`), CSS (`static/style.css`) y JavaScript puro o "Vanilla JS" (`static/script.js`).

## Características

La aplicación cuenta con las siguientes funcionalidades, las cuales están probadas y operativas:

1. **Ver Gastos:** Permite visualizar una lista completa de los gastos registrados ordenados por fecha.
2. **Agregar Gastos:** Formulario en el cual el usuario puede ingresar nuevos gastos, especificando detalles como la descripción, el monto, la categoría (Comida, Transporte, Entretenimiento, Servicios y Otros) y la fecha del gasto.
3. **Eliminar Gastos:** Los usuarios pueden remover o eliminar un gasto individual de la lista.

## Desarrollo Local

- El servidor de desarrollo local se ejecuta de manera predeterminada en `http://localhost:5000`.
- Para iniciar el servidor: `python3 app.py`
- Las pruebas unitarias se corren con el comando: `python3 -m unittest test_app.py`
- Para las dependencias, usar: `pip install -r requirements.txt`
