# Plan: Personal Expense Tracker (Control de Gastos Personales)

## Project Architecture
- **Backend:** Python with Flask framework.
- **Database:** SQLite. Database schema includes an `expenses` table with columns: `id`, `description`, `amount`, `category`, and `date`.
- **Frontend:** HTML, CSS, and Vanilla JavaScript.
- **UI Localization:** Spanish.
- **Local Development Server:** Runs on `http://localhost:5000` by default, started with `python3 app.py`.

## MVP Features
The Minimum Viable Product (MVP) includes the following functionality:
- **Add Expense:** Form to record a new expense. Required fields:
  - Descripción (Description)
  - Monto (Amount)
  - Categoría (Category) - Standard categories: Comida, Transporte, Entretenimiento, Servicios, Otros.
  - Fecha (Date)
- **View Expenses:** List all recorded expenses ordered by date.
- **Delete Expense:** Ability to delete an existing expense.

## Dependencies and Testing
- **Dependencies:** Installed via `pip install -r requirements.txt`.
- **Unit Tests:** Run using `python3 -m unittest test_app.py`.
- **Frontend Verification:** Requires Playwright (`pip install playwright && playwright install chromium`).
