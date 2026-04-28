# Personal Expense Tracker

## Architecture
- **Backend**: Python Flask
- **Database**: SQLite (file: `expenses.db`)
- **Frontend**: HTML, CSS, Vanilla JavaScript
- **API**: RESTful API endpoints for managing expenses

## Database Schema (`expenses` table)
- `id` (INTEGER PRIMARY KEY)
- `description` (TEXT NOT NULL)
- `amount` (REAL NOT NULL)
- `category` (TEXT NOT NULL)
- `date` (TEXT NOT NULL)

## MVP Features
- Add an expense (Description, Amount, Category, Date)
- List all expenses
- Delete an expense
- Categorize expenses (Comida, Transporte, Entretenimiento, Servicios, Otros)
