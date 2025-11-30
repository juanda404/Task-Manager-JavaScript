// ============================================
// DOM ELEMENTS
// ============================================
const taskForm = document.getElementById('task-form');
const taskList = document.getElementById('task-list');
const taskInput = document.getElementById('task-input');
const themeToggleButton = document.getElementById('toggle-theme-btn');

// ============================================
// INITIALIZATION
// ============================================
loadTasks();
loadTheme();

// ============================================
// EVENT LISTENERS
// ============================================

// Form submit - Add new task
taskForm.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const taskText = taskInput.value.trim();
    
    if (taskText) {
        taskList.append(createTaskElement(taskText));
        storeTaskInLocalStorage(taskText);
        taskInput.value = '';
        taskInput.focus(); // Keep focus for adding more tasks
    }
});

// Event delegation for edit/delete buttons
taskList.addEventListener('click', (event) => {
    if (event.target.classList.contains('task-item__btn--delete')) {
        deleteTask(event.target.parentElement);
    } else if (event.target.classList.contains('task-item__btn--edit')) {
        editTask(event.target.parentElement);
    }
});

// Theme toggle
themeToggleButton.addEventListener('click', toggleTheme);

// ============================================
// TASK MANAGEMENT FUNCTIONS
// ============================================

/**
 * Creates a task list item element
 * @param {string} taskText - The text content of the task
 * @returns {HTMLLIElement} - Complete task item element
 */
function createTaskElement(taskText) {
    const li = document.createElement('li');
    li.className = 'task-item';
    li.setAttribute('role', 'listitem');

    const span = document.createElement('span');
    span.className = 'task-item__text';
    span.textContent = taskText;

    li.append(
        span,
        createButton('✏️', 'task-item__btn task-item__btn--edit', 'Edit task'),
        createButton('❌', 'task-item__btn task-item__btn--delete', 'Delete task')
    );

    return li;
}

/**
 * Creates a button element for task actions
 * @param {string} text - Button text/emoji
 * @param {string} className - CSS classes
 * @param {string} ariaLabel - Accessibility label
 * @returns {HTMLButtonElement} - Button element
 */
function createButton(text, className, ariaLabel) {
    const btn = document.createElement('button');
    btn.textContent = text;
    btn.className = className;
    btn.setAttribute('aria-label', ariaLabel);
    return btn;
}

/**
 * Deletes a task from DOM and localStorage
 * @param {HTMLLIElement} taskItem - Task element to delete
 */
function deleteTask(taskItem) {
    if (confirm('Are you sure you want to delete this task?')) {
        taskItem.remove();
        updateLocalStorage();
    }
}

/**
 * Edits a task's text content
 * @param {HTMLLIElement} taskItem - Task element to edit
 */
function editTask(taskItem) {
    const currentText = taskItem.firstChild.textContent;
    const newTask = prompt('Edit the task:', currentText);
    
    if (newTask !== null && newTask.trim() !== '') {
        taskItem.firstChild.textContent = newTask.trim();
        updateLocalStorage();
    }
}

// ============================================
// LOCAL STORAGE FUNCTIONS
// ============================================

/**
 * Saves a new task to localStorage
 * @param {string} task - Task text to store
 */
function storeTaskInLocalStorage(task) {
    const tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

/**
 * Loads all tasks from localStorage and renders them
 */
function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    
    tasks.forEach((task) => {
        if (task.trim()) { // Only load non-empty tasks
            taskList.appendChild(createTaskElement(task));
        }
    });
}

/**
 * Syncs current DOM tasks with localStorage
 */
function updateLocalStorage() {
    const tasks = Array.from(taskList.querySelectorAll('li'))
        .map((li) => li.firstChild.textContent.trim())
        .filter((task) => task !== ''); // Remove empty tasks
    
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// ============================================
// THEME FUNCTIONS
// ============================================

/**
 * Toggles between light and dark theme
 */
function toggleTheme() {
    document.body.classList.toggle('dark-theme');
    
    const isDark = document.body.classList.contains('dark-theme');
    const theme = isDark ? 'dark' : 'light';
    
    // Update button text
    themeToggleButton.textContent = isDark ? '☀️ Light Mode' : '🌙 Dark Mode';
    
    // Save preference
    localStorage.setItem('theme', theme);
}

/**
 * Loads saved theme preference from localStorage
 */
function loadTheme() {
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
        themeToggleButton.textContent = '☀️ Light Mode';
    } else {
        themeToggleButton.textContent = '🌙 Dark Mode';
    }
}