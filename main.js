import { todoManagement } from './lib/todoManagement.js'
import { showTodoItem , showNumberOfDone , showNumberOfNotDone } from './UI/todoListUI.js'
import { addTodoHandler, beforeUnloadHandler, loadHandler } from './eventHandler/evenController.js'

window.addEventListener('load', loadHandler)

window.addEventListener('beforeunload', beforeUnloadHandler)
