const isModule = number=> {
    if(typeof number !== 'number'){
        return `O valor não é um número, é ${typeof number}`
    }
    if(number % 3 == 0 && number % 5 == 0){
        return 'FizzBuzz'
    }
    return (number % 3 == 0)?'Fizz':(number % 5 == 0)?'Buzz': number
}
console.log(isModule(30))
console.log(isModule(9))
console.log(isModule(50))
console.log(isModule(12))
console.log(isModule(23))
