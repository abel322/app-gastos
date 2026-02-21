document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('expense-form');
    const expenseList = document.getElementById('expense-list');

    // Fetch and display expenses
    fetchExpenses();

    // Add expense
    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const description = document.getElementById('description').value;
        const amount = document.getElementById('amount').value;
        const category = document.getElementById('category').value;
        const date = document.getElementById('date').value;

        const response = await fetch('/expenses', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ description, amount, category, date })
        });

        if (response.ok) {
            form.reset();
            fetchExpenses();
        } else {
            alert('Error al agregar el gasto');
        }
    });

    // Fetch expenses function
    async function fetchExpenses() {
        const response = await fetch('/expenses');
        const expenses = await response.json();

        expenseList.innerHTML = '';
        expenses.forEach(expense => {
            const row = document.createElement('tr');

            const descCell = document.createElement('td');
            descCell.textContent = expense.description;
            row.appendChild(descCell);

            const amountCell = document.createElement('td');
            amountCell.textContent = '$' + parseFloat(expense.amount).toFixed(2);
            row.appendChild(amountCell);

            const catCell = document.createElement('td');
            catCell.textContent = expense.category;
            row.appendChild(catCell);

            const dateCell = document.createElement('td');
            dateCell.textContent = expense.date;
            row.appendChild(dateCell);

            const actionCell = document.createElement('td');
            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Eliminar';
            deleteBtn.className = 'delete-btn';
            deleteBtn.onclick = () => deleteExpense(expense.id);
            actionCell.appendChild(deleteBtn);
            row.appendChild(actionCell);

            expenseList.appendChild(row);
        });
    }

    // Delete expense function
    window.deleteExpense = async (id) => {
        if (confirm('¿Estás seguro de que deseas eliminar este gasto?')) {
            const response = await fetch(`/expenses/${id}`, {
                method: 'DELETE'
            });

            if (response.ok) {
                fetchExpenses();
            } else {
                alert('Error al eliminar el gasto');
            }
        }
    };
});
