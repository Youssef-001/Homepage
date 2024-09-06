function Todov2(title, description, priority, state, dueDate) {
  // todoCounter++;
  const id = parseInt(localStorage.getItem("id")) || 0;
  const newId = id + 1;
  localStorage.setItem("id", newId);
  return {
    title: title,
    description: description,
    priority: priority,
    state: state,
    dueDate: dueDate,
    id: newId,
  };
}

export default Todov2;
