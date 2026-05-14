# Plan del Proyecto: App de Gastos Personales

## Arquitectura del Proyecto
El proyecto sigue una arquitectura cliente-servidor simple:
- **Backend:** Desarrollado en Python utilizando el micro-framework Flask.
- **Base de Datos:** SQLite, almacenada en el archivo `expenses.db` (no versionado en el repositorio).
- **Frontend:** Interfaz web construida con HTML, CSS y Vanilla JavaScript. Se sirve mediante `templates/index.html` y los recursos estáticos están en el directorio `static/`.
- **UI:** La aplicación está localizada en español.

## Funcionalidades del MVP (Producto Mínimo Viable)
Las funcionalidades del MVP están estrictamente restringidas a:
1. **Agregar gastos:** Los usuarios pueden agregar nuevos gastos proporcionando descripción, monto, categoría y fecha. Las categorías estándar son: Comida, Transporte, Entretenimiento, Servicios y Otros.
2. **Ver gastos:** Los usuarios pueden ver una lista de todos los gastos agregados anteriormente.
