let todolist = ["Create To do App"];
const form = document.querySelector(".todo-form");
const ul = document.createElement("ul");
ul.classList.add("todo-ul");
form.appendChild(ul);

// Rendering Todo List
function renderTodo(array) {
  ul.textContent = "";
  array.forEach((element) => {
    const li = document.createElement("li");
    li.classList.add("todo-item");
    ul.appendChild(li);
    li.textContent = element;
    //   -------------------------
    const deleteButton = document.createElement("span");
    deleteButton.classList.add("delete-button");
    deleteButton.textContent = "\u00D7";
    li.appendChild(deleteButton);
  });
}
renderTodo(todolist);

// Adding a Todo
function addToDos(input) {
    if(input.value === ""){
        alert("Please enter a todo");
    }
    else{
  const li = document.createElement("li");
  li.classList.add("todo-item");
  li.textContent = input.value;
  ul.appendChild(li);
  input.value = "";
  // ---------------------
  const deleteButton = document.createElement("span");
  deleteButton.classList.add("delete-button");
  deleteButton.textContent = "\u00D7";
  li.appendChild(deleteButton);
    }
}
const addTodoBtn = document.querySelector(".todo-btn");
addTodoBtn.addEventListener("click", (e) => {
  let input = document.querySelector(".todo-input");
  addToDos(input);
  e.preventDefault();
});