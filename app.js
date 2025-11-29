const taskForm = document.getElementById('task-form');
const taskList = document.getElementById('task-list');

taskForm.addEventListener('submit', (event)=>{
    event.preventDefault();

    const taskInput = document.getElementById('task-input');
    const taskText = taskInput.value.trim();
    console.log('New Task:', taskText);
    if(taskText){
        taskList.append(createTaskElement(taskText));
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
    console.log(event.target)
    if(event.target.classList.contains("task-item__btn--delete"))
    {
        deleteTask(event.target.parentElement);
    }else if(event.target.classList.contains("task-item__btn--edit")){
        editTask(event.target.parentElement);
    }
});

function deleteTask(taskItem){
    if(confirm("Are you sure?")){
        taskItem.remove();
    }
}

function editTask(taskItem){
    const newTask = prompt("Edit the task", taskItem.firstChild.textContent)
    if(newTask !== null){
        taskItem.firstChild.textContent = newTask;
    }
}