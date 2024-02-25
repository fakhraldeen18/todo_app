let todolist = [
  {
    title: "Create To Do Application",
    description: "Create index.html file and index.js file",
  },

  {
    title: "Push the To Do Application in GitHub",
    description: "use git add and commit to push",
  },
];
const form = document.querySelector(".todo-form");
const ul = document.createElement("ul");
ul.classList.add("todo-ul");
form.appendChild(ul);
const count = document.querySelector(".count");
let span = document.createElement("span");
span.textContent = 0;
count.appendChild(span);

// Rendering Todo List
function renderTodo(array) {
  ul.textContent = "";
  array.forEach((element) => {
    const li = document.createElement("li");
    li.classList.add("todo-item");
    ul.appendChild(li);
    const description = document.createElement("p");
    description.classList.add("todo-description");
    description.textContent = element.description;
    li.textContent = element.title;
    li.appendChild(description);
    //   -------------------------
    const deleteButton = document.createElement("span");
    deleteButton.classList.add("delete-button");
    deleteButton.textContent = "\u00D7";
    li.appendChild(deleteButton);
  });
  span.textContent = todolist.length;
}
renderTodo(todolist);

// Adding a Todo
function addToDos(input, inputDescription) {
  if (!input.value) {
    alert("Please enter a todo");
  } else if (!inputDescription.value) {
    alert("Please enter a Description");
  } else {
    const li = document.createElement("li");
    li.classList.add("todo-item");
    li.textContent = input.value;
    ul.appendChild(li);
    input.value = "";
    const description = document.createElement("p");
    description.classList.add("todo-description");
    description.textContent = inputDescription.value;
    li.appendChild(description);
    inputDescription.value = "";
    // ---------------------
    const deleteButton = document.createElement("span");
    deleteButton.classList.add("delete-button");
    deleteButton.textContent = "\u00D7";
    li.appendChild(deleteButton);
    span.textContent++;
  }
}
const addTodoBtn = document.querySelector(".todo-btn");
addTodoBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let input = document.querySelector(".todo-input");
  let inputDescription = document.querySelector(".todo-input-des");
  addToDos(input, inputDescription);
});

//Deleting a Todo:
form.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    span.textContent--;
  } else if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
  }
});

// Deleting All Todos
const deleteAllBtn = document.querySelector(".delete-all-btn");
deleteAllBtn.addEventListener("click", () => {
  console.log("Deleteing All Todos");
  todolist = [];
  renderTodo(todolist);
});
