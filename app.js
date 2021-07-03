//Selector
const inputText = document.querySelector('.todo-input');
const addButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo');

//EvemtListener
addButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('change', filterTodo);


//Function
function addTodo (e){
    //Prevent form from submitting
    e.preventDefault();
    //todo div
    const todoDiv= document.createElement('div')
    todoDiv.classList.add('todo')
    //newtodo li
    const newTodo = document.createElement('li')
    newTodo.innerText= inputText.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    //check mark
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add('complete-btn');
    todoDiv.appendChild(completedButton);
    //trashButton
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add('trash-btn');
    todoDiv.appendChild(trashButton);
    //append the div to the ul
    todoList.appendChild(todoDiv);
    //clear input value
    inputText.value='';
};

function deleteCheck(e){
    const item = e.target;
    //delete todo
    if (item.classList[0] === 'trash-btn'){
        const todo = item.parentElement;
        //anitmation to delete
        todo.classList.add('fall')
        todo.addEventListener('transitionend', function(){
            todo.remove();
        });
        
    }
    //check mark
    if(item.classList[0] === 'complete-btn') {
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }

}

//function FILTER TO DO

function filterTodo(e){
    let todos = todoList.childNodes;
    console.log(todoList.childNodes);
    todos.forEach(function(todo){
        switch(e.target.value){
            case "all":
                todo.style.display = "flex";
                break;
            case "completed":
                if(todo.classList.contains('completed')){
                    todo.style.display = "flex";
                } else{
                    todo.style.display = 'none'
                }
        }
    });
}
