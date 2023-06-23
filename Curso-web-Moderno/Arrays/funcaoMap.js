const numeros = [1,2,3,4,5,6]
let resultado = numeros.map(function(elemento){     //Retorno obrigatório
    return elemento * 2
})
console.log(resultado)

const soma10 = elemento => elemento + 10
const triplo = elemento => elemento * 3
const convertMoney = elemento => `R$ ${parseFloat(elemento).toFixed(2).replace('.',',')}`

resultado = numeros.map(soma10).map(triplo).map(convertMoney)       //função map encadeada
console.log(resultado)