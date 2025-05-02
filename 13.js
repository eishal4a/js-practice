const input = document.querySelector('.input');
const addBtn = document.querySelector('.add');
const taskList = document.querySelector('.task-list');

    addBtn.addEventListener('click', () => {
        const taskText = input.value.trim();

        if (taskText !== "") {
            const li = document.createElement('li');
            li.textContent = taskText;

            const delBtn = document.createElement('button');
            delBtn.textContent = "Delete";
            delBtn.addEventListener('click', () => {
                li.remove();
            });

            li.appendChild(delBtn);
            taskList.appendChild(li);

            input.value = ""; 
        } else {
            alert("Please enter a task!");
        }
    });
