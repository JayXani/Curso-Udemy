function somArray(array){
    let soma = array.reduce(function(acumulador, atual){
        return acumulador + atual
    })
    return soma
}
console.log(somArray([1,2,3,4]))