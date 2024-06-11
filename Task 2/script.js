let tasks = [];

function addTask() {
    const input = document.getElementById('task-input');
    const taskName = input.value.trim();

    if (taskName !== '') {
        tasks.push({
            name: taskName,
            completed: false
        });

        input.value = '';
        renderTasks();
    }
}

function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

function toggleComplete(index) {
    tasks[index].completed = !tasks[index].completed;
    renderTasks();
}

function renderTasks() {
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = '';

    tasks.forEach((task, index) => {
        const taskItem = document.createElement('li');
        taskItem.className = task.completed ? 'complete' : '';
        taskItem.innerHTML = `
            <input type="checkbox" onchange="toggleComplete(${index})" ${task.completed ? 'checked' : ''}>
            <span>${task.name}</span>
            <button onclick="deleteTask(${index})" class="delete-btn">Delete</button>
        `;
        taskList.appendChild(taskItem);
    });
}

renderTasks();
