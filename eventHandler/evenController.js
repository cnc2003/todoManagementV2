import { Todo } from "../lib/todo.js";
import { todoManagement } from "../lib/todoManagement.js";
import { showTodoItem, showNumberOfDone, showNumberOfNotDone, removeTodoItem } from "../UI/todoListUI.js";

const manageTodo = todoManagement()
let numOfDone = manageTodo.getNumberOfDone()
let numOfNotDone = manageTodo.getNumberOfNotDone()

function addTodoHandler() {
    const addItem = document.querySelector('input').value
    //use trim() to remove backspace (normally it will count in length)
    if (addItem.trim().length != 0) {
        const todoId = manageTodo.addTodo(addItem)
        showTodoItem(todoId, addItem)
        addButtonHandler(todoId)
        // console.log(numOfDone)
        showNumberOfDone(manageTodo.getNumberOfDone())
        showNumberOfNotDone(manageTodo.getNumberOfNotDone())
    }
}

function addButtonHandler(todoId) {
    document.getElementById(todoId).children[1].addEventListener('click', notDoneButtonHandler)

    document.getElementById(todoId).children[2].addEventListener('click', removeButtonHandler)
    //set input field to empty
    document.querySelector('input').value = ''
}

function notDoneButtonHandler(event) {
    const doneButton = event.target
    //set done
    manageTodo.setItemToDone(doneButton.parentElement.getAttribute('id'))
    //set color
    setBottonElement(doneButton)
    //update web output
    showNumberOfDone(manageTodo.getNumberOfDone())
    showNumberOfNotDone(manageTodo.getNumberOfNotDone())
}

function setBottonElement(doneButton) {
    doneButton.textContent = 'Done'
    doneButton.style = 'background-color: green;color: white'
}

function removeButtonHandler(event) {
    const removeButton = event.target
    const todoId = removeButton.parentElement.getAttribute('id')
    //remove in todos
    manageTodo.removeTodo(Number(todoId))
    //remove in UI
    removeTodoItem(Number(todoId))
    //update web output
    showNumberOfDone(manageTodo.getNumberOfDone())
    showNumberOfNotDone(manageTodo.getNumberOfNotDone())
}

function loadHandler() {
    const localtodos = localStorage.getItem('listtodo')
    const arr = JSON.parse(localtodos)
    if (!arr) {
        return
    } else { manageTodo.loadTodos(arr) } // load TODOs in todoManagement
    manageTodo.getTodos().forEach((todo) => {
        showTodoItem(todo.id, todo.description)
        addButtonHandler(todo.id)
        if (todo.done) {
            const doneButton = document.getElementById(todo.id).children[1]
            setBottonElement(doneButton)
        }
    })
    showNumberOfDone(manageTodo.getNumberOfDone())
    showNumberOfNotDone(manageTodo.getNumberOfNotDone())
    const addButton = document.getElementById('addBtn')
    addButton.addEventListener('click', addTodoHandler)

}

function beforeUnloadHandler(event) {
    const todoList = JSON.stringify(manageTodo.getTodos())
    localStorage.setItem('listtodo', todoList)
    manageTodo.clearTodo()
    event.preventDefault()
}

export { addTodoHandler , loadHandler , beforeUnloadHandler }