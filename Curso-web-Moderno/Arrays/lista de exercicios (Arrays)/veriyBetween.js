function verifyNumbers(number, min, max, inclusive = false) {

    if (inclusive == true) {
        if(number >= min && number <= max){
            return true
        }else{
            return false
        }
    }else{
        if(number >= min && number <= max){
            return true
        }else{
            return false
        }
    }
}
console.log(verifyNumbers(10,50,100))
console.log(verifyNumbers(16,100,160))
console.log(verifyNumbers(3,3,150))
console.log(verifyNumbers(3,3,150, true))