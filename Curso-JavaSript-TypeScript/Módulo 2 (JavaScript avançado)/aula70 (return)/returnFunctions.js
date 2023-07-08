function multiplication(multiplicador){
    return function (n){
        return n * multiplicador
    }
}
console.log(multiplication(3)(2))
function teste2 (){
    console.log('teste')
}
function teste(){
    return function(){
        teste2()
    }
}
teste()