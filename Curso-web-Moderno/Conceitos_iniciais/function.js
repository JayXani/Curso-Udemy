//função sem retorno
function imprimeSoma(a, b){ //Não preciso estipular tipo
    console.log(a + b)
}

imprimeSoma(2,4) //chamada
imprimeSoma(2) //Resultado = NaN
imprimeSoma() //Resultado = NaN

//função com retorno

function soma(a, b = 0){   //sem resultado em b, por padrão vai ser 0
    return a + b
}

console.log(soma(2)) // O retorno será 2, pois tratei o b com o valor 0
console.log(soma(2, 3))
console.log(soma()) //NaN pois só tratei o 2 parametro 
