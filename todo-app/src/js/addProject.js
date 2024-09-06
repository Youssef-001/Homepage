import Project from "./project";

import Renderer from "./renderer";

const renderer = new Renderer();

function addProject() {
  const addProjectButton = document.querySelector(".add-project");

  addProjectButton.addEventListener("click", () => {
    const projectName = document.querySelector("#name").value;

    const newProject = new Project([], projectName, "");

    localStorage.setItem(projectName, JSON.stringify(newProject));

    const projectArray = [];

    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key == "id") continue;
      projectArray.push(JSON.parse(localStorage.getItem(key)));
    }

    renderer.renderProjects(projectArray);
    document.querySelector("#name").value = "";
    document.querySelector("#project-form").classList.add("hidden");
  });
}

export default addProject;
