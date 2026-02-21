import React, { useState, useEffect } from 'react';
import { Container, Typography, Box } from '@mui/material';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import { getExpenses, addExpense, updateExpense, deleteExpense } from './api';

function App() {
  const [expenses, setExpenses] = useState([]);
  const [editingExpense, setEditingExpense] = useState(null);

  useEffect(() => {
    fetchExpenses();
  }, []);

  const fetchExpenses = async () => {
    try {
      const data = await getExpenses();
      setExpenses(data);
    } catch (error) {
      console.error('Error fetching expenses:', error);
    }
  };

  const handleAddExpense = async (expenseData) => {
    try {
      const newExpense = await addExpense(expenseData);
      setExpenses((prev) => [newExpense, ...prev]);
    } catch (error) {
      console.error('Error adding expense:', error);
    }
  };

  const handleUpdateExpense = async (id, expenseData) => {
    try {
      await updateExpense(id, expenseData);
      setExpenses((prev) =>
        prev.map((expense) => (expense.id === id ? { ...expense, ...expenseData } : expense))
      );
      setEditingExpense(null);
    } catch (error) {
      console.error('Error updating expense:', error);
    }
  };

  const handleDeleteExpense = async (id) => {
    try {
      await deleteExpense(id);
      setExpenses((prev) => prev.filter((expense) => expense.id !== id));
    } catch (error) {
      console.error('Error deleting expense:', error);
    }
  };

  const handleEditClick = (expense) => {
    setEditingExpense(expense);
  };

  const handleCancelEdit = () => {
    setEditingExpense(null);
  };

  const totalExpenses = expenses.reduce((sum, expense) => sum + expense.amount, 0);

  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom align="center">
          Expense Tracker
        </Typography>
        <Typography variant="h5" align="center" color="primary" sx={{ mb: 2 }}>
          Total: ${totalExpenses.toFixed(2)}
        </Typography>
        <ExpenseForm
          onAdd={handleAddExpense}
          editingExpense={editingExpense}
          onUpdate={handleUpdateExpense}
          onCancelEdit={handleCancelEdit}
        />
        <ExpenseList
          expenses={expenses}
          onEdit={handleEditClick}
          onDelete={handleDeleteExpense}
        />
      </Box>
    </Container>
  );
}

export default App;
