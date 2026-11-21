const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

let tasks = [];
let nextId = 1;

function createItem(task) {
  const li = document.createElement('li');
  if (task.done) li.classList.add('done');

  const taskLeft = document.createElement('div');
  taskLeft.className = 'task-left';

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.checked = task.done;
  checkbox.addEventListener('change', () => {
    tasks = Todo.toggleTask(tasks, task.id);
    render();
  });

  const span = document.createElement('span');
  span.textContent = task.text;

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = '🗑';
  deleteBtn.className = 'delete-btn';
  deleteBtn.addEventListener('click', () => {
    tasks = Todo.removeTask(tasks, task.id);
    render();
  });

  taskLeft.appendChild(checkbox);
  taskLeft.appendChild(span);
  li.appendChild(taskLeft);
  li.appendChild(deleteBtn);
  return li;
}

function render() {
  todoList.textContent = '';
  tasks.forEach((task) => todoList.appendChild(createItem(task)));
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const updated = Todo.addTask(tasks, input.value, nextId);
  if (updated !== tasks) {
    tasks = updated;
    nextId += 1;
    render();
    input.value = '';
    input.focus();
  }
});
