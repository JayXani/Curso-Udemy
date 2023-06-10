function verifyPont(pontuacao){
    let resultadoPontuacao = pontuacao.split(",")
    let recordes = 0
    let piorJogo= 1
    let maiorPontuacao = resultadoPontuacao[0]
    let menorPontuacao = resultadoPontuacao[0]


    for(i in resultadoPontuacao){
        if(parseInt(resultadoPontuacao[i]) > parseInt(maiorPontuacao)){
            maiorPontuacao = resultadoPontuacao[i]
            recordes++
        }else{
            if(parseInt(resultadoPontuacao[i]) < parseInt(menorPontuacao)){
                menorPontuacao = resultadoPontuacao[i]
                piorJogo = i+1
            }
        }
    }
    return [recordes,piorJogo]
}
console.log(verifyPont("44.5, 77.5, 50, 99.5"))
