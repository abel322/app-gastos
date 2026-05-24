# Plan del Proyecto: Control de Gastos Personales

## Arquitectura del Proyecto

El proyecto de Control de Gastos Personales utiliza una arquitectura cliente-servidor clásica.

### Backend

- **Tecnología:** Python con el microframework Flask.
- **Base de Datos:** SQLite. El archivo de base de datos (`expenses.db`) contiene la información persistente pero no debe subirse al repositorio.
- **Esquema de Base de Datos:**
  - La base de datos tiene una tabla principal llamada `expenses`.
  - Columnas: `id` (entero, llave primaria), `description` (texto), `amount` (real), `category` (texto), `date` (texto).

### Frontend

- **Tecnologías:** HTML, CSS y Vanilla JavaScript.
- **Archivos:**
  - `templates/index.html`: Plantilla principal.
  - `static/script.js`: Lógica del lado del cliente para interactuar con la API del backend de manera asíncrona (usando `fetch`).
  - `static/style.css`: Hojas de estilo para la presentación en el navegador.

## Características Principales

1. **Agregar Gasto:**
   - Permite al usuario introducir la descripción del gasto, el monto, la categoría y la fecha.
   - Las categorías estándar sugeridas son:
     - Comida
     - Transporte
     - Entretenimiento
     - Servicios
     - Otros

2. **Listar Gastos:**
   - Muestra todos los gastos registrados de manera descendente según la fecha.
   - La tabla en la interfaz gráfica presenta de forma clara la Descripción, Monto, Categoría, Fecha y la acción de cada registro.

3. **Eliminar Gasto:**
   - Cada gasto tiene un botón para ser eliminado.
   - Antes de eliminar el gasto, el sistema solicita una confirmación del usuario, garantizando un manejo seguro de los datos. Esta función debe mantenerse tal cual, como está actualmente en el sistema.

## Instrucciones de Desarrollo y Ejecución

- **Dependencias:** Para instalar las dependencias necesarias, ejecutar `pip install -r requirements.txt`.
- **Ejecutar el Servidor:** Para iniciar el servidor de desarrollo, ejecutar `python3 app.py`. El servidor escuchará en el puerto 5000 por defecto (`http://localhost:5000`).
- **Pruebas:** Las pruebas unitarias se ejecutan mediante `python3 -m unittest test_app.py`.
- **Verificación Frontend:** Para realizar la verificación de frontend, se debe instalar Playwright con: `pip install playwright && playwright install chromium`.
