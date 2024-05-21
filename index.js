document.addEventListener('DOMContentLoasws', () => {
  const newTaskInput = document.getElementById('new-task')
  const adTaskBtn = document.getElementById('add-task-btn')
  const taskList = document.getElementById('task-list')

  const addTask = () =  {
    const taskText = newTaskInput.value.trim()
    if (taskText != '') {
      const li = document.createElement('li');
      li.innerHTML = `<span>${taskText}</span>
      <button class="delete-btn">Delete</button>`
      ;
      taskList.appendChild(li)
    }
  }

  addTaskBtn.addEventListener('click', addTask) 
})