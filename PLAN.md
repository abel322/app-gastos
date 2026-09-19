# Arquitectura y Características del Proyecto

## Descripción General
Esta aplicación es un Rastreador de Gastos Personales que permite a los usuarios registrar, visualizar y eliminar sus gastos de forma sencilla.

## Arquitectura
La aplicación utiliza las siguientes tecnologías:
- **Backend**: Python con el framework Flask.
- **Base de Datos**: SQLite (`expenses.db`), que cuenta con una tabla `expenses` (id, description, amount, category, date).
- **Frontend**: HTML, CSS y Vanilla JavaScript.
    - Se sirve a través de la ruta raíz en `templates/index.html`.
    - Archivos estáticos (`script.js`, `style.css`) en la carpeta `static/`.

## Características
1. **Agregar Gasto**:
   - Los usuarios pueden agregar gastos ingresando una descripción, monto, categoría y fecha.
   - Categorías estándar: Comida, Transporte, Entretenimiento, Servicios, y Otros.

2. **Visualizar Gastos**:
   - Muestra un listado en orden descendente de los gastos registrados.

3. **Eliminar Gasto**:
   - Opción para eliminar gastos existentes.

## Pruebas
Las pruebas unitarias se ejecutan utilizando el módulo `unittest` de Python mediante el comando:
`python3 -m unittest test_app.py`
