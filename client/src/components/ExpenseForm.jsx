import React, { useState, useEffect } from 'react';
import { TextField, Button, Box, MenuItem } from '@mui/material';

const categories = ['Food', 'Transport', 'Utilities', 'Entertainment', 'Health', 'Other'];

function ExpenseForm({ onAdd, editingExpense, onUpdate, onCancelEdit }) {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [category, setCategory] = useState('');

  useEffect(() => {
    if (editingExpense) {
      setDescription(editingExpense.description);
      setAmount(editingExpense.amount);
      setDate(editingExpense.date);
      setCategory(editingExpense.category);
    } else {
      setDescription('');
      setAmount('');
      setDate('');
      setCategory('');
    }
  }, [editingExpense]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const expenseData = { description, amount: parseFloat(amount), date, category };

    if (editingExpense) {
      onUpdate(editingExpense.id, expenseData);
    } else {
      onAdd(expenseData);
    }

    setDescription('');
    setAmount('');
    setDate('');
    setCategory('');
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mb: 4 }}>
      <TextField
        label="Description"
        variant="outlined"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <TextField
        label="Amount"
        variant="outlined"
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
      />
      <TextField
        label="Date"
        variant="outlined"
        type="date"
        InputLabelProps={{ shrink: true }}
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />
      <TextField
        select
        label="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        sx={{ minWidth: 120 }}
        required
      >
        {categories.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </TextField>
      <Button type="submit" variant="contained" color="primary">
        {editingExpense ? 'Update' : 'Add'}
      </Button>
      {editingExpense && (
        <Button variant="outlined" color="secondary" onClick={onCancelEdit}>
          Cancel
        </Button>
      )}
    </Box>
  );
}

export default ExpenseForm;
