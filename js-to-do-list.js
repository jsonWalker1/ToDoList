//console.log('1')
//funkce pro znovurendrování 
function newDisplayRender() {
    let ToDoListHTML = '';
for (i = 0; i <ToDoList.length; i++){
    const toDoObject = ToDoList[i]
    const {name, dueDate} = toDoObject
    const HTML = `
    <div> ${name} </div> 
    <div> ${dueDate} </div>
    <button onclick="
    ToDoList.splice(${[i]}, 1 );
    newDisplayRender();" class="delButton">delete</button>
    `
    ToDoListHTML += HTML
    //console.log(ToDoListHTML)
    displayToDo = document.querySelector('.todo-grid')
    displayToDo.innerHTML = ToDoListHTML
}
}


//využití loop pro render HTML
const ToDoList = JSON.parse(localStorage.getItem('ToDoList'))
console.log(ToDoList)
let ToDoListHTML = '';
for (i = 0; i <ToDoList.length; i++){
    const toDoObject = ToDoList[i]
    //const name = toDoObject.name
    //const dueDate = toDoObject.dueDate
    const {name, dueDate} = toDoObject

    const HTML = `
    <div> ${name} </div> 
    <div> ${dueDate} </div>
    <button onclick="
    ToDoList.splice(${[i]}, 1 );
    newDisplayRender();" class="delButton">delete</button>
    `
    ToDoListHTML += HTML
    //console.log(ToDoListHTML)
    displayToDo = document.querySelector('.todo-grid')
    displayToDo.innerHTML = ToDoListHTML
}

/* funkce přidat info do todolist varibels */
function addTodo (){
    let inputElement = document.querySelector('.js-name-input');
    let inputDate = document.querySelector('.js-due-date-input');
    //console.log(inputElement)
    const name = inputElement.value
    const dueDate = inputDate.value
    ToDoList.push({name,dueDate
    });
    //json
    localStorage.setItem('ToDoList', JSON.stringify(ToDoList))
    
   
    console.log(ToDoList);
    inputElement.value = ''; 
    newDisplayRender();
}

