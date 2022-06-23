const input = document.getElementById("input");
const addTaskBtn = document.getElementById("addTask");
const listTasks = document.getElementById("list-container");

addTaskBtn.addEventListener("click", addTasks);

function addTasks() {
  const task = input.value;
  if (task === "") {
    showError("La tarea esta vacia");
  }
}

function showError(error) {
  const msgError = document.createElement("p");
  msgError.textContent = error;
  msgError.classList.add("error");
  listTasks.appendChild(msgError);
  setTimeout(() => {
    msgError.remove();
  }, 2000);
}
