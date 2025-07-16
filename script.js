let editId = null;

document.getElementById('userForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  const user = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    phone: document.getElementById('phone').value
  };

  if (editId) {
    await fetch(`/users/${editId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user)
    });
    editId = null;
    document.getElementById('submitBtn').textContent = 'Submit';
  } else {
    await fetch('/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user)
    });
  }

  document.getElementById('userForm').reset();
  loadUsers();
});

async function loadUsers() {
  const res = await fetch('/users');
  const users = await res.json();

  const list = document.getElementById('userList');
  list.innerHTML = '';

  users.forEach(user => {
    const li = document.createElement('li');

    const info = document.createElement('span');
    info.textContent = `${user.name} - ${user.email} - ${user.phone}`;

    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.onclick = () => {
      document.getElementById('name').value = user.name;
      document.getElementById('email').value = user.email;
      document.getElementById('phone').value = user.phone;
      editId = user.id;
      document.getElementById('submitBtn').textContent = 'Update';
    };

    const delBtn = document.createElement('button');
    delBtn.textContent = 'Delete';
    delBtn.onclick = async () => {
      await fetch(`/users/${user.id}`, { method: 'DELETE' });
      loadUsers();
    };

    li.appendChild(info);
    li.appendChild(editBtn);
    li.appendChild(delBtn);
    list.appendChild(li);
  });
}

window.onload = loadUsers;
