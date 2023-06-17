function mediaAritmetica (vetor){
    let somaVetor = 0
    for(i in vetor){
        somaVetor += vetor[i]
    }
    return somaVetor / vetor.length
}
vetor = [1,2,3,4,5]
console.log(`A média do vetor é: ${mediaAritmetica(vetor)}`)