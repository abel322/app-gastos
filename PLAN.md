# Personal Expense Tracker - MVP Plan

## Arquitectura del Proyecto
- **Backend:** Python con Flask
- **Frontend:** HTML, CSS y JavaScript puro (Vanilla JS)
- **Base de Datos:** SQLite (archivo: `expenses.db`)
- **Interfaz de Usuario:** Localizada en Español.

## Características del MVP
- **Agregar Gastos:** Formulario para capturar Descripción, Monto, Categoría y Fecha.
- **Listar Gastos:** Visualización de gastos ordenados por fecha de forma descendente.
- **Eliminar Gastos:** Capacidad de borrar un gasto de la lista.
- **Categorías Estándar:** Comida, Transporte, Entretenimiento, Servicios y Otros.

## Detalles Técnicos
- **Servidor de Desarrollo:** Se ejecuta localmente en `http://localhost:5000` por defecto.
- **Ejecución de la App:** `python3 app.py`
- **Dependencias:** Instalación mediante `pip install -r requirements.txt`
- **Pruebas Unitarias:** Ejecución mediante `python3 -m unittest test_app.py`
- **Pruebas de Frontend:** Se requiere Playwright (`pip install playwright && playwright install chromium`).
- **Ignorar Archivos:** Los archivos de logs (`*.log`) no deben ser comiteados.
