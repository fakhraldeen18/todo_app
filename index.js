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
