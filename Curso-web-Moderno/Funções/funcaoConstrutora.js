function Carro(velocidadeMaxima = 200, delta = 5){
    let velocidadeAtual = 0

    this.acelerar = () => {
        (velocidadeAtual <= velocidadeMaxima)? velocidadeAtual += delta : velocidadeAtual = velocidadeMaxima
    }
    this.getVelocidadeAtual = function(){
        return velocidadeAtual
    }
}

const uno = new Carro 
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(400, 20)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())