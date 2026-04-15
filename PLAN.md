# PLAN.md - Personal Expense Tracker

## Project Architecture
- **Backend**: Python Flask
- **Database**: SQLite (schema: `expenses` table with columns: `id`, `description`, `amount`, `category`, and `date`)
- **Frontend**: HTML, CSS, and vanilla JavaScript
- **Local Development Server**: Runs on `http://localhost:5000` by default. Start with `python3 app.py`.

## MVP Features
- The application UI is localized in Spanish.
- Track personal expenses including description, amount, date, and category.
- **Standard Expense Categories**: Comida, Transporte, Entretenimiento, Servicios, y Otros.

## Additional Notes
- Log files (*.log) are ignored via .gitignore and must not be committed to the repository.
- Application dependencies are installed via `pip install -r requirements.txt`.
- Unit tests are run using `python3 -m unittest test_app.py`.
