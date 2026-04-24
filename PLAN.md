# PLAN.md - Documentación del Proyecto: Control de Gastos Personales

## Arquitectura del Proyecto
- **Backend:** Python con Flask.
- **Base de Datos:** SQLite (`expenses.db`).
  - **Esquema (`expenses`):**
    - `id` (INTEGER PRIMARY KEY)
    - `description` (TEXT NOT NULL)
    - `amount` (REAL NOT NULL)
    - `category` (TEXT NOT NULL)
    - `date` (TEXT NOT NULL)
- **Frontend:** HTML, CSS y Vanilla JavaScript.
- **Servidor de Desarrollo:** Corre en `http://localhost:5000` por defecto.

## Características del MVP (Producto Mínimo Viable)
- Interfaz de usuario localizada en español.
- **Categorías Estándar de Gastos:**
  - Comida
  - Transporte
  - Entretenimiento
  - Servicios
  - Otros
- Funcionalidad para agregar, visualizar y eliminar gastos.
