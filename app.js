// let tasks = [];

// function renderTasks() {
//     const taskListElement = document.getElementById("taskList");
//     taskListElement.innerHTML = "";

//     tasks.forEach((task, index) => {
//         const taskElement = document.createElement("div");
//         taskElement.classList.add("task");
//         taskElement.innerHTML = `
{/* <input type="checkbox" onchange="markAsComplete(${index})" ${task.completed ? 'checked' : ''} ${task.completed ? 'disabled' : ''}> */}
//             <span>${task.name}</span>
//             <span class="description">${task.description}</span>
//             <button class="editTask" onclick="editTask(${index})">Edit</button>
//             <button class="deleteTask" onclick="deleteTask(${index})">Delete</button>
//             <button class="completeTask" onclick="completeTask(${index})">Complete</button>
//         `;
//         if (task.completed) {
//             taskElement.classList.add("completed");
//         }
//         taskListElement.appendChild(taskElement);
//     });
// }

// function addTask() {
//     const taskInput = document.getElementById("taskInput");
//     const taskDescriptionInput = document.getElementById("taskDescriptionInput");
//     const newTask = {
//         name: taskInput.value.trim(),
//         description: taskDescriptionInput.value.trim(),
//         completed: false
//     };

//     if (newTask.name !== "") {
//         tasks.push(newTask);
//         taskInput.value = "";
//         taskDescriptionInput.value = "";
//         renderTasks();
//         saveToLocalStorage();
//     }
// }

// function editTask(index) {
//     const editedName = prompt("Edit task name:", tasks[index].name);
//     const editedDescription = prompt("Edit task description:", tasks[index].description);

//     if (editedName !== null && editedDescription !== null) {
//         tasks[index] = {
//             name: editedName.trim(),
//             description: editedDescription.trim(),
//             completed: tasks[index].completed
//         };
//         renderTasks();
//         saveToLocalStorage();
//     }
// }

// function deleteTask(index) {
//     const confirmDelete = confirm("Are you sure you want to delete this task?");

//     if (confirmDelete) {
//         tasks.splice(index, 1);
//         renderTasks();
//         saveToLocalStorage();
//     }
// }

// function completeTask(index) {
//     tasks[index].completed = !tasks[index].completed;
//     renderTasks();
//     saveToLocalStorage();
// }

// function saveToFile() {
//     const content = tasks.map(task => `Task Name:${task.name}\nTask Desc:${task.description}\nCompleted: ${task.completed ? 'Yes' : 'No'}`).join('\n\n');
//     const blob = new Blob([content], { type: 'text/plain' });
//     const link = document.createElement('a');
//     link.href = URL.createObjectURL(blob);
//     link.download = 'todo-list.txt';
//     link.click();
// }


// function clearTasks() {
//     const confirmClear = confirm("Are you sure you want to clear all tasks?");
    
//     if (confirmClear) {
//         tasks = [];
//         renderTasks();
//         saveToLocalStorage(); // Save the empty tasks array to update local storage
//     }
// }


// function saveToLocalStorage() {
//     localStorage.setItem('todoList', JSON.stringify(tasks));
// }

// function loadFromLocalStorage() {
//     const storedTasks = localStorage.getItem('todoList');
    
//     if (storedTasks) {
//         tasks = JSON.parse(storedTasks);
//         renderTasks();
//     }
// }

// // Load tasks from local storage on page load
// loadFromLocalStorage();


let tasks = [];

function renderTasks() {
    const taskListElement = document.getElementById("taskList");
    taskListElement.innerHTML = "";

    tasks.forEach((task, index) => {
        const taskElement = document.createElement("div");
        taskElement.classList.add("task");
        taskElement.innerHTML = `
        
            <span>${task.name}</span>
            <span class="description">${task.description}</span>
            <span class="datetime">${task.dateTime}</span>
            <button class="editTask" onclick="editTask(${index})">Edit</button>
            <button class="deleteTask" onclick="deleteTask(${index})">Delete</button>
            <button class="completeTask" onclick="completeTask(${index})">Complete</button>
        `;
        if (task.completed) {
            taskElement.classList.add("completed");
        }
        taskListElement.appendChild(taskElement);
    });
}

function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskDescriptionInput = document.getElementById("taskDescriptionInput");
    const taskDateTimeInput = document.getElementById("taskDateInput");
    const newTask = {
        name: taskInput.value.trim(),
        description: taskDescriptionInput.value.trim(),
        dateTime: taskDateTimeInput.value,
        completed: false
    };

    if (newTask.name !== "") {
        tasks.push(newTask);
        taskInput.value = "";
        taskDescriptionInput.value = "";
        taskDateTimeInput.value = "";
        renderTasks();
        saveToLocalStorage();
    }
}

// function uncheckTask(index) {
//     tasks[index].completed = false;
//     renderTasks();
//     saveToLocalStorage();
// }

function editTask(index) {
    const editedName = prompt("Edit task name:", tasks[index].name);
    const editedDescription = prompt("Edit task description:", tasks[index].description);
    const editedDateTime = prompt("Edit task date and time (YYYY-MM-DDTHH:mm):", tasks[index].dateTime);

    if (editedName !== null && editedDescription !== null && editedDateTime !== null) {
        tasks[index] = {
            name: editedName.trim(),
            description: editedDescription.trim(),
            dateTime: editedDateTime.trim(),
            completed: tasks[index].completed
        };
        renderTasks();
        saveToLocalStorage();
    }
}

function deleteTask(index) {
    const confirmDelete = confirm("Are you sure you want to delete this task?");

    if (confirmDelete) {
        tasks.splice(index, 1);
        renderTasks();
        saveToLocalStorage();
    }
}

function completeTask(index) {
    tasks[index].completed = !tasks[index].completed;
    renderTasks();
    saveToLocalStorage();
}

function saveToFile() {
    const content = tasks.map(task => `Task Name: ${task.name}\nTask Desc: ${task.description}\nDate and Time: ${task.dateTime}\nCompleted: ${task.completed ? 'Yes' : 'No'}`).join('\n\n');
    const blob = new Blob([content], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'todo-list.txt';
    link.click();
}

function clearTasks() {
    const confirmClear = confirm("Are you sure you want to clear all tasks?");
    
    if (confirmClear) {
        tasks = [];
        renderTasks();
        saveToLocalStorage();
    }
}

function saveToLocalStorage() {
    localStorage.setItem('todoList', JSON.stringify(tasks));
}

function loadFromLocalStorage() {
    const storedTasks = localStorage.getItem('todoList');
    
    if (storedTasks) {
        tasks = JSON.parse(storedTasks);
        renderTasks();
    }
}

// Load tasks from local storage on page load
loadFromLocalStorage();
