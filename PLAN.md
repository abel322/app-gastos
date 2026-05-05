# Plan de Proyecto: Control de Gastos Personales

## Arquitectura del Proyecto
El proyecto sigue una arquitectura cliente-servidor básica con las siguientes tecnologías:
- **Backend**: Python con el micro-framework Flask. Provee una API RESTful para gestionar los gastos.
- **Base de Datos**: SQLite. Almacena los gastos en un archivo local (`expenses.db`).
- **Frontend**: Construido con tecnologías web estándar (HTML, CSS, JavaScript vanilla). Interactúa con la API del backend para realizar operaciones CRUD.

## Características del MVP (Minimum Viable Product)
- **Agregar Gasto**: Los usuarios pueden ingresar un nuevo gasto indicando descripción, monto, categoría y fecha.
- **Listar Gastos**: La aplicación muestra una lista de todos los gastos registrados, ordenados por fecha de forma descendente.
- **Eliminar Gasto**: Los usuarios pueden borrar un gasto previamente registrado.
- **Categorías Estándar**: Los gastos se clasifican en categorías predefinidas (Comida, Transporte, Entretenimiento, Servicios, Otros) para facilitar la organización.
