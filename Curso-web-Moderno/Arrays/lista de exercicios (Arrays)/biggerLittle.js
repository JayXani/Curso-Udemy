function verifyBiggerOrLittle(number1, number2){
    if(number1 >= number2){
        return true
    }
    return false
}
console.log(`O 1 número é maior que o 2 ?\nR: ${verifyBiggerOrLittle(3,2)}`)