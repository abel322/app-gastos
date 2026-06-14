# Proyecto: Control de Gastos Personales

## Arquitectura
Este proyecto es una aplicación de seguimiento de gastos personales (Personal Expense Tracker).
Consta de:
- **Backend:** Desarrollado en Python usando el microframework Flask.
- **Base de datos:** Utiliza SQLite para almacenar los datos (archivo `expenses.db`).
- **Frontend:** Implementado con HTML, CSS y JavaScript (vanilla). La interfaz de usuario está localizada en español.

## Características
- Permite agregar, listar y eliminar gastos.
- Las categorías estándar para los gastos son:
  - Comida
  - Transporte
  - Entretenimiento
  - Servicios
  - Otros

## Ejecución
- El servidor de desarrollo local corre en `http://localhost:5000` por defecto.
- Se inicia con `python3 app.py`.
- Las dependencias se instalan mediante `pip install -r requirements.txt`.
- Las pruebas unitarias se ejecutan con `python3 -m unittest test_app.py`.
