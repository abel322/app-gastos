# Plan para la Aplicación de Control de Gastos Personales

## Arquitectura del Proyecto
La aplicación sigue una arquitectura cliente-servidor clásica:
- **Backend:** Python con el framework Flask.
- **Base de Datos:** SQLite.
- **Frontend:** HTML, CSS y JavaScript vainilla.

## Características del MVP (Producto Mínimo Viable)
El MVP permite a los usuarios:
1. **Ver Gastos:** Visualizar una lista de todos los gastos registrados, ordenados por fecha (más recientes primero).
2. **Agregar Gastos:** Registrar un nuevo gasto proporcionando descripción, monto, categoría y fecha.
3. **Eliminar Gastos:** Eliminar un gasto existente de la lista.

## Esquema de la Base de Datos
La aplicación utiliza una base de datos SQLite con una única tabla `expenses` definida de la siguiente manera:

| Columna       | Tipo de Dato | Descripción                                      |
|---------------|--------------|--------------------------------------------------|
| `id`          | INTEGER      | Clave primaria, autoincremental.                 |
| `description` | TEXT         | Descripción o concepto del gasto.                |
| `amount`      | REAL         | Monto del gasto.                                 |
| `category`    | TEXT         | Categoría del gasto.                             |
| `date`        | TEXT         | Fecha en la que se realizó el gasto (YYYY-MM-DD).|

## Categorías Estándar de Gastos
Para facilitar la organización, se sugiere el uso de las siguientes categorías estándar:
- Comida
- Transporte
- Entretenimiento
- Servicios
- Otros

## Endpoints de la API
El backend expone los siguientes endpoints REST:

### 1. Obtener todos los gastos
- **Ruta:** `/expenses`
- **Método:** `GET`
- **Respuesta Exitosa:** `200 OK` con un arreglo JSON de objetos de gastos.

### 2. Agregar un nuevo gasto
- **Ruta:** `/expenses`
- **Método:** `POST`
- **Cuerpo de la Petición:** JSON con `description`, `amount`, `category`, `date`.
- **Respuesta Exitosa:** `201 Created` con el objeto del gasto recién creado y su `id`.
- **Respuesta de Error:** `400 Bad Request` si faltan campos.

### 3. Eliminar un gasto
- **Ruta:** `/expenses/<id>`
- **Método:** `DELETE`
- **Parámetros de Ruta:** `id` (entero) del gasto a eliminar.
- **Respuesta Exitosa:** `200 OK` con un mensaje de éxito.

## Ejecución del Proyecto
1. Instalar dependencias: `pip install -r requirements.txt`
2. Ejecutar pruebas: `python3 -m unittest test_app.py`
3. Iniciar el servidor: `python3 app.py`
4. Acceder a la aplicación en `http://localhost:5000`
