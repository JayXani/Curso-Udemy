function createCalculator(){
    return {
        display: document.querySelector('.display'),

        clearInput(){
            this.display.value = ' '
        },

        inicialized(){
            this.clickButton()     //This is references the object (calculator)
            this.clickInEnter()
        },
         
        deleteOneElement(){
            this.display.value = this.display.value.slice(0, -1)
        },

        clickInEnter(){
            this.display.addEventListener('keyup', event => {
                if(event.keyCode === 13){
                    this.result()
                }
            })
        },


        result(){
            let valueOfDisplay = this.display.value
            try{
                valueOfDisplay = eval(valueOfDisplay)
                if(!valueOfDisplay){
                    alert('Os valores informados, estão incorretos !')
                }
                this.display.value = valueOfDisplay
            }catch(e){
                alert('Os valores informados, estão incorretos !')
            }
        },

        clickButton(){
            document.addEventListener('click', event =>{
                const getEvent = event.target
                if(getEvent.classList.contains('btn-num')){
                    this.btnToDisplay(getEvent.innerText)
                }
                if(getEvent.classList.contains('btn-clear')){
                    this.clearInput()
                }
                if(getEvent.classList.contains('btn-del')){
                    this.deleteOneElement()
                }
                if(getEvent.classList.contains('btn-equals')){
                    this.result()
                }
            })
        },

        btnToDisplay(value){
            this.display.value += value
        }
    }
}
const calculator = createCalculator()
calculator.inicialized()