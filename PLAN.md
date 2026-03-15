# Plan del Proyecto: App de Gastos Personales

## Arquitectura del Proyecto
* **Backend:** Python con el framework Flask.
* **Base de Datos:** SQLite.
* **Frontend:** HTML, CSS, y JavaScript puro (Vanilla JS).

## Esquema de la Base de Datos
La base de datos SQLite tiene una tabla principal llamada `expenses` con las siguientes columnas:
* `id`: INTEGER PRIMARY KEY AUTOINCREMENT
* `description`: TEXT NOT NULL
* `amount`: REAL NOT NULL
* `category`: TEXT NOT NULL
* `date`: TEXT NOT NULL

## Características del MVP
El Producto Mínimo Viable (MVP) incluye las siguientes funcionalidades:
1. **Registrar un gasto:** Los usuarios pueden agregar un gasto con descripción, monto, categoría y fecha.
2. **Listar gastos:** Los usuarios pueden ver una lista de todos los gastos registrados.
3. **Eliminar un gasto:** Los usuarios pueden borrar un gasto de la lista.
4. **Categorías estándar:** Los gastos deben clasificarse en una de las siguientes categorías predefinidas:
   * Comida
   * Transporte
   * Entretenimiento
   * Servicios
   * Otros
5. **Idioma:** La interfaz de usuario está localizada en español.
