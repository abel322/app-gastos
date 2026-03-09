# Plan de Arquitectura y MVP: Rastreador de Gastos Personales

## Descripción General
Esta aplicación es un Rastreador de Gastos Personales (Personal Expense Tracker) que permite a los usuarios registrar, visualizar y gestionar sus gastos diarios. La interfaz de usuario (UI) de la aplicación está completamente localizada al español.

## Arquitectura del Proyecto

El proyecto está diseñado con una arquitectura cliente-servidor simple:
- **Backend**: Desarrollado en Python utilizando el micro-framework Flask.
- **Base de Datos**: SQLite, que proporciona una solución ligera y sin servidor para el almacenamiento de datos.
- **Frontend**: Construido con tecnologías web estándar: HTML, CSS y JavaScript puro (vanilla).

## Características del Producto Mínimo Viable (MVP)

El MVP incluye las siguientes funcionalidades principales:
1. **Registro de Gastos**: Los usuarios pueden agregar nuevos gastos especificando descripción, monto, categoría y fecha.
2. **Visualización de Gastos**: Una interfaz que muestra todos los gastos registrados.
3. **Categorías Estándar**: Los gastos se clasifican en las siguientes categorías predefinidas:
   - Comida
   - Transporte
   - Entretenimiento
   - Servicios
   - Otros
4. **Eliminación de Gastos**: Los usuarios pueden eliminar gastos registrados previamente.
5. **Localización**: Toda la interfaz de usuario y las categorías están en español.

## Esquema de la Base de Datos

La base de datos SQLite contiene una tabla principal llamada `expenses` con la siguiente estructura:
- `id`: Identificador único del gasto (Clave Primaria).
- `description`: Breve descripción del gasto (Texto).
- `amount`: Monto o valor del gasto (Real/Decimal).
- `category`: Categoría a la que pertenece el gasto (Texto).
- `date`: Fecha en la que se realizó el gasto (Texto).

## Instrucciones de Desarrollo y Ejecución

- **Instalación de Dependencias**:
  Las dependencias del proyecto se pueden instalar ejecutando el siguiente comando:
  ```bash
  pip install -r requirements.txt
  ```

- **Ejecución del Servidor**:
  El servidor de desarrollo de la aplicación se inicia ejecutando:
  ```bash
  python3 app.py
  ```

- **Ejecución de Pruebas Unitarias**:
  Las pruebas unitarias del proyecto se pueden ejecutar usando el siguiente comando:
  ```bash
  python3 -m unittest test_app.py
  ```

- **Verificación del Frontend**:
  Para las pruebas del frontend (si aplica), asegúrese de instalar los binarios del navegador con `playwright install`.
