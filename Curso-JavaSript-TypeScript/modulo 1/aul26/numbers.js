let num1 = 0.7
let num2 = 0.1
num1 += num2
num1 += num2


num1 = Number(num1.toFixed(2)) //1.0 == float, então transformo 1.0 em inteiro
console.log(Number.isInteger(num1))