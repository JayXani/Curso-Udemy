const menor0vetor = vetor => {
    let menor0 = 0
    for(i in vetor){
        if(vetor[i] < 0){
            menor0++
        }
    }
    return menor0
}
vetor = [-1,-32,443,-53,12,-12]
console.log(`A quantidade de elementos < 0 é: ${menor0vetor(vetor)}`)
