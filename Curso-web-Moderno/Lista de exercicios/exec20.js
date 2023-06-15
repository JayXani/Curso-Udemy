function sacarDinheiro(valorSaque) {
    let contador100 = 0
    let contador50 = 0
    let contador10= 0
    let contador5 = 0
    let contador1 = 0
    while(valorSaque != 0){

        if(valorSaque >= 100){
            valorSaque -= 100
            contador100 += 1
        }else{
            if(valorSaque >= 50){
                valorSaque -= 50
                contador50 += 1
            }else{
                if(valorSaque >= 10){
                    valorSaque -= 10
                    contador10 += 1
                }else{
                    if(valorSaque >= 5){
                        valorSaque -= 5
                        contador5 += 1
                    }else{
                        if(valorSaque >= 1){
                            valorSaque -= 1
                            contador1 += 1
                        }
                    }
                }
            }
        }
    }
    console.log('Notas totais', contador100,contador50,contador10,contador5,contador1)
}

sacarDinheiro(18)