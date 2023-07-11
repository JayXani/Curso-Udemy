function Calculator() {
    this.display = document.querySelector('.display')
    const getEvent = _ => {
        document.addEventListener('click', event => {
            const captureEvent = event.target
            if (captureEvent.classList.contains('btn-num')) {
                displayToInput(captureEvent.innerText)
            }
            if (captureEvent.classList.contains('btn-clear')) {
                clearInput()
            }
            if(captureEvent.classList.contains('btn-del')){
                deleteOneELement()
            }
            if(captureEvent.classList.contains('btn-equals')){
                result()
            }
        })
    }
    this.inicialized = _ => {
        getEvent()
        clickInEnter()
    }
    const displayToInput = value => {
        this.display.value += value
    }
    const clearInput = _ =>{
        this.display.value = " "
    }
    const deleteOneELement = _ =>{
        this.display.value = this.display.value.slice(0,-1)
    }
    const result = _ => {
        let valueOfInput = this.display.value
        valueOfInput = eval(valueOfInput)
        try{
            if(!valueOfInput){
                alert('Valores incorretos')
            }
            this.display.value = valueOfInput
        } catch(e){
            alert('Valores incorretos')
        }
    }
    const clickInEnter = _ => {
        this.display.addEventListener('keyup', event => {
            if(event.keyCode === 13){
                result()
            }
        })
    }
}
const calculator = new Calculator()
calculator.inicialized()