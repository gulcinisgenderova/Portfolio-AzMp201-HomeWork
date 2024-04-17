document.addEventListener("DOMContentLoaded", () => {
    const todoForm = document.getElementById("todoForm");
    const todoInput = document.getElementById("todoInput");
    const todoList = document.getElementById("todoList");
    const deleteAllBtn = document.getElementById("deleteAll");

    let todos = [];

    todoForm.addEventListener("submit", e => {
        e.preventDefault();
        
        const todoText = todoInput.value.trim();
        
        if (todoText === "") {
            alert("Please enter a todo "); 
            return;
        }

        addTodoItem(todoText);
        todoInput.value = "";
    });

    function addTodoItem(text) {
        const todoItem = {
            id: Date.now(),
            text: text,
            createdAt: new Date()
        };
        todos.push(todoItem);
        renderTodoItem(todoItem);
    }

    function renderTodoItem(todoItem) {
        const todoElement = document.createElement("div");
        const todoText = document.createElement("p");
        const deleteBtn = document.createElement("button");
        const editBtn = document.createElement("button");


        todoElement.className = "todoItem";
        deleteBtn.className = "deleteBtn";
        editBtn.className = "editBtn";
        todoElement.dataset.id = todoItem.id;

        todoText.textContent = `${todoItem.text} 
        ${"-Date:"} ${formatDate(todoItem.createdAt)}`;
        todoElement.appendChild(todoText);
        todoElement.appendChild(deleteBtn);
        todoElement.appendChild(editBtn);
        todoList.appendChild(todoElement);


        deleteBtn.innerHTML = `<i class="fa-solid fa-trash"></i>`;
        deleteBtn.addEventListener("click", () => {
            deleteTodoItem(todoItem.id);
        });

        editBtn.innerHTML = `<i class="fa-solid fa-pen-to-square"></i>`;
        editBtn.addEventListener("click", () => {
            editTodoItem(todoItem.id);
        });

    }

    function deleteTodoItem(id) {
        todos = todos.filter(todo => todo.id !== id);
        const todoElement = document.querySelector(`.todoItem[data-id="${id}"]`);
        if (todoElement) {
            todoElement.remove();
        }
    }

    function editTodoItem(id) {
        const todoItem = todos.find(todo => todo.id === id);
        if (todoItem) {
            const newText = prompt("Enter new text:", todoItem.text);
            if (newText !== null && newText.trim() !== "") {
                todoItem.text = newText.trim();
                const todoTextElement = document.querySelector(`.todoItem[data-id="${id}"] p`);
                if (todoTextElement) {
                    todoTextElement.textContent = `${todoItem.text} - Added at ${formatDate(todoItem.createdAt)}`;
                }
            }
        }
    }

    
    deleteAllBtn.addEventListener("click", () => {
        todos = [];
        todoList.innerHTML = "";
    });

    function formatDate(date) {
        const tarix = { year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric' };
        return new Date(date).toLocaleDateString('en-US', tarix);
    }
    
});
