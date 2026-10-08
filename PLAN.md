# Plan del Proyecto: Aplicación de Control de Gastos Personales

## Arquitectura del Proyecto
La aplicación es un Rastreador de Gastos Personales (Personal Expense Tracker) construido con la siguiente arquitectura:
- **Backend:** Python con el microframework Flask.
- **Base de Datos:** SQLite (el archivo de la base de datos es `expenses.db`).
- **Frontend:** HTML, CSS y JavaScript puro (vanilla). La interfaz de usuario está localizada en español.

## Características
- **Añadir Gastos:** Los usuarios pueden agregar nuevos gastos proporcionando una descripción, monto, categoría y fecha.
- **Ver Gastos:** Los usuarios pueden visualizar la lista de todos sus gastos registrados.
- **Eliminar Gastos:** Los usuarios pueden eliminar gastos existentes de su registro.
- **Categorías Estándar:** La aplicación permite categorizar los gastos utilizando las siguientes categorías estándar:
  - Comida
  - Transporte
  - Entretenimiento
  - Servicios
  - Otros
