import sqlite3
from flask import Flask, jsonify, request, render_template

app = Flask(__name__)
DB_NAME = "expenses.db"

def init_db():
    conn = sqlite3.connect(DB_NAME)
    cursor = conn.cursor()
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS expenses (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            description TEXT NOT NULL,
            amount REAL NOT NULL,
            category TEXT NOT NULL,
            date TEXT NOT NULL
        )
    ''')
    conn.commit()
    conn.close()

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/expenses', methods=['GET'])
def get_expenses():
    conn = sqlite3.connect(DB_NAME)
    conn.row_factory = sqlite3.Row
    cursor = conn.cursor()
    cursor.execute('SELECT * FROM expenses ORDER BY date DESC')
    rows = cursor.fetchall()
    conn.close()
    expenses = [dict(row) for row in rows]
    return jsonify(expenses)

@app.route('/expenses', methods=['POST'])
def add_expense():
    data = request.get_json()
    description = data.get('description')
    amount = data.get('amount')
    category = data.get('category')
    date = data.get('date')

    if not description or not amount or not category or not date:
        return jsonify({'error': 'Missing fields'}), 400

    conn = sqlite3.connect(DB_NAME)
    cursor = conn.cursor()
    cursor.execute('INSERT INTO expenses (description, amount, category, date) VALUES (?, ?, ?, ?)',
                   (description, amount, category, date))
    conn.commit()
    new_id = cursor.lastrowid
    conn.close()

    return jsonify({'id': new_id, 'description': description, 'amount': amount, 'category': category, 'date': date}), 201

if __name__ == '__main__':
    init_db()
    app.run(debug=True, port=5000)
