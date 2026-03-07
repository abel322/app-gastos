# Plan del Proyecto: Control de Gastos Personales

## Arquitectura del Proyecto
El proyecto está estructurado como una aplicación cliente-servidor con los siguientes componentes:
- **Backend**: Implementado en Python utilizando el framework Flask.
- **Base de Datos**: Utiliza SQLite para almacenar de forma persistente la información de los gastos.
  - La tabla `expenses` contiene las columnas: `id`, `description`, `amount`, `category` y `date`.
- **Frontend**: Construido con HTML, CSS, y JavaScript puro (vanilla) para la interfaz de usuario.

## Características del MVP (Mínimo Producto Viable)
El MVP incluye las funcionalidades básicas para la gestión de gastos personales:
1. **Crear Gasto**: Permite al usuario registrar un nuevo gasto especificando descripción, monto, categoría y fecha.
2. **Leer Gastos**: Muestra una lista de todos los gastos registrados, ordenados por fecha de forma descendente.
3. **Eliminar Gasto**: Permite al usuario borrar un gasto existente de la lista.

### Categorías Estándar de Gastos
El sistema predefine las siguientes categorías estándar para organizar los gastos:
- Comida
- Transporte
- Entretenimiento
- Servicios
- Otros

## Configuración y Ejecución
- **Instalar Dependencias**: `pip install -r requirements.txt`
- **Iniciar Servidor**: `python3 app.py`
- **Ejecutar Pruebas Unitarias**: `python3 -m unittest test_app.py`
- **Verificación Frontend**: Instalar navegadores con `playwright install` antes de ejecutar scripts de verificación con Playwright.
