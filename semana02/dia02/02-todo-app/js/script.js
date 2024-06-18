// elementos
const taskInput = document.getElementById("taskInput");
const taskAdd = document.querySelector(".task__add");
const taskList = document.querySelector(".task__list")


// console.log(taskInput)

// eventos
taskAdd.addEventListener("click",event=>{

    const li = document.createElement("li");
    const span = document.createElement('span');
    const button = document.createElement("button");
    const checkbox = document.createElement("input");
    checkbox.type = 'checkbox';

    if(taskInput.value === ""){
        alert("Ingresa un valor");
        return;
    }

    span.textContent = taskInput.value;
    li.appendChild(span);

    button.textContent = "Eliminar";
    li.appendChild(button);

    li.appendChild(checkbox);

    taskList.appendChild(li);

    taskInput.value = "";
    taskInput.focus();
});

taskList.addEventListener("click", event=>{
    // console.log({target : event.target});
    const { target } = event;
    if(target.tagName === "BUTTON"){
        target.parentElement.remove();
    }

    if(target.tagName === "INPUT"){
        
        if(target.checked){
            target.parentElement.style = "color:red; text-decoration: line-through;"
        }else{
            target.parentElement.style = ""

        }

    }
});