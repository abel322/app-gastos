# Proyecto: Aplicación de Control de Gastos Personales

## Arquitectura del Proyecto
El proyecto está construido con la siguiente arquitectura:
- **Backend:** Python con Flask.
- **Base de Datos:** SQLite.
- **Frontend:** HTML, CSS y JavaScript nativo (vanilla).

## Características del MVP (Producto Mínimo Viable)
Las funcionalidades principales de la aplicación son:
- Registro de nuevos gastos.
- Visualización del historial de gastos.
- Eliminación de registros de gastos existentes.

## Esquema de la Base de Datos
La base de datos SQLite tiene una única tabla llamada `expenses` con el siguiente esquema:
- `id`: Identificador único del gasto (INTEGER PRIMARY KEY AUTOINCREMENT).
- `description`: Descripción del gasto (TEXT).
- `amount`: Monto del gasto (REAL).
- `category`: Categoría a la que pertenece el gasto (TEXT).
- `date`: Fecha en que se realizó el gasto (TEXT).

## Categorías Estándar de Gastos
El sistema incluye las siguientes categorías predeterminadas para los gastos:
- Comida
- Transporte
- Entretenimiento
- Servicios
- Otros
