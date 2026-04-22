# PLAN.md - Personal Expense Tracker

## Project Architecture
- **Backend:** Python Flask
- **Database:** SQLite (file: `expenses.db`)
- **Database Schema:** `expenses` table (`id` INTEGER, `description` TEXT, `amount` REAL, `category` TEXT, `date` TEXT)
- **Frontend:** HTML, CSS, Vanilla JavaScript
- **Development Server:** Runs locally on port 5000 (http://localhost:5000)
- **UI Language:** Spanish

## MVP Features
1. **View Expenses:** Retrieve and display a list of expenses sorted by date.
2. **Add Expense:** Create a new expense with description, amount, category, and date.
   - Standard categories: Comida, Transporte, Entretenimiento, Servicios, Otros.
3. **Delete Expense:** Remove an existing expense by its ID.
4. **Data Persistence:** Expenses are stored reliably using an SQLite database.
