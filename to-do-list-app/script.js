document.addEventListener('DOMContentLoaded', function() {
            const taskInput = document.getElementById('task-input');
            const addBtn = document.getElementById('add-btn');
            const taskList = document.getElementById('task-list');
            const emptyList = document.getElementById('empty-list');
            
           
            loadTasks();
            
            // Add event listeners
            addBtn.addEventListener('click', addTask);
            taskInput.addEventListener('keypress', function(e) {
                if (e.key === 'Enter') {
                    addTask();
                }
            });
            
            function addTask() {
                const taskText = taskInput.value.trim();
                
                if (taskText !== '') {
                    // Create task object
                    const task = {
                        id: Date.now(),
                        text: taskText,
                        completed: false
                    };
                    
                    createTaskElement(task);
                    
                    saveTask(task);
                    
                    taskInput.value = '';
                    
                    emptyList.style.display = 'none';
                }
            }
            
            function createTaskElement(task) {
                const li = document.createElement('li');
                li.dataset.id = task.id;
                
                const checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.checked = task.completed;
                checkbox.addEventListener('change', function() {
                    toggleComplete(task.id, this.checked);
                });
                
                const taskTextSpan = document.createElement('span');
                taskTextSpan.textContent = task.text;
                taskTextSpan.className = 'task-text';
                if (task.completed) {
                    taskTextSpan.classList.add('completed');
                }
                
                const actionsDiv = document.createElement('div');
                actionsDiv.className = 'task-actions';
                
                const completeBtn = document.createElement('button');
                completeBtn.textContent = task.completed ? 'Undo' : 'Complete';
                completeBtn.className = 'complete-btn';
                completeBtn.addEventListener('click', function() {
                    const newStatus = !task.completed;
                    toggleComplete(task.id, newStatus);
                    checkbox.checked = newStatus;
                });
                
                const deleteBtn = document.createElement('button');
                deleteBtn.textContent = 'Delete';
                deleteBtn.className = 'delete-btn';
                deleteBtn.addEventListener('click', function() {
                    deleteTask(task.id);
                });
                
                actionsDiv.appendChild(completeBtn);
                actionsDiv.appendChild(deleteBtn);
                
                li.appendChild(checkbox);
                li.appendChild(taskTextSpan);
                li.appendChild(actionsDiv);
                
                taskList.appendChild(li);
            }
            
            function toggleComplete(id, completed) {
           
              const li = document.querySelector(`li[data-id="${id}"]`);
                const taskTextSpan = li.querySelector('.task-text');
                const completeBtn = li.querySelector('.complete-btn');
                
                if (completed) {
                    taskTextSpan.classList.add('completed');
                    completeBtn.textContent = 'Undo';
                } else {
                    taskTextSpan.classList.remove('completed');
                    completeBtn.textContent = 'Complete';
                }
                
              
              let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
                tasks = tasks.map(task => {
                    if (task.id === id) {
                        task.completed = completed;
                    }
                    return task;
                });
                localStorage.setItem('tasks', JSON.stringify(tasks));
            }
            
            function deleteTask(id) {
              
              const li = document.querySelector(`li[data-id="${id}"]`);
                li.remove();
                
              
              let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
                tasks = tasks.filter(task => task.id !== id);
                localStorage.setItem('tasks', JSON.stringify(tasks));
                
              
              if (tasks.length === 0) {
                    emptyList.style.display = 'block';
                }
            }
            
            function saveTask(task) {
                let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
                tasks.push(task);
                localStorage.setItem('tasks', JSON.stringify(tasks));
            }
            
            function loadTasks() {
                const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
                
                if (tasks.length > 0) {
                    emptyList.style.display = 'none';
                    tasks.forEach(task => {
                        createTaskElement(task);
                    });
                }
            }
        });