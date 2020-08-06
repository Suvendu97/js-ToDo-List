
// getting the first elements
const submitForm = document.querySelector('.add');
const addButton = document.querySelector('.add-todo');
const todoList = document.querySelector('.todos');
const list = document.querySelectorAll('.todos li'); 

// lenth of my Todo list
let listLenght = list.lenght;
 

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
  }
}

submitForm.addEventListener('submit', addTodos);
addButton.addEventListener('click', addTodos);



function deleteTodos(e) {
  if (e.target.classList.contains('delete')) {
    e.target.parentElement.remove();
  }
}

todoList.addEventListener('click', deleteTodos);



document.getElementById("total").innerHTML = list.length;