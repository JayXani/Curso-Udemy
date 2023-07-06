const isModule = number=> {
    if(typeof number !== 'number'){
        return `O valor não é um número, é ${typeof number}`
    }
    if(number % 3 == 0 && number % 5 == 0){
        return 'FizzBuzz'
    }
    return (number % 3 == 0)?'Fizz':(number % 5 == 0)?'Buzz': number
}
for (let i = 0; i <= 100; i++){
    console.log(isModule(i))
}
console.log(isModule('a'))
