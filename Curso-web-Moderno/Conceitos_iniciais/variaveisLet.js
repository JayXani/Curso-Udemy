var numero = 1
{
    let numero = 2  //A variavel com o valor 2 vai existir apenas dentro do bloco
    console.log("Dentro do bloco: ",numero) 
}
console.log("Fora do bloco:",numero) //Vai imprimir 1 pois vai pegar a variavel que esta fora do bloco
