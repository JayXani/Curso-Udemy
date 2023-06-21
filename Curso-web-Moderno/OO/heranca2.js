const avo = {atr: 'A'}
const pai = {__proto__: avo, atr2: 'B'} //pai tem um prototipo que faz referencia aos atributos de avo
const filha = {__proto__: pai, atr3: 'C'}
console.log(filha.atr, filha.atr2)

const Carro = {
    velAtual: 0,
    velMaxima: 200,
    acelerar(delta){
        if(this.velAtual + delta <= this.velMaxima){
            this.velAtual += delta
        }else{
            this.velAtual = this.velMaxima
        }
    },
    status(){
        return `${this.velAtual} Km/h de ${this.velMaxima} Km/h`
    }
}
const ferrari = {
    modelo: 'F40',
    velMaxima: 324      //Shadowing "Sombreamento", basicamente vai sobreescrever o velMaxima que está em "Carro"
}
const volvo = {
    modelo: 'V40',
    status() {  //Shadowing também + adicionando valores
        return `${this.modelo}: ${super.status()}` //"super" == referencia ao prototipo
    }
}

Object.setPrototypeOf(ferrari, Carro) //Digo que ferrari tem como prototipo "Carro" (herda)
Object.setPrototypeOf(volvo, Carro)

console.log(ferrari)
console.log(volvo)

volvo.acelerar(100)
console.log(volvo.status())

ferrari.acelerar(320)
console.log(`Modelo ${ferrari.modelo}, velocidade: ${ferrari.status()}`)