// Selecting elements from the DOM
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

// Function to add a new task
function addTodo() {
    const task = todoInput.value;
    if (task !== '') {
        // Create new list item
        const li = document.createElement('li');
        
        // Create span element for task text
        const taskSpan = document.createElement('span');
        taskSpan.textContent = task;
        
        // Create delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete-btn');
        
        // Append elements to list item
        li.appendChild(taskSpan);
        li.appendChild(deleteButton);
        
        // Append to the UL
        todoList.appendChild(li);
        
        // Save to localStorage
        saveTodoToLocalStorage(task);
        
        // Clear input field
        todoInput.value = '';
    }
}

// Function to save task to localStorage
function saveTodoToLocalStorage(task) {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Function to fetch tasks from localStorage and display
function fetchTasksFromLocalStorage() {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach(function(task) {
        // Create new list item
        const li = document.createElement('li');
        
        // Create span element for task text
        const taskSpan = document.createElement('span');
        taskSpan.textContent = task;
        
        // Create delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete-btn');
        
        // Append elements to list item
        li.appendChild(taskSpan);
        li.appendChild(deleteButton);
        
        // Append to the UL
        todoList.appendChild(li);
    });
}

// Function to delete task
function deleteTodo(event) {
    if (event.target.classList.contains('delete-btn')) {
        const li = event.target.parentElement;
        const taskText = li.querySelector('span').textContent;

        // Remove from UI
        todoList.removeChild(li);

        // Remove from localStorage
        removeTodoFromLocalStorage(taskText);
    }
}

// Function to remove task from localStorage
function removeTodoFromLocalStorage(task) {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks = tasks.filter(function(item) {
        return item !== task;
    });

    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Event listener for delete button clicks
todoList.addEventListener('click', deleteTodo);

// Load tasks from localStorage when the page loads
document.addEventListener('DOMContentLoaded', fetchTasksFromLocalStorage);
