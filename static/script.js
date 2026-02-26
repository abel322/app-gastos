document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('expense-form');
    const expenseList = document.getElementById('expense-list');
    const totalAmount = document.getElementById('total-amount');
    const submitBtn = document.getElementById('submit-btn');
    const cancelBtn = document.getElementById('cancel-btn');
    const expenseIdInput = document.getElementById('expense-id');

    // Fetch and display expenses
    fetchExpenses();

    // Add or Update expense
    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const id = expenseIdInput.value;
        const description = document.getElementById('description').value;
        const amount = document.getElementById('amount').value;
        const category = document.getElementById('category').value;
        const date = document.getElementById('date').value;

        const expenseData = { description, amount, category, date };
        let response;

        if (id) {
            // Update existing expense
            response = await fetch(`/expenses/${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(expenseData)
            });
        } else {
            // Add new expense
            response = await fetch('/expenses', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(expenseData)
            });
        }

        if (response.ok) {
            resetForm();
            fetchExpenses();
        } else {
            alert('Error al guardar el gasto');
        }
    });

    cancelBtn.addEventListener('click', resetForm);

    function resetForm() {
        form.reset();
        expenseIdInput.value = '';
        submitBtn.textContent = 'Agregar Gasto';
        cancelBtn.style.display = 'none';
        // Reset select to default
        document.getElementById('category').value = "";
    }

    // Fetch expenses function
    async function fetchExpenses() {
        const response = await fetch('/expenses');
        const expenses = await response.json();

        expenseList.innerHTML = '';
        let total = 0;

        expenses.forEach(expense => {
            total += parseFloat(expense.amount);

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

            // Edit Button
            const editBtn = document.createElement('button');
            editBtn.textContent = 'Editar';
            editBtn.className = 'edit-btn';
            editBtn.style.marginRight = '5px';
            editBtn.style.backgroundColor = '#007bff'; // Blue for edit
            editBtn.onclick = () => loadExpenseForEdit(expense);
            actionCell.appendChild(editBtn);

            // Delete Button
            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Eliminar';
            deleteBtn.className = 'delete-btn';
            deleteBtn.onclick = () => deleteExpense(expense.id);
            actionCell.appendChild(deleteBtn);

            row.appendChild(actionCell);

            expenseList.appendChild(row);
        });

        totalAmount.textContent = total.toFixed(2);
    }

    function loadExpenseForEdit(expense) {
        expenseIdInput.value = expense.id;
        document.getElementById('description').value = expense.description;
        document.getElementById('amount').value = expense.amount;
        document.getElementById('category').value = expense.category;
        document.getElementById('date').value = expense.date;

        submitBtn.textContent = 'Actualizar Gasto';
        cancelBtn.style.display = 'inline-block';
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
