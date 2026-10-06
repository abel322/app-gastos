# Aplicación de Control de Gastos Personales

## Arquitectura del Proyecto

Este proyecto está construido con la siguiente tecnología:

*   **Backend:** Python usando el micro-framework Flask.
*   **Base de Datos:** SQLite, para almacenar de manera local los registros de gastos.
*   **Frontend:** Interfaz de usuario simple y responsiva construida con HTML puro, CSS y JavaScript (Vanilla JS).

## Características Principales

La aplicación permite al usuario realizar las siguientes acciones para gestionar sus finanzas:

1.  **Agregar Gastos:** Los usuarios pueden registrar nuevos gastos proporcionando:
    *   Descripción del gasto.
    *   Monto numérico.
    *   Categoría.
    *   Fecha del gasto.
2.  **Listar Gastos:** La aplicación muestra una tabla interactiva con todos los gastos registrados, ordenados desde el más reciente hasta el más antiguo.
3.  **Eliminar Gastos:** Los usuarios tienen la opción de borrar registros individuales para corregir errores o ajustar sus registros.

### Categorías Estándar de Gastos

El sistema actualmente maneja las siguientes categorías estándar predefinidas para ayudar a organizar los gastos:

*   Comida
*   Transporte
*   Entretenimiento
*   Servicios
*   Otros
