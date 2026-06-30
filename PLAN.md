# Arquitectura del Proyecto de Control de Gastos Personales

## Visión General
Esta es una aplicación web para el control de gastos personales que permite a los usuarios registrar, visualizar y eliminar sus gastos de forma sencilla.

## Componentes de la Arquitectura

### 1. Backend (Flask - Python)
- El backend está construido en Python utilizando el framework **Flask**.
- Expone un API REST y también sirve los archivos estáticos y las plantillas.
- **Rutas principales:**
  - `GET /`: Retorna la interfaz de usuario en `index.html`.
  - `GET /expenses`: Obtiene todos los gastos registrados en formato JSON.
  - `POST /expenses`: Permite agregar un nuevo gasto recibiendo datos en formato JSON (descripción, monto, categoría, fecha).
  - `DELETE /expenses/<id>`: Elimina un gasto específico basándose en su ID.

### 2. Base de Datos (SQLite)
- Utiliza **SQLite** como motor de base de datos relacional para persistir la información (`expenses.db`).
- Cuenta con una tabla llamada `expenses` con el siguiente esquema:
  - `id`: Identificador único del gasto (Clave primaria, autoincremental).
  - `description`: Descripción del gasto.
  - `amount`: Monto monetario del gasto.
  - `category`: Categoría del gasto.
  - `date`: Fecha en que se realizó el gasto.

### 3. Frontend (HTML, CSS y JavaScript)
- **HTML (`templates/index.html`)**: Proporciona la estructura de la aplicación. Incluye un formulario para agregar gastos con campos para descripción, monto, una lista desplegable (Select) para la categoría y la fecha.
- **CSS (`static/style.css`)**: Define los estilos visuales de la aplicación, como la disposición del contenedor principal, la apariencia del formulario y la tabla de gastos, logrando una interfaz limpia y amigable.
- **JavaScript (`static/script.js`)**: Maneja la interacción en el lado del cliente (Vanilla JavaScript):
  - Intercepta el envío del formulario para realizar la petición `POST` vía `fetch`.
  - Obtiene los gastos a través de una petición `GET` vía `fetch` y actualiza la tabla dinámicamente en el DOM.
  - Maneja la eliminación de gastos mediante un botón en cada fila que ejecuta una petición `DELETE` vía `fetch`.

## Funcionalidades Principales
- **Agregar Gastos**: A través del formulario, el usuario puede registrar un nuevo gasto, eligiendo la categoría de una lista predefinida (Comida, Transporte, Entretenimiento, Servicios y Otros).
- **Listar Gastos**: Los gastos se muestran en una tabla con sus detalles correspondientes.
- **Eliminar Gastos**: Cada gasto tiene un botón para ser eliminado fácilmente de la base de datos.
