const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./database');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(bodyParser.json());

// Get all expenses
app.get('/api/expenses', (req, res) => {
  const sql = 'SELECT * FROM expenses ORDER BY date DESC';
  db.all(sql, [], (err, rows) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: 'success',
      data: rows
    });
  });
});

// Create a new expense
app.post('/api/expenses', (req, res) => {
  const { description, amount, date, category } = req.body;
  const sql = 'INSERT INTO expenses (description, amount, date, category) VALUES (?,?,?,?)';
  const params = [description, amount, date, category];
  db.run(sql, params, function (err, result) {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: 'success',
      data: {
        id: this.lastID,
        description,
        amount,
        date,
        category
      }
    });
  });
});

// Update an expense
app.put('/api/expenses/:id', (req, res) => {
  const { description, amount, date, category } = req.body;
  const sql = `UPDATE expenses SET
               description = COALESCE(?, description),
               amount = COALESCE(?, amount),
               date = COALESCE(?, date),
               category = COALESCE(?, category)
               WHERE id = ?`;
  const params = [description, amount, date, category, req.params.id];
  db.run(sql, params, function (err, result) {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: 'success',
      data: req.body,
      changes: this.changes
    });
  });
});

// Delete an expense
app.delete('/api/expenses/:id', (req, res) => {
  const sql = 'DELETE FROM expenses WHERE id = ?';
  db.run(sql, req.params.id, function (err, result) {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({ message: 'deleted', changes: this.changes });
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
