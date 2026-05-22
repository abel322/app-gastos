# Plan del Proyecto: App de Gastos Personales

## Arquitectura del Proyecto
- **Backend:** Python con el framework Flask.
- **Base de Datos:** SQLite. El archivo de la base de datos (`expenses.db`) almacena los registros y no debe ser añadido al control de versiones.
- **Frontend:** Interfaz construida con HTML, CSS y JavaScript (Vanilla JS). Los archivos estáticos se ubican en la carpeta `static/` y las plantillas en `templates/`.

## Características de la Aplicación
- **Añadir Gastos:** Funcionalidad para registrar un gasto proporcionando descripción, monto, categoría y fecha.
- **Listar Gastos:** Visualización de todos los gastos registrados en una tabla ordenados por fecha.
- **Eliminar Gastos:** Capacidad para borrar un gasto previamente registrado del sistema.
- **Categorías Estándar:** Las categorías predefinidas para los gastos son Comida, Transporte, Entretenimiento, Servicios y Otros.

## Servidor de Desarrollo
- El servidor de desarrollo local se ejecuta en `http://localhost:5000` por defecto.
- El servidor de la aplicación se inicia utilizando el comando `python3 app.py`.
