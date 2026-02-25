# Control de Gastos Personales

Una aplicación web simple para gestionar tus gastos personales, construida con Python (Flask) y JavaScript.

## Características

- Agregar gastos con descripción, monto, categoría y fecha.
- Ver lista de gastos ordenados por fecha.
- Eliminar gastos.
- Interfaz en español.

## Tecnologías

- **Backend**: Python 3, Flask, SQLite
- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)

## Instalación

1. Clona el repositorio.
2. Instala las dependencias:
   ```bash
   pip install -r requirements.txt
   ```

## Ejecución

Para iniciar la aplicación:

```bash
python app.py
```

La aplicación estará disponible en `http://localhost:5000`.

## Pruebas

Para ejecutar las pruebas unitarias del backend:

```bash
python -m unittest test_app.py
```

Para ejecutar las pruebas de frontend (requiere Playwright):

```bash
# Instalar navegadores de Playwright (solo la primera vez)
playwright install

# Ejecutar script de verificación
./verification/run_verification.sh
```
