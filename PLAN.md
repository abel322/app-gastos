# Control de Gastos Personales - Plan y Arquitectura

## Arquitectura del Proyecto

El proyecto es una aplicación web de "Control de Gastos Personales" construida con la siguiente arquitectura:

- **Backend:** Desarrollado en Python utilizando el framework Flask.
- **Base de Datos:** SQLite (`expenses.db`), utilizada para almacenar permanentemente la información de los gastos.
- **Frontend:** Construido con HTML, CSS y JavaScript (Vanilla JS), consumiendo una API REST proporcionada por el backend.

## Características Principales

La aplicación permite gestionar los gastos diarios a través de las siguientes funciones:

1. **Agregar Gastos:** Los usuarios pueden ingresar un nuevo gasto indicando su descripción, monto, categoría y fecha.
2. **Ver Historial:** Muestra una lista de todos los gastos registrados, ordenados de forma cronológica descendente.
3. **Eliminar Gastos:** Permite eliminar gastos individuales del registro y de la base de datos.
4. **Categorías Estándar:** La aplicación utiliza un conjunto predefinido de categorías para clasificar los gastos:
   - Comida
   - Transporte
   - Entretenimiento
   - Servicios
   - Otros
