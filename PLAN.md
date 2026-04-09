# Plan del Proyecto: Aplicación de Control de Gastos Personales

## Arquitectura del Proyecto
La aplicación es un **Control de Gastos Personales** (Personal Expense Tracker) que sigue una arquitectura cliente-servidor clásica.

- **Backend:** Desarrollado en Python utilizando el micro-framework **Flask**. El backend expone una API RESTful para realizar operaciones CRUD (Crear, Leer, Eliminar) sobre los gastos.
- **Base de Datos:** Utiliza **SQLite** como motor de base de datos ligero e integrado. El esquema de la base de datos consta de una tabla `expenses` con las siguientes columnas:
  - `id` (INTEGER, Primary Key, Autoincrement)
  - `description` (TEXT, Not Null)
  - `amount` (REAL, Not Null)
  - `category` (TEXT, Not Null)
  - `date` (TEXT, Not Null)
- **Frontend:** Interfaz de usuario construida con **HTML**, **CSS** y **vanilla JavaScript**. El frontend consume los endpoints del backend para mostrar y gestionar los gastos sin necesidad de recargar la página completa.

## Características del MVP (Producto Mínimo Viable)
Las funcionalidades principales contempladas en el MVP son:
1. **Agregar Gasto:** Los usuarios pueden registrar un nuevo gasto proporcionando una descripción, el monto, seleccionando una categoría y la fecha.
2. **Visualizar Gastos:** Los usuarios pueden ver una lista de todos los gastos registrados, ordenados por fecha descendente.
3. **Eliminar Gasto:** Los usuarios tienen la capacidad de eliminar un gasto específico de la lista.

## Categorías Estándar
Para estandarizar el ingreso de información y facilitar la clasificación, se han definido las siguientes categorías de gastos:
- Comida
- Transporte
- Entretenimiento
- Servicios
- Otros

## Configuración y Ejecución
- El servidor de desarrollo local se ejecuta en `http://localhost:5000` por defecto.
- El servidor de la aplicación se inicia con el comando `python3 app.py`.
- Las dependencias se instalan utilizando `pip install -r requirements.txt`.
- Las pruebas unitarias se ejecutan con `python3 -m unittest test_app.py`.
- La interfaz de usuario está localizada en español.