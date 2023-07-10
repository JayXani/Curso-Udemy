const inputTask = document.querySelector('.input-task')
const buttonConfirmTask = document.querySelector('.btn-add-task')
const liOfTask = document.querySelector('.list-tasks')
const dateOfTask = document.querySelector('.date-task')
const timeOfTask = document.querySelector('.input-hour-task')
const imgCalendar = document.querySelector('#imgCale')
const dateNow = new Date()

const createNewTask = (task) => {
    const p = document.createElement('p')
    const liMonsday = liOfTask.querySelector('#Monsday')
    const liTuesday = liOfTask.querySelector('#Tuesday')
    const liWednesday = liOfTask.querySelector('#Wednesday')
    const liThursday = liOfTask.querySelector('#Thursday')
    const liFriday = liOfTask.querySelector('#Friday')
    const liSaturday = liOfTask.querySelector('#Saturday')
    const liSunday = liOfTask.querySelector('#Sunday')
    p.setAttribute('class', 'tasks')
    p.innerText = task
    p.appendChild(createButtonClean(p))
    let split1 = task.split('Dia:')
    let getDayOftask = split1[1].split('\n')
    let day = getDayOftask[0]
    switch(day.trim()){
        case "SEGUNDA":
            liMonsday.appendChild(p)
            break
        case "TERÇA":
            liTuesday.appendChild(p)
            break
        case "QUARTA":
            liWednesday.appendChild(p)
            break
        case "QUINTA":
            liThursday.appendChild(p)
            break
        case "SEXTA":
            liFriday.appendChild(p)
            break
        case "SÁBADO":
            liSaturday.appendChild(p)
            break
        case "DOMINGO":
            liSunday.appendChild(p)
            break
    }
    saveTaskInLocalStorag()
}

const createButtonClean = _ => {
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
}
const saveTaskInLocalStorag = _ => {
    const tasks = liOfTask.querySelectorAll('.tasks')
    const listOfTasks = []

    for (let captureTask of tasks) {
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

    for (let taskSaved of taskJsonToArray) {
        createNewTask(taskSaved)
    }
}
function formatedTask(task, dayTask, timeTask) {
    const fullTask = `Dia: ${dayTask}\nTarefa: ${task}\nHorário: ${timeTask}`
    return fullTask
}

function alterCalendarOfYear() {
    if (dateNow.getDate() === 1) {
        switch (dateNow.getMonth()) {
            case 6:
                imgCalendar.setAttribute('src', 'img/calendarAgust.jpg')
                break;
            case 7:
                break;
            case 8:
                break;
            case 9:
                break;
            case 10:
                break;
            case 11:
                break;
        }
    }
}

function getEvents() {
    const verifyDate = ['SEGUNDA', 'TERÇA', 'QUARTA', 'QUINTA', 'SEXTA', 'SÁBADO', 'DOMINGO']
    let getDay
    buttonConfirmTask.addEventListener('click', _ => {
        if (!inputTask.value) return alert('Campo de tarefas não pode estar vazio !')//Se estiver vazio, ele não faz nada
        if (!dateOfTask.value) {
            return alert('Data não selecionada')
        } else {
            for (let i in verifyDate) {
                if (verifyDate[i] !== dateOfTask.value.toUpperCase()) {
                    getDay = false
                    continue
                } else {
                    getDay = true
                    break
                }
            }
        }
        if (!timeOfTask.value) return alert('Deve ser informado um horário')
        if (getDay != false) {
            const task = formatedTask(inputTask.value, dateOfTask.value.toUpperCase().trim(), timeOfTask.value)
            createNewTask(task)
            clearInputTask()
        } else {
            clearInputTask()
            return alert('ATENÇÃO !\n\nSiga os padrões de pontuação do seu país, referente aos dias da semana,\ne verifique se o dia foi escrito de forma correta.')
        }

    })
    inputTask.addEventListener('keypress', event => {
        if (event.keyCode === 13) {
            if (!inputTask.value) return alert('Campo de tarefas não pode estar vazio !')//Se estiver vazio, ele não faz nada
            if (!dateOfTask.value) return alert('Data não selecionada')
            if (!timeOfTask.value) return alert('Deve ser informado um horário')

            createNewTask(inputTask.value, dateOfTask.value, timeOfTask.value)
            clearInputTask()
        }
    })
    document.addEventListener('click', event => {
        const captureEvent = event.target
        if (captureEvent.classList.contains('btn-clean-task')) {
            captureEvent.parentElement.remove()
            saveTaskInLocalStorag() //to Clean at list the of local Storage
        }
    })
}
alterCalendarOfYear()
getEvents()
getTaskInStorage()