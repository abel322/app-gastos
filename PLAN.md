# Plan del Proyecto: App de Control de Gastos Personales

## Arquitectura del Proyecto

El proyecto es una aplicación web para el control de gastos personales. Sigue una arquitectura cliente-servidor clásica:

- **Backend:** Python con el framework Flask. Se encarga de exponer una API RESTful para gestionar los gastos (crear, leer, eliminar).
- **Base de Datos:** SQLite. Los datos se almacenan localmente en un archivo `.db`.
- **Frontend:** Construido con HTML, CSS y JavaScript (Vanilla JS). Se comunica con la API de Flask mediante solicitudes `fetch`.

## Características del MVP (Minimum Viable Product)

El producto mínimo viable de la aplicación debe incluir:

1. **Localización:** La interfaz de usuario (UI) está localizada en español.
2. **Gestión de Gastos:**
   - **Visualización:** El usuario puede ver una lista de todos los gastos, ordenados del más reciente al más antiguo.
   - **Creación:** El usuario puede agregar un nuevo gasto proporcionando:
     - Descripción
     - Monto
     - Categoría
     - Fecha
   - **Eliminación:** El usuario puede eliminar un gasto existente.
3. **Esquema de Base de Datos:**
   - Tabla `expenses` con las siguientes columnas:
     - `id` (INTEGER PRIMARY KEY AUTOINCREMENT)
     - `description` (TEXT NOT NULL)
     - `amount` (REAL NOT NULL)
     - `category` (TEXT NOT NULL)
     - `date` (TEXT NOT NULL)
4. **Categorías Estándar:** Las categorías estándar para los gastos se definen como:
   - Comida
   - Transporte
   - Entretenimiento
   - Servicios
   - Otros

## Consideraciones Adicionales

- El servidor de desarrollo local se ejecuta en `http://localhost:5000` de forma predeterminada, iniciado con `python3 app.py`.
- Las dependencias se pueden instalar mediante `pip install -r requirements.txt`.
- Las pruebas unitarias se ejecutan utilizando `python3 -m unittest test_app.py`.
- Los archivos de registro (`*.log`) se omiten a través del archivo `.gitignore`.
