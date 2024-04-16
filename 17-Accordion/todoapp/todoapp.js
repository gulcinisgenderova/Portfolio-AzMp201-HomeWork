
const toDo = document.querySelector(".toDo");
const toDoInp = document.querySelector(".toDoInp");
const ToDoBox = document.querySelector("div");
const deleteAll = document.querySelector("button");


toDo.addEventListener("submit", (e) => {
    createtodo()
    e.defaultPrevented;
    // console.log(toDoInp.value);
    toDoInp.value = ""
}
)
function createtodo() {

    const ToDoItem = document.createElement("div");
    const ToDoText = document.createElement("p")
    const deleteBtn = document.createElement("button")
    const editBtn = document.createElement("button")



    ToDoItem.className = "ToDoItem"
    ToDoText.className = "ToDoText"
    deleteBtn.className = "deleteBtn"
    editBtn.className = "editBtn"



    ToDoText.innerText = toDoInp.value
    deleteBtn.innerText = "Delete"
    editBtn.innerText = "Edit"


    ToDoItem.append(ToDoText, deleteBtn, editBtn)
    ToDoBox.appendChild(ToDoItem)

    deleteBtn.addEventListener("click", (e) => {
        // e.target.remove() 
        e.target.parentElement.remove()
        // createtodo()
        e.defaultPrevented;

    }
    )
    let originalText = toDoInp.value;

    editBtn.addEventListener("click", (e) => {
        if (editBtn.innerText === "Edit") {
            originalText = ToDoText.innerText;
            toDoInp.value = originalText;
            ToDoText.style.display = "none";
            editBtn.innerText = "Save";
        } else {

            ToDoText.innerText = toDoInp.value;
            ToDoText.style.display = "block";
            editBtn.innerText = "Edit";
        }
    });

}
deleteAll.addEventListener("click", () => {
    const allToDoItems = document.querySelectorAll(".ToDoItem");
    allToDoItems.forEach((item) => {
        item.remove();
    });
});



