document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const newTaskForm = document.getElementById("create-task-form")
  const newTaskDescription = document.getElementById("new-task-description")
  const newTaskList = document.getElementById("tasks")

  newTaskForm.addEventListener("submit", createNewTask)

  function createNewTask(event) {
    event.preventDefault()
    const newTask = document.createElement("li")
    newTask.innerText = newTaskDescription.value
    newTaskList.appendChild(newTask)
    event.target.reset()

    const listButton = document.createElement("button")
    listButton.textContent = 'X'
    newTask.appendChild(listButton)
    listButton.onclick = function(e) {
      newTaskList.removeChild(newTask)
    }
  }
});
