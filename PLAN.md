# Plan para la App de Gastos Personales

## 1. Arquitectura del Sistema
El proyecto es una aplicación de Control de Gastos Personales estructurada de la siguiente manera:
- **Backend:** Desarrollado en Python utilizando el framework Flask.
- **Base de Datos:** SQLite, para almacenar la información de los gastos localmente de manera ligera.
- **Frontend:** Construido con HTML, CSS y JavaScript "vanilla" (sin frameworks adicionales).

## 2. Características Principales (Features)
La aplicación cuenta con las siguientes funcionalidades principales:
- **Agregar Gastos:** Interfaz para que el usuario pueda registrar un nuevo gasto con su descripción, monto, categoría y fecha.
- **Visualizar Gastos:** Una tabla o lista que muestra todos los gastos registrados en la base de datos, ordenados cronológicamente (más recientes primero).
- **Eliminar Gastos:** Cada gasto listado incluirá una opción (botón) para eliminar el registro correspondiente de la base de datos de manera definitiva.

## 3. Esquema de Base de Datos
La base de datos SQLite (`expenses.db`) contendrá al menos una tabla principal llamada `expenses`, con la siguiente estructura:

* **Tabla:** `expenses`
  * `id`: `INTEGER PRIMARY KEY AUTOINCREMENT` - Identificador único de cada gasto.
  * `description`: `TEXT NOT NULL` - Descripción breve del gasto.
  * `amount`: `REAL NOT NULL` - Monto o cantidad del gasto.
  * `category`: `TEXT NOT NULL` - Categoría del gasto (ej. Comida, Transporte, Entretenimiento, Servicios, Otros).
  * `date`: `TEXT NOT NULL` - Fecha en la que se realizó el gasto (formato YYYY-MM-DD o similar).

## 4. Notas Adicionales de Desarrollo
- La interfaz de usuario (UI) estará localizada íntegramente en español.
- El servidor de desarrollo local de Flask se ejecuta en el puerto por defecto (5000), accesible en `http://localhost:5000`.
- Los archivos de log (`*.log`) y los archivos de base de datos (`expenses.db` o `test_expenses.db`) deben ignorarse mediante `.gitignore` y no se subirán al repositorio.
- Las dependencias de la aplicación se gestionarán mediante el archivo `requirements.txt`.
