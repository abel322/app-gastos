# Arquitectura del Proyecto de Control de Gastos Personales

## Descripción
La aplicación es una plataforma sencilla para el registro y control de gastos personales. Permite al usuario registrar un gasto incluyendo la descripción, monto, categoría (seleccionada de opciones predefinidas) y fecha. Los gastos pueden visualizarse en una tabla y eliminarse.

## Backend
El backend está desarrollado con **Python** y el micro-framework **Flask**.
- **Archivo principal:** `app.py`
- **Rutas principales:**
  - `GET /`: Sirve la página principal (`index.html`).
  - `GET /expenses`: Obtiene todos los gastos registrados en la base de datos, ordenados del más reciente al más antiguo.
  - `POST /expenses`: Registra un nuevo gasto en la base de datos recibiendo los datos en formato JSON.
  - `DELETE /expenses/<int:id>`: Elimina un gasto específico según su ID.

## Base de Datos
El proyecto utiliza **SQLite** como base de datos integrada.
- **Archivo de base de datos:** `expenses.db` (no se versiona en Git)
- **Esquema:** Cuenta con una única tabla `expenses`.
  - `id`: `INTEGER PRIMARY KEY AUTOINCREMENT`
  - `description`: `TEXT NOT NULL`
  - `amount`: `REAL NOT NULL`
  - `category`: `TEXT NOT NULL` (Valores esperados: Comida, Transporte, Entretenimiento, Servicios, Otros)
  - `date`: `TEXT NOT NULL`

## Frontend
El frontend es servido por Flask utilizando HTML estático complementado con Vanilla JS y CSS.
- **Vistas:** `templates/index.html` que contiene la estructura principal incluyendo el formulario de captura con un elemento `<select>` para las categorías y una tabla (`<table>`) para mostrar los gastos.
- **Lógica (JS):** `static/script.js` se encarga de manejar los eventos del lado del cliente, previniendo recargas de página (`e.preventDefault()`) para las peticiones HTTP y manipulando el DOM dinámicamente utilizando `fetch()` (GET para consultar, POST para insertar, DELETE para eliminar).
- **Estilos:** `static/style.css` contiene los estilos visuales para hacer la aplicación amigable y responsiva.

## Pruebas
Las pruebas unitarias del backend están escritas en `test_app.py` usando el módulo `unittest`.
