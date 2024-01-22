const inputField = document.getElementById("input-task");
const todoList = document.getElementById("todo-list");

function addTodoItem(){
    if(inputField.value === ''){
        alert("Can not add Empty Todo!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputField.value;
        todoList.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputField.value = "";
    saveData();
}

function addTodo(event) {
    if (event.key === 'Enter') {
        addTodoItem();
    }
  }

todoList.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);

function saveData(){
    localStorage.setItem("todoData",todoList.innerHTML);
}

function displayTodoList(){
    todoList.innerHTML = localStorage.getItem("todoData");
}

displayTodoList();