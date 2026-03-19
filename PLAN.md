# Personal Expense Tracker - Plan & MVP

## Architecture
- **Backend:** Python Flask
- **Database:** SQLite
- **Frontend:** HTML, CSS, and Vanilla JavaScript

## MVP Features
1. **Expense Management:** Add, view, and delete personal expenses.
2. **Standard Expense Categories:**
   - Comida
   - Transporte
   - Entretenimiento
   - Servicios
   - Otros
3. **Storage:** All expenses are stored persistently in an SQLite database (`expenses.db`), using an `expenses` table with columns: `id`, `description`, `amount`, `category`, and `date`.
4. **Localization:** The application UI is localized in Spanish.
