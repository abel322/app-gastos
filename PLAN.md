# Plan de Arquitectura y Características: Control de Gastos Personales

## Descripción General
Esta es una aplicación de Control de Gastos Personales (Personal Expense Tracker). La interfaz de usuario de la aplicación está localizada en español.

## Arquitectura
- **Backend**: Desarrollado en Python utilizando el framework Flask.
- **Frontend**: Construido con HTML, CSS y JavaScript puro (vanilla).
- **Base de Datos**: SQLite, utilizando un archivo local llamado `expenses.db`.

### Estructura de Archivos
- El backend en Flask sirve el frontend utilizando la plantilla ubicada en `templates/index.html`.
- Los archivos estáticos (JavaScript y CSS) se encuentran en el directorio `static/`, específicamente `script.js` y `style.css`.
- El servidor de desarrollo local se ejecuta en http://localhost:5000 por defecto.

## Esquema de Base de Datos
La base de datos SQLite contiene una tabla principal llamada `expenses` con las siguientes columnas:
- `id` (Entero, Clave Primaria)
- `description` (Texto, Descripción del gasto)
- `amount` (Real, Monto del gasto)
- `category` (Texto, Categoría del gasto)
- `date` (Texto, Fecha del gasto)

## Características
1. **Agregar Gasto**: Los usuarios pueden añadir nuevos gastos especificando descripción, monto, categoría y fecha.
2. **Listar Gastos**: Los gastos se muestran en una lista ordenados cronológicamente de los más recientes a los más antiguos.
3. **Eliminar Gasto**: Se pueden eliminar gastos existentes del registro.
4. **Categorías Estándar**: Los gastos deben clasificarse en una de las siguientes categorías predefinidas:
   - Comida
   - Transporte
   - Entretenimiento
   - Servicios
   - Otros
