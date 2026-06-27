# Plan para Aplicación de Gastos Personales

## 1. Visión General
Una aplicación web sencilla para registrar, categorizar y visualizar gastos personales a lo largo del tiempo.

## 2. Pila Tecnológica
- **Backend**: Python con Flask.
- **Base de Datos**: SQLite (para simplicidad y almacenamiento local).
- **Frontend**: HTML5, CSS3, y JavaScript (Vanilla).

## 3. Características Principales
1. **Registro de Gastos**:
    - Formulario para ingresar descripción, monto, categoría y fecha.
    - Categorías predefinidas: Comida, Transporte, Entretenimiento, Servicios, Otros.
2. **Visualización de Gastos**:
    - Tabla o lista mostrando todos los gastos registrados, ordenados por fecha.
3. **Gestión de Gastos**:
    - Capacidad para eliminar gastos registrados por error.
4. **Almacenamiento Persistente**:
    - Los datos se guardan en la base de datos SQLite para mantenerlos entre sesiones.

## 4. Arquitectura de Archivos
- `app.py`: Archivo principal del servidor Flask con los endpoints de la API (GET, POST, DELETE).
- `expenses.db`: Archivo de la base de datos SQLite (se crea automáticamente, no se sube al repositorio).
- `templates/index.html`: Plantilla principal para la interfaz de usuario.
- `static/style.css`: Estilos para la interfaz de usuario.
- `static/script.js`: Lógica del lado del cliente para interactuar con la API (fetch, actualización del DOM).
- `test_app.py`: Pruebas unitarias para los endpoints.

## 5. Próximos Pasos de Desarrollo
- Implementar gráficos de resumen (ej. Chart.js) para mostrar el gasto total por categoría.
- Implementar filtros de fecha (ej. "Ver gastos de este mes").
- Agregar funcionalidad de edición para gastos existentes.
