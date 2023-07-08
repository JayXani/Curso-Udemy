function teste(a, b=2, c = 4 ) {
    console.log(a+b+c)
}
teste(1,undefined,2) //todos esses parametros são jogados para arguments

function testeDestructuring([n1,n2,[, n4]]){
    console.log(n1,n2,n4)
}
testeDestructuring([1,2,[3,4]])
function conta(operator, acumulator = 0, ...numbers){
    for (let values of numbers){
        if(operator === '+') acumulator += values
        if(operator === '-') acumulator -= values
        if(operator === '*') acumulator *= values
        if(operator === '/') acumulator /= values
    }
    return acumulator
}
console.log(conta('*', 1 , 1,23,423,626,) )
