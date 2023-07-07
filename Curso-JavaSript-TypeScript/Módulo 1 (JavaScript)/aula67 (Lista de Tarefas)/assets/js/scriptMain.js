const inputTask = document.querySelector('.input-task')
const buttonConfirmTask = document.querySelector('.btn-add-task')
const liOfTask = document.querySelector('.list-tasks')
const dateOfTask = document.querySelector('.date-task')
const timeOfTask = document.querySelector('.input-hour-task')

const createNewTask = (task) => {
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
    dateOfTask.value = ''
    timeOfTask.value = ''
    inputTask.focus()
}
const saveTaskInLocalStorag = _ => {
    const tasks = liOfTask.querySelectorAll('li')
    const listOfTasks = []
    
    for(let captureTask of tasks){
        let textTask = captureTask.innerText
        textTask = textTask.replace('Apagar', '') //Cleaning text 'Apagar' of the button
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
function formatedTask(task , dayTask, timeTask){
    const fullTask = `Dia: ${dayTask}\nTarefa: ${task}\nHorário: ${timeTask}`
    return fullTask
}

function getEvents() {
    const verifyDate = ['SEGUNDA', 'TERÇA', 'QUARTA','QUINTA','SEXTA','SÁBADO','DOMINGO']
    let getDay
    console.log()
    buttonConfirmTask.addEventListener('click', _ => {
        if (!inputTask.value) return alert('Campo de tarefas não pode estar vazio !')//Se estiver vazio, ele não faz nada
        if (!dateOfTask.value){
            return alert('Data não selecionada')  
        }else{
            for(let i in verifyDate){
                if(verifyDate[i] !== dateOfTask.value.toUpperCase()){
                    getDay = false
                    continue
                }else{
                    getDay = true
                    break
                }
            }
        }
        if (!timeOfTask.value) return alert('Deve ser informado um horário')
        if(getDay != false){
            const task = formatedTask(inputTask.value, dateOfTask.value.toUpperCase(), timeOfTask.value)
            createNewTask(task)
            clearInputTask()
        }else{
            clearInputTask()
            return alert('ATENÇÃO !\n\nSiga os padrões de pontuação do seu país, referente aos dias da semana,\ne verifique se o dia foi escrito de forma correta.')
        }

    })
    inputTask.addEventListener('keypress', event => {
        if(event.keyCode === 13){
            if (!inputTask.value) return alert('Campo de tarefas não pode estar vazio !')//Se estiver vazio, ele não faz nada
            if (!dateOfTask.value) return alert('Data não selecionada')
            if (!timeOfTask.value) return alert('Deve ser informado um horário')
    
            createNewTask(inputTask.value, dateOfTask.value, timeOfTask.value)
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