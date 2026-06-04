# Plan del Proyecto: App de Gastos Personales

## 1. Arquitectura del Proyecto
La aplicación es una plataforma web para el control de gastos personales. La arquitectura se divide en:
- **Backend**: Implementado en Python utilizando el microframework Flask.
- **Frontend**: Construido con HTML5, CSS3 y JavaScript (Vanilla), servido a través de plantillas de Flask y archivos estáticos.
- **Base de Datos**: SQLite, elegida por su ligereza y facilidad de integración. El archivo principal es `expenses.db`.

## 2. Características Principales
La aplicación actualmente soporta las siguientes funcionalidades:
- **Añadir Gasto**: Los usuarios pueden registrar nuevos gastos especificando descripción, monto, categoría y fecha.
- **Visualizar Gastos**: Se muestra una lista detallada de todos los gastos registrados, ordenados cronológicamente (los más recientes primero).
- **Eliminar Gasto**: Funcionalidad probada para borrar un gasto específico de la base de datos y la interfaz.

## 3. Categorías de Gastos
Las categorías estándar permitidas y recomendadas para clasificar los gastos son:
- Comida
- Transporte
- Entretenimiento
- Servicios
- Otros

## 4. Estructura de Archivos
- `app.py`: Archivo principal del backend que inicializa la base de datos y define las rutas de la API.
- `test_app.py`: Pruebas unitarias para verificar el funcionamiento de las rutas y operaciones de la base de datos.
- `templates/index.html`: Estructura principal de la interfaz de usuario.
- `static/script.js`: Lógica del lado del cliente para interactuar con la API (fetch).
- `static/style.css`: Estilos de la aplicación.
- `requirements.txt`: Dependencias del proyecto.
- `PLAN.md`: Este documento de arquitectura y planificación.

## 5. Notas Adicionales
- Los archivos de base de datos (`*.db`) y archivos de registro (`*.log`) se ignoran mediante `.gitignore` y no se suben al repositorio.
- El servidor de desarrollo local se ejecuta en `http://localhost:5000` de forma predeterminada usando `python3 app.py`.
