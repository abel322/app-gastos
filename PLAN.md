# Control de Gastos Personales - Plan del Proyecto

## Arquitectura del Proyecto
- **Backend**: Python con Flask.
- **Frontend**: HTML, CSS, y JavaScript (vanilla).
- **Base de Datos**: SQLite.
- **Esquema de Base de Datos**: La tabla principal se llama `expenses` y contiene las siguientes columnas:
  - `id` (INTEGER, Primary Key, Auto-increment)
  - `description` (TEXT)
  - `amount` (REAL)
  - `category` (TEXT)
  - `date` (TEXT)

## Funcionalidades del MVP
El Producto Mínimo Viable (MVP) incluye las siguientes funcionalidades:
1. **Agregar gastos**: Registrar un nuevo gasto especificando la descripción, monto, categoría y fecha.
2. **Listar gastos**: Ver todos los gastos registrados.
3. **Eliminar gastos**: Borrar un gasto específico de la lista.

## Interfaz de Usuario y Configuración
- La aplicación está localizada completamente en **Español**.
- El servidor de desarrollo local está configurado para correr en **http://localhost:5000** por defecto.

## Categorías de Gastos
Las categorías estándar sugeridas para la aplicación son:
- Comida
- Transporte
- Entretenimiento
- Servicios
- Otros
