# Expense Tracker - Plan de Desarrollo

## Arquitectura del Proyecto
- **Backend:** Desarrollado utilizando Python con el framework web Flask.
- **Base de Datos:** SQLite, almacenando la información en un archivo local (`expenses.db`).
- **Frontend:** Implementado utilizando HTML, CSS y JavaScript nativo (vanilla JS).

## Producto Mínimo Viable (MVP)
El MVP incluirá las siguientes funcionalidades básicas:
- Registro de nuevos gastos.
- Visualización de un listado de los gastos previamente registrados, ordenados por fecha descendente.
- Eliminación de gastos existentes.

## Categorías Estándar
Los gastos podrán clasificarse dentro de las siguientes categorías predefinidas:
- Comida
- Transporte
- Entretenimiento
- Servicios
- Otros

## Esquema de la Base de Datos
La base de datos SQLite consta de una única tabla `expenses` con las siguientes columnas:
- `id` (INTEGER): Clave primaria, autoincremental.
- `description` (TEXT): Descripción del gasto.
- `amount` (REAL): Monto del gasto incurrido.
- `category` (TEXT): Categoría a la que pertenece el gasto (ej. Comida, Transporte, etc.).
- `date` (TEXT): Fecha en la que se realizó el gasto, en formato YYYY-MM-DD.

## Instrucciones de Instalación, Ejecución y Pruebas
1. **Instalación de Dependencias:**
   Ejecutar el siguiente comando en la raíz del proyecto para instalar las librerías necesarias:
   ```bash
   pip install -r requirements.txt
   ```

2. **Ejecución de la Aplicación:**
   Para iniciar el servidor de desarrollo local, ejecutar:
   ```bash
   python3 app.py
   ```
   La aplicación estará disponible por defecto en `http://localhost:5000`.

3. **Ejecución de Pruebas Unitarias:**
   Para correr las pruebas definidas en `test_app.py`, usar el siguiente comando:
   ```bash
   python3 -m unittest test_app.py
   ```

## Notas Adicionales
- Los archivos de log (`*.log`) se encuentran ignorados en el control de versiones vía `.gitignore`.
- La interfaz de usuario (UI) se encuentra localizada en español.
- Si se necesita realizar verificación del frontend usando Playwright, se deben instalar los binarios con `playwright install` previamente.
