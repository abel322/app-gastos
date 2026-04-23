# Plan del Proyecto: Aplicación de Gastos Personales

## Arquitectura del Proyecto
- **Backend:** Python con Flask.
- **Base de Datos:** SQLite (`expenses.db`).
- **Frontend:** HTML, CSS y JavaScript vainilla (Vanilla JS).
- **Localización:** Interfaz de usuario en Español.

## Funcionalidades del MVP (Producto Mínimo Viable)
- Ver una lista de todos los gastos ordenados por fecha.
- Agregar un nuevo gasto indicando descripción, monto, categoría y fecha.
- Eliminar un gasto existente.
- Interfaz gráfica accesible desde el navegador, en idioma español.

## Esquema de la Base de Datos
La base de datos SQLite contiene una tabla llamada `expenses` con las siguientes columnas:
- `id`: INTEGER PRIMARY KEY AUTOINCREMENT
- `description`: TEXT NOT NULL
- `amount`: REAL NOT NULL
- `category`: TEXT NOT NULL
- `date`: TEXT NOT NULL

## Categorías de Gastos Estándar
Los gastos se clasifican en las siguientes categorías:
- Comida
- Transporte
- Entretenimiento
- Servicios
- Otros
