let todos = []

let myTodos = JSON.parse(localStorage.getItem('myTodos'))

if (myTodos) {
    todos = myTodos
    showTodo()
}

function addTodo() {
    const inputTodo = document.getElementById('inputTodo');
    const title = inputTodo.value;
    const id = '' + new Date().getTime();

    todos.push({
        name: title,
        id: id
    })

    inputTodo.value = ''
    localStorage.setItem("myTodos", JSON.stringify(todos))
    showTodo()
    console.log(todos)
}

function removeTodo(event) {
    const deleteBtn = event.target
    const deleteTodo = deleteBtn.id

    todos = todos.filter(todo => {
        if (todo.id === deleteTodo) { 
            localStorage.removeItem("myTodos")
            return false        
        } else {
            return true
        }
    })
    localStorage.setItem("myTodos", JSON.stringify(todos))
    showTodo()
    console.log(todos)
}

function showTodo() {
    document.getElementById("todoContainer").textContent = '';

    todos.forEach(function(todo) {
        const titleContainer = document.createElement('p');
        titleContainer.id = "titleContainer"
        titleContainer.textContent = "● " + todo.name;

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = "Done"
        deleteBtn.style.padding = "5px 10px"
        deleteBtn.style.borderRadius = "5px"
        deleteBtn.style.border = "1px solid black"
        deleteBtn.style.marginLeft = "5px";
        deleteBtn.style.backgroundColor = "#ffb5a7"
        deleteBtn.style.cursor = "pointer"
        deleteBtn.id = todo.id;
        deleteBtn.onclick = removeTodo;
        titleContainer.appendChild(deleteBtn)

        const todoContainer = document.getElementById('todoContainer');
        todoContainer.appendChild(titleContainer)
    })
}