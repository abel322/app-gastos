# Plan para Construir una Aplicación de Control de Gastos Personales

Este documento detalla los pasos necesarios para construir una aplicación web completa para el control de gastos personales. La aplicación permitirá a los usuarios registrar, visualizar y eliminar sus gastos diarios.

La implementación de referencia de esta aplicación se encuentra en el código fuente de este proyecto.

## 1. Definición de Requisitos y Funcionalidades
El primer paso es entender qué debe hacer la aplicación:
*   **Registrar un nuevo gasto:** El usuario debe poder ingresar una descripción, el monto, la categoría (ej. Comida, Transporte) y la fecha del gasto.
*   **Listar gastos:** Ver un historial de todos los gastos registrados, ordenados del más reciente al más antiguo.
*   **Eliminar un gasto:** Poder borrar un registro si fue un error o ya no es necesario.
*   **Interfaz de usuario sencilla:** Una página web amigable y responsiva en español.

## 2. Elección del Stack Tecnológico
Para construir esta aplicación de manera rápida y eficiente, usaremos:
*   **Backend:** Python con el framework **Flask**. Es ligero y excelente para construir APIs (interfaces para que el frontend y backend se comuniquen).
*   **Base de Datos:** **SQLite**. Viene integrada con Python y no requiere configuración de servidores, ideal para proyectos simples.
*   **Frontend:** HTML, CSS y JavaScript (Vanilla, sin frameworks pesados).

## 3. Diseño de la Base de Datos
Necesitamos una tabla para almacenar la información de cada gasto. La llamaremos `expenses`.
La tabla tendrá las siguientes columnas:
*   `id`: Identificador único (Número, autoincremental).
*   `description`: Descripción del gasto (Texto).
*   `amount`: Cantidad o costo (Número decimal).
*   `category`: Categoría del gasto (Texto).
*   `date`: Fecha en que se realizó el gasto (Texto o Fecha).

*Referencia: Ver `init_db()` en `app.py`.*

## 4. Desarrollo del Backend (API REST)
El backend en Flask será el puente entre la base de datos y la interfaz gráfica. Debemos programar los siguientes endpoints (rutas):
*   `GET /`: Sirve la página principal (`index.html`).
*   `GET /expenses`: Se conecta a la base de datos, extrae todos los gastos, y los devuelve en formato JSON.
*   `POST /expenses`: Recibe datos en formato JSON desde el frontend, los valida, y los inserta en la base de datos.
*   `DELETE /expenses/<id>`: Recibe el ID de un gasto y lo elimina de la base de datos.

*Referencia: Ver las rutas `@app.route` en `app.py`.*

## 5. Desarrollo del Frontend (Interfaz de Usuario)
La interfaz permitirá al usuario interactuar con la aplicación.
*   **HTML (`templates/index.html`):** Contendrá la estructura: un título, un formulario para ingresar nuevos gastos (descripción, monto, categoría, fecha) y una tabla vacía donde se mostrarán los resultados.
*   **CSS (`static/style.css`):** Para darle un diseño limpio, moderno y responsivo.
*   **JavaScript (`static/script.js`):** La lógica del cliente. Utilizará la función `fetch()` para comunicarse con la API del backend:
    *   Al cargar la página, llamará a `GET /expenses` para llenar la tabla.
    *   Al enviar el formulario, llamará a `POST /expenses` para guardar el gasto, y luego recargará la lista.
    *   Al hacer clic en "Eliminar", llamará a `DELETE /expenses/<id>` y actualizará la lista.

## 6. Pruebas y Aseguramiento de Calidad
Antes de dar la aplicación por terminada, es crucial probar que todas las piezas funcionen juntas correctamente.
*   **Pruebas Unitarias:** Escribir un script (ej. `test_app.py`) usando el módulo `unittest` de Python para automatizar pruebas sobre las rutas del backend (asegurar que guardar, listar y eliminar devuelvan los resultados y códigos HTTP correctos).
*   *Referencia: Ver `test_app.py`.*

## 7. Ejecución y Despliegue
Para ejecutar la aplicación localmente:
1. Instalar las dependencias (Flask): `pip install -r requirements.txt`.
2. Ejecutar el servidor: `python3 app.py`.
3. Abrir en el navegador: `http://localhost:5000`.

*¡Siguiendo este plan, tendrás una aplicación funcional de control de gastos personales!*