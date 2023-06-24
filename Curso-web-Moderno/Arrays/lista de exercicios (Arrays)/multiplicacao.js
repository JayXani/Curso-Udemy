function multiplica(number1, number2){
    let resultado = 0
    for(let i = 0; i < number2; i++){
        resultado += number1
    }
    return resultado
}

console.log(`Resultado: ${multiplica(7,8)}`)