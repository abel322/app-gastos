# Documentación del Proyecto: Control de Gastos Personales (MVP)

## Arquitectura del Proyecto

El proyecto está construido utilizando las siguientes tecnologías:
- **Backend:** Python con el framework Flask.
- **Base de Datos:** SQLite.
- **Frontend:** HTML, CSS y JavaScript vainilla (vanilla JS).

### Base de Datos
La base de datos SQLite tiene el siguiente esquema:
- Tabla `expenses`:
  - `id`: Identificador único del gasto (INTEGER PRIMARY KEY AUTOINCREMENT)
  - `description`: Descripción del gasto (TEXT NOT NULL)
  - `amount`: Monto del gasto (REAL NOT NULL)
  - `category`: Categoría del gasto (TEXT NOT NULL)
  - `date`: Fecha del gasto (TEXT NOT NULL)

## Características del MVP (Producto Mínimo Viable)

Las características principales del MVP incluyen:
- **Interfaz de Usuario:** La interfaz de la aplicación está completamente localizada en Español.
- **Operaciones CRUD:**
  - Crear, leer y eliminar gastos.
- **Categorías Estándar:** Las categorías disponibles para los gastos están definidas como:
  - Comida
  - Transporte
  - Entretenimiento
  - Servicios
  - Otros
