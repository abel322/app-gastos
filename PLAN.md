# Plan de la Aplicación de Gastos Personales

## Arquitectura del Proyecto
El proyecto sigue una arquitectura cliente-servidor simple:
- **Backend**: Implementado en Python usando el micro-framework Flask. Provee una API RESTful para gestionar los gastos.
- **Base de Datos**: Utiliza SQLite (`expenses.db`) para el almacenamiento persistente de los gastos.
- **Frontend**: Construido con HTML, CSS y JavaScript vainilla (`templates/index.html`, `static/style.css`, `static/script.js`). Se comunica con el backend a través de peticiones `fetch`.

## Funcionalidades
La aplicación permite a los usuarios:
1. **Ver Gastos**: Mostrar una lista de todos los gastos registrados, ordenados por fecha de forma descendente.
2. **Agregar Gastos**: Un formulario permite registrar nuevos gastos ingresando:
   - Descripción (texto)
   - Monto (número)
   - Categoría (selección entre Comida, Transporte, Entretenimiento, Servicios y Otros)
   - Fecha (fecha)
3. **Eliminar Gastos**: Cada gasto listado tiene un botón para ser eliminado de la base de datos tras una confirmación.
