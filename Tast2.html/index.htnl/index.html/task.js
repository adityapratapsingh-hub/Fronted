// Load tasks from localStorage on page load
document.addEventListener("DOMContentLoaded", loadTasks);

document.getElementById("addBtn").addEventListener("click", addTask);

function addTask() {
    let taskText = document.getElementById("taskInput").value;
    let priority = document.getElementById("priority").value;

    if (taskText.trim() === "") return alert("Please enter a task!");

    createTaskElement(taskText, priority);

    saveTask(taskText, priority);

    document.getElementById("taskInput").value = "";
}

function createTaskElement(text, priority, completed = false) {
    let ul = document.getElementById("taskList");
    let li = document.createElement("li");

    li.className = priority;
    if (completed) li.classList.add("completed");

    let span = document.createElement("span");
    span.textContent = text;

    span.addEventListener("click", () => {
        span.classList.toggle("completed");
        li.classList.toggle("completed");
        updateLocalStorage();
    });

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    deleteBtn.addEventListener("click", () => {
        li.remove();
        updateLocalStorage();
    });

    let editBtn = document.createElement("button");
    editBtn.textContent = "Edit";

    editBtn.addEventListener("click", () => {
        let newText = prompt("Edit task:", text);
        if (newText) {
            span.textContent = newText;
            updateLocalStorage();
        }
    });

    li.appendChild(span);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);
    ul.appendChild(li);
}


// -------- LOCAL STORAGE ---------

function saveTask(text, priority, completed = false) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push({ text, priority, completed });
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function updateLocalStorage() {
    let tasks = [];
    document.querySelectorAll("#taskList li").forEach(li => {
        tasks.push({
            text: li.children[0].textContent,
            priority: li.classList[0],
            completed: li.classList.contains("completed")
        });
    });

    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    tasks.forEach(task => {
        createTaskElement(task.text, task.priority, task.completed);
    });
}