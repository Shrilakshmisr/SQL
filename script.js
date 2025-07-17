const API_URL = 'http://localhost:3000/expenses';
const form = document.getElementById('expense-form');
const list = document.getElementById('expense-list');

let editMode = false;
let editId = null;

window.addEventListener('DOMContentLoaded', async () => {
  const res = await fetch(API_URL);
  const expenses = await res.json();
  expenses.forEach(renderExpense);
});

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const amount = document.getElementById('amount').value;
  const description = document.getElementById('description').value;
  const category = document.getElementById('category').value;

  const data = { amount, description, category };

  if (editMode) {
    await fetch(`${API_URL}/${editId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    document.getElementById(editId).remove();
    editMode = false;
    editId = null;
  } else {
    const res = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    const expense = await res.json();
    renderExpense(expense);
  }

  form.reset();
});

function renderExpense(expense) {
  const li = document.createElement('li');
  li.className = 'list-group-item d-flex justify-content-between align-items-center';
  li.id = expense.id;

  li.innerHTML = `
    ₹${expense.amount} - ${expense.description} [${expense.category}]
    <div>
      <button class="btn btn-sm btn-warning me-2" onclick="editExpense(${expense.id}, '${expense.amount}', '${expense.description}', '${expense.category}')">Edit</button>
      <button class="btn btn-sm btn-danger" onclick="deleteExpense(${expense.id})">Delete</button>
    </div>
  `;

  list.appendChild(li);
}

async function deleteExpense(id) {
  await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
  document.getElementById(id).remove();
}

function editExpense(id, amount, description, category) {
  document.getElementById('amount').value = amount;
  document.getElementById('description').value = description;
  document.getElementById('category').value = category;
  editMode = true;
  editId = id;
}
