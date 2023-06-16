const maiorMenor = (vetor) =>{
    let maior
    let menor
    for(i in vetor){
        if(maior === undefined && menor === undefined){
            maior = vetor[i]
            menor = vetor[i]
        }else{
            if(maior <= vetor[i]){
                maior = vetor[i]
            }else{
                if(menor >= vetor[i]){
                    menor = vetor[i]
                }
            }
        }
    }
    return `Maior: ${maior}\nMenor: ${menor}`
}
vetor = [3,42,1,23,4]
console.log(maiorMenor(vetor))