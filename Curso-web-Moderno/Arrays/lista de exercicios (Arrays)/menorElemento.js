function menorElementoArray(array){
    return array.reduce((acumulador, atual) => {
        return (acumulador <= atual)? acumulador : atual
    })
}
console.log(menorElementoArray([5,32,0,2]))