# Personal Expense Tracker (Control de Gastos Personales)

## Arquitectura del Proyecto
- **Backend:** Python Flask
- **Base de Datos:** SQLite
- **Frontend:** HTML, CSS, y JavaScript puro (Vanilla JS)

## Funcionalidades del MVP
- Registrar un nuevo gasto incluyendo: descripción, monto, categoría y fecha.
- Visualizar todos los gastos registrados en una tabla ordenada por fecha.
- Eliminar un gasto previamente registrado.

## Categorías Estándar de Gastos
- Comida
- Transporte
- Entretenimiento
- Servicios
- Otros

## Esquema de Base de Datos
El proyecto utiliza una base de datos SQLite. La tabla `expenses` tiene el siguiente esquema:
- `id` (INTEGER PRIMARY KEY AUTOINCREMENT)
- `description` (TEXT NOT NULL)
- `amount` (REAL NOT NULL)
- `category` (TEXT NOT NULL)
- `date` (TEXT NOT NULL)

## Ejecución del Proyecto
Para ejecutar el proyecto, asegúrate de haber instalado las dependencias (`pip install -r requirements.txt`) y levanta el servidor local con el siguiente comando:

```bash
python3 app.py
```
El servidor de desarrollo local correrá en `http://localhost:5000` por defecto.
