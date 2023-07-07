const inputTask = document.querySelector('.input-task')
const buttonConfirmTask = document.querySelector('.btn-add-task')
const liOfTask = document.querySelector('.list-tasks')

const createNewTask = task => {
    const li = document.createElement('li')
    li.innerText = task
    li.appendChild(createButtonClean(li))
    liOfTask.appendChild(li)
    saveTaskInLocalStorag()
}
const createButtonClean = _ =>{
    const button = document.createElement('button')
    button.innerText = 'Apagar'
    button.setAttribute('class', 'btn-clean-task')
    button.setAttribute('title', 'Apagar está tarefa')
    return button
}
const clearInputTask = _ => {
    inputTask.value = ''
    inputTask.focus()
}
const saveTaskInLocalStorag = _ => {
    const tasks = liOfTask.querySelectorAll('li')
    const listOfTasks = []
    
    for(let captureTask of tasks){
        let textTask = captureTask.innerText
        textTask = textTask.replace('Apagar', '') //Cleaning text of button
        listOfTasks.push(textTask)
    }
    const tasksInJSON = JSON.stringify(listOfTasks)
    localStorage.setItem('task', tasksInJSON)
}
const getTaskInStorage = _ => {
    const getTask = localStorage.getItem('task')
    const taskJsonToArray = JSON.parse(getTask)
    for(let taskSaved of taskJsonToArray){
        createNewTask(taskSaved)
    }
}

function getEvents() {
    buttonConfirmTask.addEventListener('click', _ => {
        if (!inputTask.value) return //Se estiver vazio, ele não faz nada
        createNewTask(inputTask.value)
        clearInputTask()
    })
    inputTask.addEventListener('keypress', event => {
        if(event.keyCode === 13){
            if(!inputTask.value) return
            createNewTask(inputTask.value)
            clearInputTask()
        }   
    })
    document.addEventListener('click', event => {
        const captureEvent = event.target
        if(captureEvent.classList.contains('btn-clean-task')){
            captureEvent.parentElement.remove(  )
            saveTaskInLocalStorag() //to Clean at list the of local Storage
        }
    })
}
getEvents()
getTaskInStorage()