# Proyecto: Control de Gastos Personales

## Arquitectura y Tecnologías
Este proyecto es una aplicación web para el control de gastos personales. Está construida utilizando las siguientes tecnologías:
* **Backend:** Python con el framework Flask.
* **Base de Datos:** SQLite (el archivo se llama `expenses.db` y no debe ser incluido en el control de versiones).
* **Frontend:** HTML, CSS y JavaScript (Vanilla).

## Características y Funcionalidades
La aplicación permite a los usuarios gestionar sus gastos financieros con las siguientes funcionalidades principales:
1. **Agregar Gastos:** Los usuarios pueden ingresar un nuevo gasto indicando una descripción, el monto, la categoría y la fecha.
2. **Visualizar Gastos:** Los gastos registrados se muestran en una lista ordenados desde el más reciente.
3. **Eliminar Gastos:** Los usuarios pueden borrar gastos que hayan sido registrados por error o que ya no necesiten visualizar.

## Categorías de Gastos Estándar
Para organizar adecuadamente las finanzas, el sistema utiliza las siguientes categorías estándar:
* Comida
* Transporte
* Entretenimiento
* Servicios
* Otros
