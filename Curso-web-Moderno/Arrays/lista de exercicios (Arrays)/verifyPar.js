const verificaPares = array => {
    let pares = []
    for(let i in array){
        if(array[i] % 2 == 0 && i % 2 == 0){
            pares.push(array[i])
        }
    }
    return pares
}
console.log(verificaPares([10,2,78,]))