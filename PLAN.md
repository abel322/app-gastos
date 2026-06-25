# Arquitectura y Características de la Aplicación de Gastos Personales

## Arquitectura

El proyecto es una aplicación web simple (Personal Expense Tracker) que sigue una arquitectura cliente-servidor tradicional.

### Backend
* **Tecnología**: Python con el micro-framework **Flask**.
* **Responsabilidades**: Proveer una API REST para gestionar los gastos (crear, leer y eliminar). Servir los archivos estáticos y la plantilla principal del frontend.

### Base de Datos
* **Tecnología**: **SQLite** local.
* **Archivo**: `expenses.db`
* **Esquema**: Una tabla `expenses` que contiene:
  * `id`: Identificador único (INTEGER PRIMARY KEY AUTOINCREMENT)
  * `description`: Descripción del gasto (TEXT NOT NULL)
  * `amount`: Monto (REAL NOT NULL)
  * `category`: Categoría del gasto (TEXT NOT NULL)
  * `date`: Fecha del gasto (TEXT NOT NULL)

### Frontend
* **Tecnología**: HTML, CSS, y JavaScript puro (vanilla JS).
* **Responsabilidades**: Interfaz de usuario para visualizar, añadir y eliminar gastos, comunicándose con el backend a través de peticiones HTTP `fetch`.

## Características (Funcionalidades)

1. **Visualización de Gastos**: Muestra una lista de todos los gastos registrados de forma descendente por fecha.
2. **Añadir un Gasto**: Un formulario permite al usuario introducir la descripción, monto, categoría y fecha del gasto. La categoría será seleccionable entre opciones estándar (Comida, Transporte, Entretenimiento, Servicios, Otros).
3. **Eliminar un Gasto**: Cada gasto en la lista tiene un botón para eliminarlo de la base de datos y de la interfaz.
