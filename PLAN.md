# Personal Expense Tracker - Plan

## Architecture
The application is built using the following technologies:
* **Backend:** Python Flask
* **Database:** SQLite
* **Frontend:** Vanilla HTML, CSS, and JavaScript

## Features
The minimum viable product (MVP) currently supports:
* **Agregar gastos (Adding expenses):** Users can add new expenses specifying description, amount, category, and date.
* **Listar gastos (Listing expenses):** Users can view a list of all recorded expenses.
* **Eliminar gastos (Deleting expenses):** Users can delete an expense.

## Database Schema
The SQLite database consists of a single `expenses` table with the following columns:
* `id` (INTEGER PRIMARY KEY AUTOINCREMENT)
* `description` (TEXT NOT NULL)
* `amount` (REAL NOT NULL)
* `category` (TEXT NOT NULL)
* `date` (TEXT NOT NULL)

## Standard Categories
The predefined standard categories for expenses are:
* Comida
* Transporte
* Entretenimiento
* Servicios
* Otros

## Localization
The application UI is fully localized in **Spanish**.
