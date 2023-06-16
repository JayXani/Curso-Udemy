const convenio = idade =>{ 
    const valorInicial = 100
    let alteracaoDeValor = valorInicial

    if(idade > 0 && idade < 10){
        alteracaoDeValor += 80
    }else{
        if(idade >= 10 && idade <= 30){
            alteracaoDeValor += 50
        }else{
            if(idade > 30 && idade <= 60){
                alteracaoDeValor += 95
            }else{
                if(idade > 60){
                    alteracaoDeValor += 130
                }
            }
        }
    }
    return alteracaoDeValor
}

console.log(`Os planos de saúde por padrão são descontados 100 reais`)
console.log(`Valor do plano ${convenio(10)}`)
console.log(`Valor do plano ${convenio(100)}`)
console.log(`Valor do plano ${convenio(1)}`)
console.log(`Valor do plano ${convenio(30)}`)
console.log(`Valor do plano ${convenio(60)}`)
console.log(`Valor do plano ${convenio(22)}`)