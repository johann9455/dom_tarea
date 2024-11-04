document.getElementById('add-btn').addEventListener('click', function() {
    const todoList = document.getElementById('todo-list');
    const todoTitle = document.getElementById('todo-title').value;
  
    // Verificar si el campo de texto no está vacío
    if (todoTitle.trim() !== "") {
      // Crear el elemento de la tarea
      const todoItem = document.createElement('div');
      todoItem.className = 'todo-item';
  
      // Crear el título de la tarea
      const taskTitle = document.createElement('span');
      taskTitle.textContent = todoTitle;
      taskTitle.className = 'task-title';
      todoItem.appendChild(taskTitle);
  
      // Crear el botón de completar
      const completeBtn = document.createElement('button');
      completeBtn.className = 'complete-btn';
      completeBtn.textContent = 'Completar';
      todoItem.appendChild(completeBtn);
  
      // Crear el botón de eliminar
      const deleteBtn = document.createElement('button');
      deleteBtn.className = 'delete-btn';
      deleteBtn.textContent = 'Eliminar';
      todoItem.appendChild(deleteBtn);
  
      // Crear el botón de editar
      const editBtn = document.createElement('button');
      editBtn.className = 'edit-btn';
      editBtn.textContent = 'Editar';
      todoItem.appendChild(editBtn);
  
      // Agregar el elemento de la tarea a la lista
      todoList.appendChild(todoItem);
  
      // Limpiar el campo de texto
      document.getElementById('todo-title').value = '';
  
      // Agregar funcionalidad a los botones
  
      // Funcionalidad de completar
      completeBtn.addEventListener('click', function() {
        taskTitle.style.textDecoration = 'line-through';
        completeBtn.disabled = true; // Deshabilitar el botón una vez completada la tarea
      });
  
      // Funcionalidad de eliminar
      deleteBtn.addEventListener('click', function() {
        todoList.removeChild(todoItem);
      });
  
      // Funcionalidad de editar
      editBtn.addEventListener('click', function() {
        const newTitle = prompt("Edita la tarea:", taskTitle.textContent);
        if (newTitle !== null && newTitle.trim() !== "") {
          taskTitle.textContent = newTitle;
        }
      });
    } else {
      alert('Por favor, ingrese una tarea antes de agregarla.');
    }
  });
  