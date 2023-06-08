function pessoa(){
    this.idade = 0
    setInterval(() => {
        this.idade++
        console.log(this.idade) //O this nesse contexto, é referencia ao objeto que o chamou, que é "pessoa"
    },1000)
}

pessoa()