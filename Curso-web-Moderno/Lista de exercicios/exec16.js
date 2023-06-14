const operacao = (value1, value2, operation) => {
    switch(operation){
        case '+':
            return value1 + value2
        case '-':
            return value1 - value2
        case '*':
            return value1 * value2
        case '/':
            return value1 / value2
        default: 
            return 'Operador invalido'
    }
}
console.log(operacao(3,3 ,'+'))
console.log(operacao(3,3 ,'-'))
console.log(operacao(3,3 ,'*'))
console.log(operacao(3,3 ,'/'))