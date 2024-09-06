function deleteTodo() {
  const content = document.querySelector(".content");

  content.addEventListener("click", (e) => {
    if (e.target.className == "todo-delete") {
      console.log(e.target);
      e.target.parentElement.remove();

      const currentProject = JSON.parse(
        localStorage.getItem(document.querySelector(".project-name").innerHTML)
      );
      console.log(currentProject.todos);
      const newTodos = currentProject.todos.filter((todo) => {
        return todo.id != e.target.id;
      });

      currentProject.todos = newTodos;
      localStorage.setItem(
        document.querySelector(".project-name").innerHTML,
        JSON.stringify(currentProject)
      );
    }
  });
}

export default deleteTodo;
