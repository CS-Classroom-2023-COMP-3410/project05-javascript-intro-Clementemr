// JavaScript for Interactive To-Do List

const taskInput = document.getElementById("task-input"); // Task input
const addTaskButton = document.getElementById("add-task"); // Add task button
const taskList = document.getElementById("task-list"); // Task list
const filters = document.querySelectorAll(".filter"); // Filter buttons

let tasks = JSON.parse(localStorage.getItem("tasks")) || []; // Tasks array
let currentFilter = "all"; // Current filter

// Initialize tasks and filters
function initialize() {
    renderTasks(); // Render tasks
    applyFilter(currentFilter); // Apply filter
}

// Add a new task
function addTask() {
    const taskText = taskInput.value.trim(); // Get task text
    if (taskText) { // Check if task text is not empty
        tasks.push({ text: taskText, completed: false }); // Add new task
        saveTasks(); // Save tasks
        renderTasks(); // Render tasks
        taskInput.value = ""; // Clear task input
    }
}

// Toggle task completion
function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed; // Toggle task completion
    saveTasks(); // Save tasks
    renderTasks(); // Render tasks
}

// Edit task
function editTask(index) {
    const newText = prompt("Edit your task:", tasks[index].text); // Prompt for new task text
    if (newText !== null) { // Check if new text is not null
        tasks[index].text = newText.trim(); // Update task text
        saveTasks(); // Save tasks
        renderTasks(); // Render tasks
    }
}

// Delete task
function deleteTask(index) {
    tasks.splice(index, 1); // Delete task
    saveTasks(); // Save tasks
    renderTasks(); // Render tasks
}

// Apply filter
function applyFilter(filter) {
    currentFilter = filter; // Update current filter
    filters.forEach(btn => btn.classList.remove("active")); // Remove active class from all filters
    document.querySelector(`[data-filter="${filter}"]`).classList.add("active"); // Add active class to selected filter
    renderTasks(); // Render tasks
}

// Render tasks
function renderTasks() {
    taskList.innerHTML = ""; // Clear task list
    tasks.forEach((task, index) => { // Render each task
        if (currentFilter === "completed" && !task.completed) return; // Check if filter is completed
        if (currentFilter === "pending" && task.completed) return; // Check if filter is pending

        const listItem = document.createElement("li"); // Create list item
        listItem.classList.add(task.completed ? "completed" : "pending"); // Add completed or pending class
        listItem.draggable = true; // Make list item draggable

        const taskText = document.createElement("span"); // Create task text
        taskText.textContent = task.text; // Set task text
        taskText.addEventListener("click", () => toggleTask(index)); // Toggle task completion
        listItem.appendChild(taskText); // Add task text to list item

        const actions = document.createElement("div"); // Create task actions
        actions.classList.add("task-actions"); // Add task actions class

        const editButton = document.createElement("button"); // Create edit button
        editButton.textContent = "Edit"; // Set edit button text
        editButton.addEventListener("click", () => editTask(index)); // Edit task
        actions.appendChild(editButton); // Add edit button to actions

        const deleteButton = document.createElement("button"); // Create delete button
        deleteButton.textContent = "Delete"; // Set delete button text
        deleteButton.addEventListener("click", () => deleteTask(index)); // Delete task
        actions.appendChild(deleteButton); // Add delete button to actions

        listItem.appendChild(actions); // Add actions to list item

        listItem.addEventListener("dragstart", () => { // Drag and drop events
            listItem.classList.add("dragging"); // Add dragging class
        });
        listItem.addEventListener("dragend", () => { // Drag and drop events
            listItem.classList.remove("dragging");  // Remove dragging class
            reorderTasks();
        });

        taskList.appendChild(listItem); // Add list item to task list
    });
}

// Save tasks to localStorage
function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks)); // Save tasks to localStorage
}

// Reorder tasks with drag-and-drop
function reorderTasks() {
    const draggedElements = Array.from(taskList.querySelectorAll("li")); // Get all list items
    tasks = draggedElements.map(item => { // Update tasks array
        const text = item.querySelector("span").textContent; // Get task text
        const completed = item.classList.contains("completed"); // Check if task is completed
        return { text, completed }; // Return task object
    });
    saveTasks(); // Save tasks
}

// Event listeners
addTaskButton.addEventListener("click", addTask); // Add task button
taskInput.addEventListener("keypress", (e) => { // Task input enter key
    if (e.key === "Enter") addTask(); // Add task
});
filters.forEach(filterBtn => { // Filter buttons
    filterBtn.addEventListener("click", () => applyFilter(filterBtn.dataset.filter)); // Apply filter
});
taskList.addEventListener("dragover", (e) => { // Drag and drop events
    e.preventDefault(); // Prevent default behavior
    const dragging = document.querySelector(".dragging"); // Get dragging element
    const afterElement = getDragAfterElement(e.clientY); // Get element after dragging
    if (afterElement == null) { // Check if after element is null
        taskList.appendChild(dragging); // Append dragging element
    } else {
        taskList.insertBefore(dragging, afterElement); // Insert dragging element before after element
    }
});

function getDragAfterElement(y) {
    const draggableElements = [...taskList.querySelectorAll("li:not(.dragging)")]; // Get draggable elements

    return draggableElements.reduce((closest, child) => { // Get closest element
        const box = child.getBoundingClientRect(); // Get bounding box
        const offset = y - box.top - box.height / 2; // Get offset
        if (offset < 0 && offset > closest.offset) { // Check offset
            return { offset, element: child }; // Return closest element
        } else {
            return closest; // Return previous closest element
        }
    }, { offset: Number.NEGATIVE_INFINITY }).element; // Return closest element
}

// Initialize the app
initialize(); // Initialize
