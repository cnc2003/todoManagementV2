import { todoManagement } from "../lib/todoManagement.js"

function showTodoItem(newId , newDescription){
    //create value to access listTodo ID
    const listTodo = document.querySelector('#listTodo')
    //create todoItem element
    const newTodo = document.createElement('div')
    //set attribute 
    newTodo.setAttribute('class', "todoItem")
    newTodo.setAttribute('id', newId)

    listTodo.append(newTodo) //for put newTodo to inside listTodo
    //create detail in each newTodo
    const newDesc = document.createElement('p')
    newDesc.innerHTML = newDescription
    const newDone = document.createElement('button')
    newDone.innerHTML = 'Not Done'
    const remove = document.createElement('button')
    remove.innerHTML = 'remove'

    newTodo.append(newDesc, newDone, remove)
}

//add done/not value
const numberOfDone = todoManagement.getNumberOfDone
const numberOfNotDone = todoManagement.getNumberOfNotDone

function showNumberOfDone(numberOfDone) {
    const done = document.querySelector('#done')
    done.innerHTML = `Number of Done: ${numberOfDone}`
}

function showNumberOfNotDone(numberOfNotDone) {
    const notDone = document.querySelector('#notDone')
    notDone.innerHTML = `Number of Not Done: ${numberOfNotDone}`
}

function removeTodoItem(removeId){
    const todoItem = document.getElementById(removeId)
    todoItem.remove()
}

export {
    showTodoItem,
    showNumberOfDone,
    showNumberOfNotDone,
    removeTodoItem
}
