# Plan de la Aplicación de Gastos Personales

## Arquitectura del Proyecto

El proyecto está diseñado como una aplicación web sencilla para realizar un seguimiento de los gastos personales. La arquitectura se compone de los siguientes elementos:

*   **Backend:** Desarrollado en Python utilizando el micro-framework **Flask**. El backend expone una API REST para gestionar (crear, leer, eliminar) los gastos y sirve la interfaz de usuario.
*   **Base de Datos:** Se utiliza **SQLite** para el almacenamiento persistente de los datos.
*   **Frontend:** Construido con tecnologías web estándar: **HTML**, **CSS**, y **JavaScript vanilla** para la interactividad.

## Características del MVP (Producto Viable Mínimo)

El MVP de la aplicación de gastos personales incluye las siguientes características fundamentales:

1.  **Registro de Gastos:**
    *   Los usuarios pueden agregar un nuevo gasto proporcionando una descripción, monto, categoría y fecha.
2.  **Visualización de Gastos:**
    *   La aplicación muestra una lista detallada de todos los gastos registrados, ordenados cronológicamente desde el más reciente.
3.  **Eliminación de Gastos:**
    *   Los usuarios tienen la posibilidad de eliminar un registro de gasto existente en caso de error o si ya no es necesario.
4.  **Categorías Estándar:**
    *   Para facilitar la clasificación de los gastos, se han definido las siguientes categorías estándar predeterminadas:
        *   Comida
        *   Transporte
        *   Entretenimiento
        *   Servicios
        *   Otros

## Esquema de la Base de Datos

La base de datos SQLite contiene una única tabla principal para almacenar la información de los gastos.

### Tabla: `expenses`

| Columna       | Tipo    | Descripción                                      |
| :------------ | :------ | :----------------------------------------------- |
| `id`          | INTEGER | Clave primaria autoincremental (identificador).  |
| `description` | TEXT    | Breve descripción del gasto.                     |
| `amount`      | REAL    | Monto o valor monetario del gasto.               |
| `category`    | TEXT    | Categoría a la que pertenece el gasto.           |
| `date`        | TEXT    | Fecha en la que se realizó el gasto.             |

## Ejecución Local

Para el desarrollo y pruebas locales, el servidor de desarrollo corre por defecto en `http://localhost:5000` ejecutando el comando `python3 app.py`. Las dependencias deben instalarse previamente usando `pip install -r requirements.txt`.
