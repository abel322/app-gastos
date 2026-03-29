# Plan del Proyecto: Control de Gastos Personales

## Arquitectura del Proyecto
- **Backend:** Python con Flask.
- **Base de Datos:** SQLite.
- **Frontend:** HTML, CSS y Vanilla JavaScript.

## Esquema de Base de Datos
La base de datos SQLite contiene una tabla `expenses` con las siguientes columnas:
- `id`: Identificador único (INTEGER PRIMARY KEY AUTOINCREMENT).
- `description`: Descripción del gasto (TEXT).
- `amount`: Monto del gasto (REAL).
- `category`: Categoría a la que pertenece el gasto (TEXT).
- `date`: Fecha en que se realizó el gasto (TEXT).

## Funcionalidades del MVP (Producto Mínimo Viable)
Las funcionalidades principales de la aplicación para este MVP incluyen:
1. **Agregar Gasto:** Los usuarios podrán registrar un nuevo gasto proporcionando descripción, monto, categoría y fecha.
2. **Listar Gastos:** Se mostrará una lista de los gastos registrados previamente, ordenados cronológicamente desde el más reciente.
3. **Eliminar Gasto:** Opción para remover un registro de gasto que haya sido ingresado por error o ya no se desee mantener.

## Categorías Estándar
Las categorías predeterminadas para clasificar los gastos son:
- Comida
- Transporte
- Entretenimiento
- Servicios
- Otros
