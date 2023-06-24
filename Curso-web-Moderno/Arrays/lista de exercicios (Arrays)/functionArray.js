function arrays(repetido, qtdRepeticao){
    let array = []
    for(let i = 0; i < qtdRepeticao; i++){
        array[i] = repetido
    }
    return array
}
console.log(arrays('teste', 2))