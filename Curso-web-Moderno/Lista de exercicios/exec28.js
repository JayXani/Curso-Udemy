const parImpar = (vetor) => {
    let pares = 0
    let impares = 0

    for(i in vetor){
        if(vetor[i] % 2 == 0){
            pares++
        }else{
            impares ++
        }
    }
    return `Quantidade pares: ${pares}\nQuantidade impares: ${impares}`
}
vetor = [1,43,56,46,78,23,6,32,6,312,3]
console.log(parImpar(vetor))