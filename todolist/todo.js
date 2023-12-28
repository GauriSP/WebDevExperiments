function addTask() {
    var taskInput = document.getElementById('taskInput');
    var taskList = document.getElementById('taskList');
    if (taskInput.value.trim() === '') {
        alert('Please enter a task!');
        return;
    }

    var li = document.createElement('li');
    li.innerHTML = '<span>' + taskInput.value + '</span><button onclick="completeTask(this)">✅</button><button onclick="removeTask(this)">❌</button>';
    taskList.appendChild(li);
    taskInput.value = '';
}

function completeTask(button) {
    var li = button.parentElement;
    var span = li.querySelector('span');
    if (li.classList.contains('completed')) {
        button.innerHTML = '✅';
    } 
    else {
        button.innerHTML = '↩️';
    }
    li.classList.toggle('completed');
}

function removeTask(button) {
    var li = button.parentElement;
    li.remove();
}
