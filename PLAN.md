# Plan de la Aplicación de Gastos Personales (MVP)

## Arquitectura del Proyecto
La aplicación de Control de Gastos Personales utiliza una arquitectura cliente-servidor clásica con las siguientes tecnologías:
- **Backend:** Python con el framework Flask.
- **Base de Datos:** SQLite, que almacena los datos de forma local y ligera.
- **Frontend:** HTML, CSS, y JavaScript (vanilla) para la interfaz de usuario.

## Características del Producto Mínimo Viable (MVP)
El MVP de la aplicación permite realizar las operaciones básicas de gestión de gastos (CRUD):
1. **Ver Gastos:** Listado de los gastos almacenados en la base de datos, mostrados en orden descendente por fecha.
2. **Añadir Gasto:** Formulario para registrar un nuevo gasto especificando su descripción, monto, categoría y fecha.
3. **Eliminar Gasto:** Botón para borrar un gasto específico de la lista.

## Estructura de la Base de Datos
La base de datos SQLite tiene un esquema simple con una tabla `expenses` que incluye las siguientes columnas:
- `id`: Identificador único (INTEGER PRIMARY KEY AUTOINCREMENT).
- `description`: Descripción del gasto (TEXT NOT NULL).
- `amount`: Monto o costo del gasto (REAL NOT NULL).
- `category`: Categoría a la que pertenece el gasto (TEXT NOT NULL).
- `date`: Fecha en que se realizó el gasto (TEXT NOT NULL).

## Categorías Estándar
Las categorías estándar permitidas para los gastos son:
- Comida
- Transporte
- Entretenimiento
- Servicios
- Otros

## Ejecución y Pruebas
- **Instalación de Dependencias:** `pip install -r requirements.txt`
- **Servidor de Desarrollo Local:** Para iniciar el servidor, se debe ejecutar `python3 app.py`. El servidor correrá de forma predeterminada en `http://localhost:5000`.
- **Pruebas Unitarias:** Se ejecutan a través de la librería unittest de Python con el comando `python3 -m unittest test_app.py`.
