# Plan del Proyecto: App de Gastos Personales

## Arquitectura del Proyecto

La aplicación de gastos personales sigue una arquitectura de cliente-servidor clásica:

- **Frontend:** Construido con HTML, CSS y JavaScript (Vanilla JS). El frontend se comunica con el backend utilizando peticiones HTTP para visualizar y gestionar los gastos. La interfaz está localizada en español.
- **Backend:** Desarrollado utilizando Python y el micro-framework Flask. Provee una API RESTful para manejar las operaciones CRUD (Crear, Leer, Actualizar, Eliminar) de los gastos.
- **Base de Datos:** Utiliza SQLite para almacenar la información. La base de datos contiene una tabla `expenses` con las siguientes columnas:
  - `id` (Entero, Clave Primaria)
  - `description` (Texto)
  - `amount` (Real)
  - `category` (Texto)
  - `date` (Texto)

## Características del MVP (Minimum Viable Product)

El MVP incluye las siguientes funcionalidades:

1. **Añadir Gasto:** Los usuarios pueden agregar nuevos gastos especificando descripción, monto, categoría (Comida, Transporte, Entretenimiento, Servicios y Otros) y fecha.
2. **Listar Gastos:** Los usuarios pueden ver una lista de todos sus gastos, ordenados por fecha.
3. **Eliminar Gasto:** Los usuarios pueden eliminar gastos registrados previamente.
4. **Localización:** La interfaz de usuario de la aplicación está completamente en español.

## Categorías Estándar de Gastos

- Comida
- Transporte
- Entretenimiento
- Servicios
- Otros

## Consideraciones Adicionales

- El servidor de desarrollo local se ejecuta en `http://localhost:5000` por defecto.
- Para arrancar la aplicación, se utiliza el comando `python3 app.py`.
- Las dependencias se instalan con `pip install -r requirements.txt`.
- Para correr las pruebas unitarias: `python3 -m unittest test_app.py`.
- Los archivos de log (`*.log`) están excluidos en `.gitignore` y no deben ser confirmados en el repositorio.
