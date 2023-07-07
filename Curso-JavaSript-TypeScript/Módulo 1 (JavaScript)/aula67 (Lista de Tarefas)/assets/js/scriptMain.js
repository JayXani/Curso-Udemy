function getElement(){
    const inputTask = document.querySelector('.input-task')
    const buttonConfirmTask = document.querySelector('.btn-add-task')
    const listOfTask = document.querySelector('.list-tasks')
    buttonConfirmTask.addEventListener('click', _ => {

        if(!inputTask.value) return //Se estiver vazio, ele não faz nada
        console.log(inputTask.value)
    })
}
getElement()