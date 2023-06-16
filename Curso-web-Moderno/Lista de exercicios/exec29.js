function interval(vetor){
    let inside = 0
    let outside = 0

    for(i in vetor){
        if(vetor[i] >= 10 && vetor[i] <= 20){
            inside++
        }else{
            outside++
        }
    }
    return `Dentro do intervalo de [10,20]: ${inside}\nFora ${outside}`
}
numbers = [2,3,5,64,78,2,3,20,10,23,11,2,4]
console.log(interval(numbers))