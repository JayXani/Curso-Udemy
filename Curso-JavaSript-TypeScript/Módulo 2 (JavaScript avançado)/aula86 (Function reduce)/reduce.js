const numbers = [1,23,2,5,6,34,124,64,15,675,6,12]
const numberPlus = numbers.reduce((acumulator, value) =>{
    acumulator += value
    return acumulator
},0)

//Abaixo é recomendado usar o "filter" e não reduce
const pares = numbers.reduce((acumulador, value) => {
    if(value % 2 === 0) acumulador.push(value)
    return acumulador
}, [])

//Abaixo é recomendado usar o "map" e não o reduce
const dobroArray = numbers.reduce((acumulator, value) =>{
    acumulator.push(value * 2)
    return acumulator
}, [])


const pessoas = [
    {nome: 'Danilo', idade: 19},
    {nome: 'Marcos', idade: 32},
    {nome: 'Lucas', idade: 34},
    {nome: 'Bia', idade: 12},
    {nome: 'Maria', idade: 55},
]
const maisVelha = pessoas.reduce(function(acumulator, value){
    if(acumulator.idade > value.idade) return acumulator
    return value
})
console.log(maisVelha)
console.log(dobroArray)
console.log(numberPlus)
console.log(pares)