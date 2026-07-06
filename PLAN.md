# Plan del Proyecto: Control de Gastos Personales

## Arquitectura
La aplicación utiliza una arquitectura cliente-servidor simple:
- **Backend**: Python con Flask, proveyendo una API REST para gestionar los gastos (añadir, listar, eliminar).
- **Base de Datos**: SQLite3 (`expenses.db`), con una única tabla `expenses` para almacenar los registros.
- **Frontend**: HTML5, CSS3 y JavaScript (Vanilla JS), interactuando con la API REST mediante `fetch`.

## Funcionalidades
- **Registrar gastos**: Permite ingresar la descripción, monto, categoría (Comida, Transporte, Entretenimiento, Servicios u Otros) y fecha del gasto.
- **Listar gastos**: Muestra una tabla con todos los gastos ordenados por fecha, cargados de forma dinámica desde el backend.
- **Eliminar gastos**: Cada fila incluye un botón para eliminar un gasto específico, actualizando la base de datos y la interfaz gráfica al instante.
