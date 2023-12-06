import { Todo } from "./todo.js"

function todoManagement() {
    let todos = []
    
    function addTodo(desc) {
        const newTodo = new Todo()
        // console.log(newTodo)
        newTodo.setDescription(desc)
        // console.log(newTodo)
        // console.log(todos.push(newTodo))
        todos.push(newTodo)
        // console.log(todos)
        return newTodo.id
    }

    function findTodo(searchId) {
        return todos.find((todo) => Number(todo.id) === Number(searchId))
    }

    function findIndexTodo(searchId) {
        return todos.findIndex((todo) => todo.id === searchId)
    }

    function removeTodo(removeId) {
        // const indexTodo = findIndexTodo(removeId)
        // if(indexTodo != -1) { todos.splice(indexTodo , 1) }
        todos = todos.filter((todo) => todo.id !== removeId)
    }

    function getTodos() { 
        // console.log(todos.length)
        return todos 
    }

    function getNumberOfDone() {
        return todos.filter((todo) => todo.done == true).length
    }

    function getNumberOfNotDone() {
        // todos.forEach(todo => console.log(todo))
        return todos.filter((todo) => todo.done == false).length
    }

    function clearTodo() {
        todos = []
    }

    function setItemToDone(doneId){
        const setItem = findTodo(doneId)
        console.log(setItem)
        if (setItem != -1) {
            setItem.setDone()
        }
    }

    function loadTodos(userTodos) {
        // todos = userTodos
        userTodos.forEach((todo) => {
            todos.push(new Todo(undefined, todo.description , todo.done)) 
        })
    }

    return {
        addTodo,
        findTodo,
        findIndexTodo,
        removeTodo,
        getTodos,
        getNumberOfDone,
        getNumberOfNotDone,
        clearTodo,
        setItemToDone,
        loadTodos
    }
}

export { todoManagement }