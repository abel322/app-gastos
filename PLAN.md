# Plan del Proyecto: App de Gastos Personales

## Arquitectura del Proyecto
La aplicación de control de gastos personales ("Personal Expense Tracker") tiene la siguiente arquitectura:
- **Backend:** Desarrollado en Python utilizando el micro-framework Flask. Expone una API REST para gestionar los gastos (crear, leer, eliminar).
- **Base de Datos:** Utiliza SQLite para el almacenamiento de datos (`expenses.db`). La tabla `expenses` almacena el `id`, `description`, `amount`, `category`, y `date`.
- **Frontend:** Implementado con HTML, CSS y JavaScript (vanilla). Consume la API REST del backend para mostrar los datos de forma dinámica.

## Características
- Visualizar todos los gastos ordenados por fecha.
- Agregar nuevos gastos a través de un formulario con descripción, monto, categoría y fecha.
- Eliminar gastos existentes.
- Interfaz gráfica fácil de usar y estilizada (en español).

## Categorías Estándar
Los gastos se clasifican en las siguientes categorías estándar:
- Comida
- Transporte
- Entretenimiento
- Servicios
- Otros
