
document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector('#create-task-form');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    handleToDo(event.target.new_task_description.value);
    form.reset();
  });
  
});

function handleToDo(toDoValue){
  let tasks = document.querySelector('#tasks');
  let newTask = document.createElement('li')
  newTask.textContent = `${toDoValue} `;
  let bttn = document.createElement('button')
  bttn.addEventListener('click', deleteTask)
  bttn.textContent = 'x';
  newTask.append(bttn);
  tasks.appendChild(newTask, bttn);
};

function deleteTask(event){
  console.log(event.parentNode);
  event.target.parentNode.remove();
};