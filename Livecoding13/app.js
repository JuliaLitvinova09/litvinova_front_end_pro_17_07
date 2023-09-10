let tasks = [];

function showTasks() {
  tasks.map((task, index) => showTask(task, index));
  // tasks.map(showTask)
}

function showTask(task, index) {
  const parent = document.getElementById('tasks');
  const item = document.createElement('li');
  item.textContent = task;

  const btn = document.createElement('button');
  btn.setAttribute('type', 'button');
  btn.textContent = 'X';
  btn.setAttribute('data-task-index', index);
  btn.addEventListener('click', () => {
    tasks.splice(index, 1);
    localStorage.setItem('ourTasks', JSON.stringify(tasks));
    item.remove();
  });

  item.appendChild(btn)
  parent.appendChild(item);
}

window.addEventListener('load', () => {
  tasks = JSON.parse(localStorage.getItem('ourTasks')) || []; // null || []
  showTasks();

  

});

document.getElementById('btn').addEventListener('click', () => {
  const str = document.forms[0].str.value;
  tasks.push(str);
  showTask(str, tasks.length - 1);
  localStorage.setItem('ourTasks', JSON.stringify(tasks));
});

// JSON