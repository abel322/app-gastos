# Plan para la Aplicación de Control de Gastos Personales

## 1. Visión General
La aplicación de Control de Gastos Personales permitirá a los usuarios registrar, visualizar y eliminar sus gastos diarios. El objetivo es ofrecer una herramienta sencilla y rápida para gestionar las finanzas personales desde cualquier navegador web.

## 2. Arquitectura y Stack Tecnológico
La aplicación sigue una arquitectura cliente-servidor clásica.
- **Backend:** Python con el framework Flask.
- **Base de Datos:** SQLite para almacenamiento local y ligero.
- **Frontend:** HTML5, CSS3 y JavaScript puro (Vanilla JS).

## 3. Estructura del Proyecto
- `app.py`: Archivo principal del backend que contiene la configuración de Flask y las rutas de la API.
- `expenses.db`: Archivo de la base de datos SQLite (se crea automáticamente).
- `requirements.txt`: Dependencias del proyecto (Flask, etc.).
- `test_app.py`: Pruebas unitarias para asegurar la calidad del código.
- `templates/index.html`: Estructura y diseño de la interfaz de usuario.
- `static/style.css`: Hojas de estilo para la apariencia visual.
- `static/script.js`: Lógica del lado del cliente para interactuar con la API.

## 4. Características Principales (MVP)
1. **Registrar un Gasto:**
   - Formulario para ingresar descripción, monto, categoría (Comida, Transporte, Entretenimiento, Servicios, Otros) y fecha.
   - Validación básica en el frontend y backend.
2. **Listar Gastos:**
   - Tabla que muestra todos los gastos registrados, ordenados por fecha descendente.
3. **Eliminar Gastos:**
   - Botón de eliminación en cada fila de la tabla para borrar un gasto específico.

## 5. Próximos Pasos (Futuras Mejoras)
- Autenticación de usuarios para soportar múltiples perfiles.
- Gráficos y reportes visuales de gastos por categoría (por ejemplo, usando Chart.js).
- Edición de gastos existentes.
- Exportación de datos a formato CSV.
