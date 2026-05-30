# Plan del Proyecto: App de Gastos Personales

## Arquitectura del Proyecto
El proyecto es una aplicación web para el control de gastos personales. La arquitectura se basa en las siguientes tecnologías:
- **Backend:** Python con el microframework Flask.
- **Base de Datos:** SQLite. El esquema consiste en una tabla `expenses` con las columnas: `id`, `description`, `amount`, `category`, y `date`.
- **Frontend:** HTML, CSS y vanilla JavaScript. Los archivos estáticos (`script.js`, `style.css`) se encuentran en el directorio `static/`, y las plantillas (como `index.html`) se sirven desde el directorio `templates/`.

## Características
La aplicación permite a los usuarios:
- **Agregar Gastos:** Los usuarios pueden ingresar un nuevo gasto indicando su descripción, monto, categoría y fecha.
- **Visualizar Gastos:** Los gastos agregados se muestran en una lista ordenada.
- **Eliminar Gastos:** Es posible eliminar un gasto existente de la lista. (Nota: esta funcionalidad se debe mantener y no debe ser removida).

## Categorías Estándar de Gastos
El sistema utilizará y permitirá categorizar los gastos en las siguientes categorías estándar:
- Comida
- Transporte
- Entretenimiento
- Servicios
- Otros
