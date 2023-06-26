function getLetras(letra, string){
    let totalEquals = 0
    for(let i = 0; i < string.length; i++){
        if(string[i] == letra){
            totalEquals += 1
        }
    }
    return totalEquals
}
console.log(getLetras('o','daniloo'))
console.log(getLetras('O','daniloo'))