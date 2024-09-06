import Todo from "./todo";

import Renderer from "./renderer";

const renderer = new Renderer();

function addTodo() {
  const taskField = document.querySelector(".task");
  const descriptionField = document.querySelector(".task-description");
  const formDate = document.querySelector("#form-date");

  const priorityField = document.querySelector("#priority");

  const submitButton = document.querySelector(".submit");
  let taskName;
  let taskDescription;
  let taskDate;
  let taskPriority;

  submitButton.addEventListener("click", () => {
    taskName = taskField.value;
    taskDescription = descriptionField.value;
    taskDate = formDate.value;
    taskPriority = priorityField.value;

    const newTodo = new Todo(
      taskName,
      taskDescription,
      taskPriority,
      false,
      taskDate
    );

    const projectTitle = document.querySelector(".project-name").innerHTML;

    const sessionObject = JSON.parse(localStorage.getItem(projectTitle));

    sessionObject.todos.push(newTodo);

    localStorage.setItem(projectTitle, JSON.stringify(sessionObject));

    renderer.renderTodos(JSON.parse(localStorage.getItem(projectTitle)).todos);
    document.querySelector(".div-form").classList.add("hidden");
    document.querySelector(".add-Todo").classList.remove("hidden");

    // taskField.value = '';
    // descriptionField.value = '';
    // formDate.value = '';
  });
}

export default addTodo;
