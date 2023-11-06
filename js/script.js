// script.js
const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTask");
const taskList = document.getElementById("taskList");
const allTasksButton = document.getElementById("allTasks");
const activeTasksButton = document.getElementById("activeTasks");
const completedTasksButton = document.getElementById("completedTasks");
const clearCompletedButton = document.getElementById("clearCompleted");

addTaskButton.addEventListener("click", () => {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        const li = document.createElement("li");
        li.innerHTML = `
            <span>${taskText}</span>
            <button class="delete-button">Eliminar</button>
        `;

        taskList.appendChild(li);
        taskInput.value = "";

        const deleteButton = li.querySelector(".delete-button");
        deleteButton.addEventListener("click", () => {
            taskList.removeChild(li);
        });

        li.addEventListener("click", () => {
            li.classList.toggle("completed");
        });
    }
});

allTasksButton.addEventListener("click", () => {
    taskList.querySelectorAll("li").forEach((task) => {
        task.style.display = "block";
    });
});

activeTasksButton.addEventListener("click", () => {
    taskList.querySelectorAll("li").forEach((task) => {
        if (task.classList.contains("completed")) {
            task.style.display = "none";
        } else {
            task.style.display = "block";
        }
    });
});

completedTasksButton.addEventListener("click", () => {
    taskList.querySelectorAll("li").forEach((task) => {
        if (task.classList.contains("completed")) {
            task.style.display = "block";
        } else {
            task.style.display = "none";
        }
    });
});

clearCompletedButton.addEventListener("click", () => {
    taskList.querySelectorAll("li.completed").forEach((task) => {
        taskList.removeChild(task);
    });
});
