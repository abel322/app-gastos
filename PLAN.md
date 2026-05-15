# Plan de la Aplicación de Gastos Personales

## Arquitectura del Proyecto
- **Backend:** Aplicación desarrollada en Python utilizando el framework Flask.
- **Base de Datos:** Base de datos SQLite (`expenses.db`) para almacenar los registros de gastos.
- **Frontend:** Interfaz de usuario construida con HTML, CSS y JavaScript vainilla, servida mediante `templates/index.html` y archivos estáticos (`script.js`, `style.css`) ubicados en el directorio `static/`.

## Características del MVP (Producto Mínimo Viable)
El alcance del MVP está estrictamente restringido a las siguientes funcionalidades:
1. **Agregar gastos:** Capacidad de ingresar un nuevo gasto indicando su descripción, monto, categoría y fecha.
2. **Ver gastos:** Visualizar un listado de los gastos agregados.

## Categorías Estándar de Gastos
El sistema soporta las siguientes categorías:
- Comida
- Transporte
- Entretenimiento
- Servicios
- Otros
