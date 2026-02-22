# Plan para la App de Gastos Personales

## Objetivo
Desarrollar una aplicación web sencilla para el control de gastos personales. La aplicación permitirá a los usuarios agregar, visualizar y eliminar sus gastos, con un cálculo automático del total.

## Arquitectura
La aplicación seguirá una arquitectura cliente-servidor tradicional.

### Tecnologías
- **Backend:** Python con Flask (micro-framework ligero).
- **Base de Datos:** SQLite (integrada en Python, ideal para uso personal y local).
- **Frontend:** HTML5, CSS3 y JavaScript (Vanilla) para una interfaz limpia y responsiva.

## Estructura de Datos
La base de datos consistirá en una tabla `expenses` con las siguientes columnas:
- `id` (INTEGER, PK): Identificador único.
- `description` (TEXT): Descripción del gasto (ej. "Almuerzo").
- `amount` (REAL): Monto del gasto.
- `category` (TEXT): Categoría (ej. "Comida", "Transporte").
- `date` (TEXT): Fecha del gasto (ISO 8601: YYYY-MM-DD).

## API Endpoints (Backend)
- `GET /`: Renderiza la página principal (`index.html`).
- `GET /expenses`: Retorna la lista de todos los gastos en formato JSON.
- `POST /expenses`: Agrega un nuevo gasto. Requiere JSON con `description`, `amount`, `category`, `date`.
- `DELETE /expenses/<id>`: Elimina el gasto con el ID especificado.

## Interfaz de Usuario (Frontend)
- **Formulario:** Campos para descripción, monto, categoría y fecha. Botón "Agregar Gasto".
- **Lista de Gastos:** Tabla que muestra los registros actuales.
- **Resumen:** Muestra el total acumulado de todos los gastos.
- **Acciones:** Botón para eliminar cada gasto individualmente.

## Pasos de Implementación Realizados
1.  Configuración del entorno Python y dependencias (`Flask`).
2.  Desarrollo del backend (`app.py`) con rutas y conexión a SQLite.
3.  Desarrollo del frontend (`index.html`, `style.css`, `script.js`).
4.  Implementación de pruebas unitarias (`test_app.py`).
5.  Adición de cálculo de totales en tiempo real.

## Futuras Mejoras (Roadmap)
- **Autenticación de Usuarios:** Permitir múltiples usuarios con cuentas separadas.
- **Gráficos y Reportes:** Visualización de gastos por categoría (ej. Chart.js).
- **Filtros Avanzados:** Filtrar por rango de fechas o categorías específicas.
- **Edición de Gastos:** Permitir modificar un gasto existente.
- **Exportación de Datos:** Exportar a CSV o Excel.
