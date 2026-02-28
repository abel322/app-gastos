# Plan para Desarrollar una Aplicación de Gastos Personales

Este documento detalla los pasos para construir una aplicación web para el control de gastos personales.

## 1. Arquitectura y Tecnologías
- **Backend:** Python con el framework Flask.
- **Base de Datos:** SQLite para un almacenamiento ligero y fácil de configurar.
- **Frontend:** HTML, CSS y JavaScript vainilla (Vanilla JS).

## 2. Estructura de la Base de Datos
Crearemos una tabla llamada `expenses` con los siguientes campos:
- `id`: Identificador único (Clave primaria, autoincremental).
- `description`: Descripción del gasto (Texto).
- `amount`: Monto del gasto (Número real).
- `category`: Categoría del gasto, por ejemplo: Comida, Transporte, Entretenimiento, Servicios, Otros (Texto).
- `date`: Fecha en que se realizó el gasto (Texto o Fecha).

## 3. Desarrollo del Backend (API y Servidor)
Implementaremos las siguientes rutas en nuestra aplicación Flask (`app.py`):
- `GET /`: Servirá la página principal (HTML).
- `GET /expenses`: Obtendrá la lista de todos los gastos desde la base de datos y los devolverá en formato JSON.
- `POST /expenses`: Recibirá los datos de un nuevo gasto (descripción, monto, categoría, fecha) en formato JSON, validará los datos e insertará el registro en la base de datos.
- `DELETE /expenses/<id>`: Eliminará un gasto específico de la base de datos usando su ID.

## 4. Desarrollo del Frontend (Interfaz de Usuario)
Construiremos una interfaz sencilla y amigable para el usuario:
- **Estructura HTML (`index.html`):** Contendrá un formulario para ingresar nuevos gastos y una tabla para mostrar la lista de gastos registrados.
- **Estilos CSS (`style.css`):** Para darle un diseño limpio y moderno a la aplicación.
- **Lógica JavaScript (`script.js`):**
  - Manejará el envío del formulario mediante una petición `POST` al backend sin recargar la página (AJAX/Fetch).
  - Al cargar la página y después de añadir o eliminar un gasto, hará una petición `GET` para actualizar dinámicamente la tabla de gastos.
  - Añadirá botones de "Eliminar" a cada fila de la tabla que realizarán una petición `DELETE` al backend.

## 5. Pruebas y Validación
- Escribir pruebas unitarias (usando `unittest` en Python) para asegurar que las rutas de la API funcionan correctamente.
- Probar el flujo completo desde la interfaz de usuario para confirmar que se pueden añadir, ver y eliminar gastos de forma adecuada.

## 6. Siguientes Pasos (Mejoras Futuras)
- Implementar gráficos (por ejemplo, con Chart.js) para visualizar los gastos por categoría.
- Añadir sistema de autenticación de usuarios.
- Permitir la edición de gastos existentes.
- Añadir filtros por rango de fechas o categorías en la vista principal.
