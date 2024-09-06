function Renderer() {
  function renderTodos(todos) {
    const todoList = document.querySelector(".todos");
    todoList.innerHTML = "";

    const todoElement = document.createElement("div");
    todoElement.classList.add("todo-item");

    todos.forEach((todo) => {
      const todoElement = document.createElement("div");
      todoElement.classList.add("todo");
      const todoInput = document.createElement("input");
      todoInput.type = "checkbox";
      todoInput.id = todo.id;

      let priority;

      if (typeof todo.priority === "number") {
        priority = todo.priority;
      } else {
        priority = todo.priority.split(" ")[1];
      }

      const todoLabel = document.createElement("label");
      todoLabel.textContent = todo.title;
      todoLabel.htmlFor = todo.id;

      if (todo.state == true) {
        todoInput.checked = true;
        todoLabel.innerHTML = `<del>${todo.title}</del>`;
      }

      const circle = document.createElement("div");
      circle.id = "circle";
      if (priority == "2") {
        circle.classList.add("two");
      } else if (priority == "1") {
        circle.classList.add("one");
      } else if (priority == "3") {
        circle.classList.add("three");
      }

      const todoDelete = document.createElement("button");
      todoDelete.textContent = "Delete";
      todoDelete.classList.add("todo-delete");
      todoDelete.id = todo.id;
      todoElement.appendChild(todoInput);
      todoElement.appendChild(todoLabel);
      todoList.appendChild(todoElement);
      todoElement.appendChild(circle);

      todoElement.appendChild(todoDelete);
    });
  }

  function renderProjects(projects) {
    const ProjectList = document.querySelector(".projects");
    ProjectList.innerHTML = "";

    projects.forEach((project) => {
      const projectElement = document.createElement("button");
      projectElement.classList.add("project-button");
      projectElement.innerHTML = project.title;
      projectElement.id = project.title;
      ProjectList.appendChild(projectElement);
    });
  }

  function formRenderer() {
    const addTodo = document.querySelector(".add-Todo");
    addTodo.addEventListener("click", () => {
      document.querySelector(".div-form").classList.remove("hidden");
      addTodo.classList.add("hidden");
    });

    document.querySelector(".cancel").addEventListener("click", () => {
      document.querySelector(".div-form").classList.add("hidden");
      addTodo.classList.remove("hidden");
    });
  }

  function projectFormRender() {
    const projectForm = document.querySelector("#project-form");
    const project_add_button = document.querySelector("#project-add-button");
    const cancelButton = document.querySelector(".cancel-project");
    project_add_button.addEventListener("click", () => {
      projectForm.classList.remove("hidden");
    });

    cancelButton.addEventListener("click", () => {
      projectForm.classList.add("hidden");
    });
  }

  function renderProject(project) {
    document.querySelector(".project-name").innerHTML = project.title;
    renderTodos(project.todos);
  }

  return {
    renderTodos,
    renderProjects,
    formRenderer,
    renderProject,
    projectFormRender,
  };
}

export default Renderer;
