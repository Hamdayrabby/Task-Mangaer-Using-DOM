const input = document.getElementById("input");
const submitBtn = document.getElementById("submitBtn");
const tasklist = document.getElementById("tasklist");

let tasks = [];
let editIndex = null;

function renderTasks() {
    tasklist.innerHTML = "";

    tasks.forEach((task, index) => {
        const taskItem = document.createElement("div");
        taskItem.className = "d-flex justify-content-between align-items-center mt-3 border p-2 rounded";
        
        const taskText = document.createElement("span");
        taskText.textContent = task;

        const actions = document.createElement("div");

        const editBtn = document.createElement("button");
        editBtn.className = "btn btn-warning btn-sm me-2";
        editBtn.textContent = "Edit";
        editBtn.onclick = () => handleEdit(index);

        const deleteBtn = document.createElement("button");
        deleteBtn.className = "btn btn-danger btn-sm";
        deleteBtn.textContent = "Delete";
        deleteBtn.onclick = () => handleDelete(index);

        actions.appendChild(editBtn);
        actions.appendChild(deleteBtn);

        taskItem.appendChild(taskText);
        taskItem.appendChild(actions);

        tasklist.appendChild(taskItem);
    
    });
}

function handleEdit(index) {
    input.value = tasks[index];
    editIndex = index;
    submitBtn.textContent = "Update Task";
}

function handleAdd() {
    const task = input.value.trim();
    if (task === "") {
        alert("Please enter a task");
        return;
    }

    if (editIndex !== null) {
        tasks[editIndex] = task;
        editIndex = null;
        submitBtn.textContent = "Add Task";
    } else {
        tasks.push(task);
    }

    input.value = "";
    renderTasks();
}

function handleDelete(index) {
    const confirmDelete = confirm("Are you sure you want to delete this task?");
    if (!confirmDelete) {
        return;
    }
    tasks.splice(index, 1);
    renderTasks();
} 
submitBtn.addEventListener("click",handleAdd);