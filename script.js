document.addEventListener('DOMContentLoaded', () => {
    const todoForm = document.getElementById('todo-form');
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');

    todoForm.addEventListener('submit', function(event) {
        event.preventDefault();
        addTodo(todoInput.value);
        todoInput.value = '';
    });

    function addTodo(task) {
        const li = document.createElement('li');
        li.innerHTML = `
            ${task}
            <button class="remove-btn">Remove</button>
        `;

        li.querySelector('.remove-btn').addEventListener('click', function() {
            li.remove();
        });

        todoList.appendChild(li);
    }
});
