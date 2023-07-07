const inputTask = document.querySelector('.input-task')
const buttonConfirmTask = document.querySelector('.btn-add-task')
const listOfTask = document.querySelector('.list-tasks')

const createNewTask = (task) => {
    const li = document.createElement('li')
    li.innerText = task
    li.appendChild(createButtonClean(li))
    listOfTask.appendChild(li)
}
const createButtonClean = li =>{
    const button = document.createElement('button')
    button.innerText = 'Apagar'
    button.classList.add('Clean-Task')
    return button
}
const clearTask = _ => {
    inputTask.value = ''
    inputTask.focus()
}

function getEvents() {
    buttonConfirmTask.addEventListener('click', _ => {
        if (!inputTask.value) return //Se estiver vazio, ele não faz nada
        createNewTask(inputTask.value)
        clearTask()
    })
    inputTask.addEventListener('keypress', event => {
        if(event.keyCode === 13){
            if(!inputTask.value) return
            createNewTask(inputTask.value)
            clearTask()
        }   
    })
}
getEvents()