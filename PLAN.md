# Plan de Control de Gastos Personales (MVP)

## Arquitectura del Proyecto
- **Backend**: Python Flask
- **Base de Datos**: SQLite (archivo `expenses.db`)
    - **Esquema `expenses`**: `id`, `description`, `amount`, `category`, `date`
- **Frontend**: HTML, CSS, y JavaScript (vanilla)
    - Interfaz de usuario servida usando `templates/index.html` y archivos estáticos (`script.js`, `style.css`) en el directorio `static/`.
- **Localización**: La interfaz está localizada en Español.
- **Servidor de Desarrollo**: Corre en `http://localhost:5000` por defecto. Iniciar con `python3 app.py`.
- **Dependencias**: Instalar usando `pip install -r requirements.txt`.
- **Pruebas Unitarias**: Ejecutar con `python3 -m unittest test_app.py`.

## Características del MVP
1. **Agregar Gasto**: Permitir al usuario registrar un nuevo gasto con descripción, monto, categoría y fecha.
2. **Ver Gastos**: Mostrar una lista de todos los gastos registrados, ordenados por fecha.
3. **Eliminar Gasto**: Permitir al usuario eliminar un gasto existente.
4. **Categorías Estándar**: Los gastos se clasifican en las siguientes categorías:
    - Comida
    - Transporte
    - Entretenimiento
    - Servicios
    - Otros
