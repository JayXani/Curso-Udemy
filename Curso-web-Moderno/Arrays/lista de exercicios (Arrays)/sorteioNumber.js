function sortearNúmeros(number){
    const numeroSort = Math.round(Math.random() * (10 - 1) + 1)
    
    if(number == numeroSort){
        console.log('Parabéns !!, o número sorteado foi: ', numeroSort)
    }else{
        console.log(`Que pena o número sorteado foi: ${numeroSort}`)
    }
}
sortearNúmeros(3)
sortearNúmeros(4)