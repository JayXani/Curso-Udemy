function pessoa(){
    this.idade = 0
    const self = this           //Segundo modo de resolver o this, driblando a linguagem
    setInterval(function(){
        console.log(self.idade++)
    }/*.bind(this)*/, 1000)     //Primeira forma de resolver o this, é usando a função bind
}
new pessoa