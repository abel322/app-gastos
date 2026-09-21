# Plan del Proyecto: Aplicación de Gastos Personales

## Arquitectura

La aplicación es un registro de gastos personales que utiliza:
- **Backend:** Python con el framework Flask.
- **Base de Datos:** SQLite (archivo `expenses.db`).
- **Frontend:** HTML, CSS y JavaScript (Vanilla), utilizando la API del backend para manejar las operaciones CRUD.

## Características

1. **Agregar Gasto:** Los usuarios pueden registrar nuevos gastos proporcionando descripción, monto, categoría y fecha.
2. **Listar Gastos:** Los usuarios pueden visualizar una lista de todos los gastos registrados.
3. **Eliminar Gasto:** Los usuarios pueden eliminar gastos existentes del registro.

## Categorías Estándar
Las categorías predeterminadas para los gastos son:
- Comida
- Transporte
- Entretenimiento
- Servicios
- Otros

## API Endpoints (Backend)
- `GET /`: Carga la página principal (index.html).
- `GET /expenses`: Devuelve todos los gastos en formato JSON, ordenados por fecha de forma descendente.
- `POST /expenses`: Agrega un nuevo gasto a la base de datos.
- `DELETE /expenses/<id>`: Elimina el gasto con el identificador proporcionado.
