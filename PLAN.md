# Plan del Proyecto: App de Gastos Personales

## Arquitectura del Proyecto

El proyecto es una aplicación web para el control de gastos personales. Utiliza una arquitectura cliente-servidor tradicional.

### Backend
- **Framework**: Python Flask
- **Base de datos**: SQLite
- **Archivo de base de datos**: `expenses.db` (no debe ser commiteado al repositorio)
- **Esquema de la base de datos**: La tabla `expenses` contiene las columnas `id`, `description`, `amount`, `category`, y `date`.
- **Rutas Principales**:
  - `GET /` - Sirve la aplicación frontend (`index.html`).
  - `GET /expenses` - Obtiene la lista de todos los gastos.
  - `POST /expenses` - Añade un nuevo gasto.
  - `DELETE /expenses/<id>` - Elimina un gasto existente.

### Frontend
- **Tecnologías**: HTML, CSS, JavaScript (Vanilla)
- **Ubicación de archivos**:
  - `templates/index.html` - Interfaz principal de la aplicación.
  - `static/style.css` - Estilos para la interfaz de usuario.
  - `static/script.js` - Lógica del cliente, como realizar peticiones al backend y actualizar el DOM dinámicamente.
- **Idioma**: La interfaz de usuario está localizada en español.

## Características
1. **Ver Gastos**: Los usuarios pueden ver una lista de todos sus gastos ordenados por fecha.
2. **Añadir Gasto**: Los usuarios pueden agregar un gasto especificando descripción, monto, categoría y fecha.
   - Categorías estándar: Comida, Transporte, Entretenimiento, Servicios y Otros.
3. **Eliminar Gasto**: Los usuarios pueden eliminar gastos haciendo clic en el botón "Eliminar". (Esta funcionalidad existente no debe ser removida).

## Desarrollo y Pruebas
- El servidor de desarrollo local se ejecuta en `http://localhost:5000` por defecto.
- Para arrancar la aplicación, se utiliza `python3 app.py`.
- Las dependencias se instalan con `pip install -r requirements.txt`.
- Las pruebas unitarias se ejecutan utilizando `python3 -m unittest test_app.py`.
