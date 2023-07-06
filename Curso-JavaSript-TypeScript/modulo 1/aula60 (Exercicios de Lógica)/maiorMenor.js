const isLittle =(number1, number2) => (number1 > number2)?`O número ${number1} é maior que o ${number2}`:`O número ${number2} é maior que o ${number1}`

console.log(isLittle(23,44))
console.log(isLittle(230,44))