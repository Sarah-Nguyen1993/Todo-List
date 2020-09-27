var todoInput = document.querySelector("#todo-text");
var todoCountSpan = document.querySelector("#todo-count");
var todoList= document.querySelector("#todo-list");
var todoForm = document.querySelector("#todo-form");

var todos = ["Learn html","Learn CSS", "Learn JavaScript","Homework"]
renderTodos();
function renderTodos(){
     for (i=0; i< todos.length;i++){
        var theListDiv = document.createElement('div')
       console.log(theListDiv)
        var li = document.createElement("li");
        var button = document.createElement("button");
        var todo = todos[i];
        li.textContent = todo;
        button.textContent = "Done";
        theListDiv.append(li);
        theListDiv.append(button);   
     }
     
 }

 /* function renderTodos(){
    for (var i=0; i< todos.length; i++){
        var todo = todos[i];
        var li= document.createElement("li");
        li.textContent= todo;
        todoList.appendChild(li);   
    }
}*/
