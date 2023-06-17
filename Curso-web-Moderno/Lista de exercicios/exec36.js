function multiplicaVetor(vetor, numberInteger){
    let resultado = []
    for(i in vetor){
        resultado[i] = vetor[i] * numberInteger
    }
    return resultado
}
const multiplicaVetor2 = (vetor2, numberInteger2) => {
    let resultado2 = []
    for(i in vetor2){
        if(vetor2[i] > 5){
            resultado2[i] = vetor2[i] * numberInteger2
        }else{
            resultado2[i] = vetor2[i]
        }
    }
    return resultado2
}
vetor = [3,4,2,54,52]
vetorM = [2,41,12,4,5,1]
console.log(`Resultado do primeiro vetor: ${multiplicaVetor(vetor, 2)}`)
console.log(`Resultado do primeiro vetor: ${multiplicaVetor2(vetorM, 2)}`)