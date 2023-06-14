const verify = (valor) => {
    if(valor % 3 == 0){
        return true
    }else{
        return false
    }
}
console.log(`Divisel por 3: ${verify(18)}`)
console.log(`Divisel por 3: ${verify(5)}`)