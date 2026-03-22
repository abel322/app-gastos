# Plan del Proyecto: Control de Gastos Personales

## Arquitectura del Proyecto
- **Backend:** Python con el framework Flask.
- **Base de Datos:** SQLite.
- **Frontend:** HTML, CSS y JavaScript puro (vanilla).

## Características del MVP (Producto Mínimo Viable)
- Agregar gastos.
- Ver la lista de gastos.

## Categorías Estándar de Gastos
Las categorías predefinidas para los gastos son:
- Comida
- Transporte
- Entretenimiento
- Servicios
- Otros

## Instrucciones de Instalación y Ejecución

### 1. Instalación de Dependencias
Para instalar las dependencias necesarias del proyecto, ejecuta el siguiente comando:
```bash
pip install -r requirements.txt
```

### 2. Ejecutar el Servidor Local
Para iniciar el servidor local de desarrollo (por defecto en http://localhost:5000), ejecuta:
```bash
python3 app.py
```

### 3. Ejecutar Pruebas Unitarias
Para correr las pruebas unitarias y verificar el correcto funcionamiento del código, utiliza el siguiente comando:
```bash
python3 -m unittest test_app.py
```
