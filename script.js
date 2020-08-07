
// getting the first elements
const submitForm = document.querySelector('.add');
const addButton = document.querySelector('.add-todo');
const todoList = document.querySelector('.todos');
const list = document.querySelectorAll('.todos li'); 

// lenth of my Todo list
var listLenght = list.length;
 

// adding new elements in my list item
const generateTempalate = (todo) => {
  
  const html = `<li>
                  <input type="checkbox" id="todo_${listLenght}">
                  <label for="todo_${listLenght}">
                    <span class="check"></span>
                    ${todo}
                  </label>
                  <i class="fa fa-trash-o delete" aria-hidden="true"></i>
                </li>`
  todoList.innerHTML += html;
};


// adding tast func when getting the new input value
function addTodos(e) {
  e.preventDefault();
  const todo = submitForm.add.value.trim();
  if (todo.length) {
    listLenght = listLenght + 1;
    generateTempalate(todo);
    submitForm.reset();
    window.alert("new task added. remaining tasks: "+listLenght);


  }
}

submitForm.addEventListener('submit', addTodos);
addButton.addEventListener('click', addTodos);



function deleteTodos(e) {
  if (e.target.classList.contains('delete')) {
    e.target.parentElement.remove();
    listLenght = listLenght - 1;
    window.alert("task deleted. remaining tasks: "+listLenght);
  }
}

todoList.addEventListener('click', deleteTodos);


// count the total list items 
// function count()
// {
//     var ul=document.getElementById("todos");
//     var i=0,itemcount=0;
//     while(ul.getElementByTagName('li')[i++])
//     itemcount++;
//     return itemcount;
// }

// document.getElementById("total").innerHTML =  count();
// document.getElementById("total").innerHTML = listLenght;

