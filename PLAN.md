# Plan del Proyecto: Aplicación de Seguimiento de Gastos Personales (Personal Expense Tracker)

## Arquitectura del Proyecto
La aplicación es una plataforma web para registrar y visualizar gastos personales. Se utiliza una arquitectura cliente-servidor con las siguientes tecnologías:

- **Backend:** Python con el microframework Flask.
- **Base de Datos:** SQLite, que almacena localmente los datos de manera sencilla.
- **Frontend:** HTML, CSS y JavaScript puro (Vanilla JS).
- **Idioma de la UI:** Español.

### Esquema de la Base de Datos
La base de datos SQLite contiene una única tabla principal llamada `expenses`, que consta de las siguientes columnas:
- `id` (INTEGER PRIMARY KEY AUTOINCREMENT): Identificador único del gasto.
- `description` (TEXT): Descripción o concepto del gasto.
- `amount` (REAL): Monto o valor monetario del gasto.
- `category` (TEXT): Categoría a la que pertenece el gasto.
- `date` (TEXT): Fecha en la que se realizó el gasto (formato YYYY-MM-DD).

## Características del Producto Mínimo Viable (MVP)

1. **Gestión de Gastos (CRUD Básico):**
   - **Crear (Add):** El usuario podrá añadir un nuevo gasto introduciendo la descripción, monto, fecha y seleccionando una categoría.
   - **Leer (View):** Visualización de todos los gastos registrados mediante una lista o tabla, ordenados por fecha.
   - **Eliminar (Delete):** Posibilidad de borrar un gasto de la lista.

2. **Categorías Estándar:**
   Las categorías predefinidas para clasificar los gastos son:
   - Comida
   - Transporte
   - Entretenimiento
   - Servicios
   - Otros

3. **Interfaz de Usuario (UI):**
   - Localizada enteramente en **Español**.
   - Diseño simple y responsivo usando CSS.
   - Interacción en el lado del cliente (como actualizar la tabla de gastos o mostrar el total sin recargar la página) gestionada por Vanilla JavaScript.

4. **Operaciones del Sistema y Ejecución:**
   - **Instalación de Dependencias:** `pip install -r requirements.txt`.
   - **Servidor Local:** Ejecución a través del comando `python3 app.py`. El servidor se expondrá por defecto en el puerto 5000.
   - **Pruebas Unitarias:** Ejecución de pruebas usando `python3 -m unittest test_app.py` para asegurar que las API de backend (GET, POST, DELETE) funcionen correctamente.
   - **Archivos ignorados:** Los archivos de registro (`*.log`) no deben estar incluidos en el repositorio, gestionado mediante `.gitignore`.
