# Plan: Aplicación de Gastos Personales

## Arquitectura del Proyecto
* **Backend:** Python Flask
* **Base de Datos:** SQLite
* **Frontend:** HTML, CSS, JavaScript Vanilla

## Características del MVP (Producto Mínimo Viable)
* **Interfaz de Usuario:** Completamente localizada en Español.
* **Gestión de Gastos:** Capacidad para agregar, visualizar y eliminar gastos personales.
* **Categorías Estándar:** Los gastos se pueden clasificar en las siguientes categorías:
  * Comida
  * Transporte
  * Entretenimiento
  * Servicios
  * Otros
* **Esquema de Base de Datos:**
  * Tabla `expenses`:
    * `id` (INTEGER PRIMARY KEY)
    * `description` (TEXT NOT NULL)
    * `amount` (REAL NOT NULL)
    * `category` (TEXT NOT NULL)
    * `date` (TEXT NOT NULL)
