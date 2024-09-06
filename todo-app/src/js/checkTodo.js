function checkTodo() {
  const content = document.querySelector(".todos");

  content.addEventListener("click", (e) => {
    if (e.target.type == "checkbox") {
      console.log(e.target);
      const currentProject = JSON.parse(
        localStorage.getItem(document.querySelector(".project-name").innerHTML)
      );
      console.log(currentProject.todos);
      let index = 0;
      for (let i = 0; i < currentProject.todos.length; i++) {
        if (currentProject.todos[i].id == e.target.id) {
          currentProject.todos[i].state = !currentProject.todos[i].state;
          index = i;
          break;
        }
      }

      console.log(currentProject.todos);
      localStorage.setItem(
        document.querySelector(".project-name").innerHTML,
        JSON.stringify(currentProject)
      );

      console.log(e.target.parentElement);
      const originalText = e.target.parentElement.childNodes[1].textContent;

      if (currentProject.todos[index].state == true)
        e.target.parentElement.childNodes[1].innerHTML = `<del>${originalText}</del>`;
      else e.target.parentElement.childNodes[1].textContent = `${originalText}`;
    }
  });
}

export default checkTodo;
