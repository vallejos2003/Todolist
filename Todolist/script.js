document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('add-task-button');
    const taskInput = document.getElementById('new-task');
    const taskList = document.getElementById('task-list');

    addButton.addEventListener('click', addTask);
    taskList.addEventListener('click', handleTaskClick);

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            const li = document.createElement('li');
            li.textContent = taskText;

            const completeButton = document.createElement('button');
            completeButton.textContent = 'Realizada';
            completeButton.classList.add('complete-button');
            li.appendChild(completeButton);

            const editButton = document.createElement('button');
            editButton.textContent = 'Editar';
            editButton.classList.add('edit-button');
            li.appendChild(editButton);

            const removeButton = document.createElement('button');
            removeButton.textContent = 'Eliminar';
            li.appendChild(removeButton);

            taskList.appendChild(li);
            taskInput.value = '';
        }
    }

    function handleTaskClick(e) {
        if (e.target.tagName === 'BUTTON') {
            const li = e.target.parentElement;
            if (e.target.classList.contains('complete-button')) {
                li.classList.toggle('completed');
            } else if (e.target.classList.contains('edit-button')) {
                editTask(li);
            } else {
                taskList.removeChild(li);
            }
        }
    }

    function editTask(li) {
        const taskText = li.firstChild.textContent;
        const input = document.createElement('input');
        input.type = 'text';
        input.value = taskText;
        input.classList.add('edit-input');

        const saveButton = document.createElement('button');
        saveButton.textContent = 'Guardar';
        saveButton.classList.add('save-button');

        li.innerHTML = '';
        li.appendChild(input);
        li.appendChild(saveButton);

        saveButton.addEventListener('click', () => {
            const newText = input.value.trim();
            if (newText !== '') {
                li.innerHTML = newText;

                const completeButton = document.createElement('button');
                completeButton.textContent = 'Realizada';
                completeButton.classList.add('complete-button');
                li.appendChild(completeButton);

                const editButton = document.createElement('button');
                editButton.textContent = 'Editar';
                editButton.classList.add('edit-button');
                li.appendChild(editButton);

                const removeButton = document.createElement('button');
                removeButton.textContent = 'Eliminar';
                li.appendChild(removeButton);
            }
        });
    }
});

