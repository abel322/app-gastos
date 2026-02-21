import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, Typography } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

function ExpenseList({ expenses, onEdit, onDelete }) {
  if (expenses.length === 0) {
    return <Typography variant="h6" align="center" sx={{ mt: 4 }}>No expenses recorded.</Typography>;
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Description</TableCell>
            <TableCell align="right">Amount</TableCell>
            <TableCell align="right">Date</TableCell>
            <TableCell align="right">Category</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {expenses.map((expense) => (
            <TableRow
              key={expense.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {expense.description}
              </TableCell>
              <TableCell align="right">${expense.amount.toFixed(2)}</TableCell>
              <TableCell align="right">{expense.date}</TableCell>
              <TableCell align="right">{expense.category}</TableCell>
              <TableCell align="right">
                <IconButton aria-label="edit" onClick={() => onEdit(expense)}>
                  <EditIcon />
                </IconButton>
                <IconButton aria-label="delete" onClick={() => onDelete(expense.id)}>
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default ExpenseList;
