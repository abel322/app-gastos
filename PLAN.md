# Plan de Arquitectura y Características: Control de Gastos Personales

## 1. Descripción del Proyecto
La aplicación de Control de Gastos Personales es una herramienta web sencilla diseñada para ayudar a los usuarios a realizar un seguimiento de sus gastos diarios. Permite registrar nuevos gastos, visualizarlos en una lista y eliminarlos si es necesario.

## 2. Arquitectura del Sistema
El proyecto sigue una arquitectura cliente-servidor clásica:
- **Backend:** Desarrollado en Python utilizando el microframework Flask. El backend se encarga de servir la aplicación y proporcionar una API REST para gestionar los gastos.
- **Base de Datos:** Se utiliza SQLite como base de datos relacional ligera. El archivo de la base de datos es `expenses.db`.
- **Frontend:** Implementado con HTML5, CSS3 y JavaScript (vanilla). La interfaz de usuario es simple y responsiva.

## 3. Estructura de la Base de Datos
La base de datos SQLite contiene una única tabla llamada `expenses` con el siguiente esquema:
- `id` (INTEGER): Clave primaria autoincremental.
- `description` (TEXT): Breve descripción del gasto.
- `amount` (REAL): El monto del gasto.
- `category` (TEXT): La categoría a la que pertenece el gasto. Las categorías estándar son: Comida, Transporte, Entretenimiento, Servicios, y Otros.
- `date` (TEXT): La fecha en la que se realizó el gasto (formato YYYY-MM-DD).

## 4. Estructura de Directorios
```
.
├── app.py                # Lógica principal del backend en Flask
├── test_app.py           # Pruebas unitarias
├── requirements.txt      # Dependencias del proyecto
├── PLAN.md               # Este documento
├── templates/
│   └── index.html        # Plantilla HTML principal servida por Flask
└── static/
    ├── style.css         # Hoja de estilos CSS
    └── script.js         # Lógica del frontend en JavaScript
```

## 5. Características (Funcionalidades)
- **Ver Gastos:** Al cargar la página principal, el frontend realiza una petición GET a `/expenses` para obtener y mostrar todos los gastos registrados, ordenados por fecha.
- **Agregar Gasto:** Los usuarios pueden agregar un nuevo gasto completando un formulario con descripción, monto, categoría (seleccionada de una lista estándar) y fecha. Al enviar el formulario, se realiza una petición POST a `/expenses`.
- **Eliminar Gasto:** Cada gasto en la lista tiene un botón para eliminarlo. Al hacer clic, el frontend pide confirmación y luego envía una petición DELETE a `/expenses/<id>`.
