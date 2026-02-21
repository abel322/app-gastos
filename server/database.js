const sqlite3 = require('sqlite3').verbose();
const dbName = 'expenses.db';

const db = new sqlite3.Database(dbName, (err) => {
  if (err) {
    console.error(err.message);
  } else {
    console.log('Connected to the SQLite database.');
    db.run(`CREATE TABLE IF NOT EXISTS expenses (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      description TEXT NOT NULL,
      amount REAL NOT NULL,
      date TEXT NOT NULL,
      category TEXT NOT NULL
    )`, (err) => {
      if (err) {
        console.error(err.message);
      } else {
        console.log('Expenses table created or already exists.');
      }
    });
  }
});

module.exports = db;
