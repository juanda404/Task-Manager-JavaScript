const taskForm = document.getElementById('task-form');
const taskList = document.getElementById('task-list');

loadTasks();

taskForm.addEventListener('submit', (event)=>{
    event.preventDefault();

    const taskInput = document.getElementById('task-input');
    const taskText = taskInput.value.trim();
    console.log('New Task:', taskText);
    if(taskText){
        taskList.append(createTaskElement(taskText));
        storeTaskInLocalStorage(taskText);
        taskInput.value = '';
        taskInput.focus(); //manterner foco para add tasks
    }
});

function createTaskElement(taskText){
    const li = document.createElement('li');
    li.className = 'task-item';
    li.setAttribute("role","listitem");

    const span = document.createElement("span");
    span.className = "task-item__text";
    span.textContent = taskText;
    li.append(span,
         createButton("✏️","task-item__btn task-item__btn--edit","Edit task"),
         createButton("❌","task-item__btn task-item__btn--delete", "Delete task")
        );
    return li;
}

function createButton(text, className, ariaLabel){
    const btn = document.createElement("span");
    btn.textContent = text;
    btn.className =  className;
    btn.setAttribute("aria-label",ariaLabel)
    return btn;
}


//Delet tasks
taskList.addEventListener("click",(event)=>{
    if(event.target.classList.contains("task-item__btn--delete"))
    {
        deleteTask(event.target.parentElement);
    }else if(event.target.classList.contains("task-item__btn--edit")){
        editTask(event.target.parentElement);
    }
});
//Delet task
function deleteTask(taskItem){
    if(confirm("Are you sure?")){
        taskItem.remove();
        updateLocalStorage();
    }
}
//Edit task
function editTask(taskItem){
    const newTask = prompt("Edit the task", taskItem.firstChild.textContent)
    if(newTask !== null){
        taskItem.firstChild.textContent = newTask;
        updateLocalStorage();
    }
}

//Local Storage
function storeTaskInLocalStorage(task){
    const tasks = JSON.parse(localStorage.getItem("tasks") || "[]")
    tasks.push(task);
    localStorage.setItem("tasks",JSON.stringify(tasks));
}

//Cargar al momento de refresca la pagina el localstora injecta en el dom
function loadTasks(){
    const tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    tasks.forEach((task) =>{
        taskList.appendChild(createTaskElement(task))
    })
}

//Editar y guardar en localstorage
function updateLocalStorage(){
    const tasks = Array.from(taskList.querySelectorAll("li")).map( (li) => li.firstChild.textContent);
    localStorage.setItem("tasks",JSON.stringify(tasks));

}

//THEME DAK -LIGHT
const themeToggleButton = document.getElementById("toggle-theme-btn");

const currentTheme = localStorage.getItem("theme");
console.log();

themeToggleButton.addEventListener("click", ()=>{
    document.body.classList.toggle("dark-theme");

    const theme = document.body.classList.contains("dark-theme") ? "dark" : "light";

    localStorage.setItem("theme",theme);
});

if(currentTheme === "dark")
{
    document.body.classList.add("dark-theme");
}

