document.addEventListener("DOMContentLoaded", function () {
  const taskInput = document.getElementById("task");
  const addTaskButton = document.getElementById("addTask");
  const taskList = document.getElementById("taskList");
  const completedTaskList = document.getElementById("completedTaskList");

  function createTaskElement(taskText) {
      const taskItem = document.createElement("li");
      taskItem.innerHTML = `
          <span>${taskText}</span>
          <span class="edit">Edit</span>
          <span class="delete">Delete</span>
          <span class="complete">Complete</span>
      `;
      return taskItem;
  }

  addTaskButton.addEventListener("click", function () {
      const taskText = taskInput.value.trim();
      if (taskText !== "") {
          const taskItem = createTaskElement(taskText);
          taskList.appendChild(taskItem);
          taskInput.value = "";

          taskItem.querySelector(".delete").addEventListener("click", function () {
              taskItem.remove();
          });

          taskItem.querySelector(".edit").addEventListener("click", function () {
              const newTaskText = prompt("Edit Task:", taskText);
              if (newTaskText !== null) {
                  taskItem.querySelector("span").textContent = newTaskText;
              }
          });

          taskItem.querySelector(".complete").addEventListener("click", function () {
              taskItem.remove();
              const completedTaskItem = createTaskElement(taskText);
              completedTaskList.appendChild(completedTaskItem);
              completedTaskItem.querySelector(".complete").remove();
              completedTaskItem.querySelector(".edit").remove();
              completedTaskItem.querySelector(".delete").addEventListener("click", function () {
                  completedTaskItem.remove();
              });
          });
      }
  });
});
