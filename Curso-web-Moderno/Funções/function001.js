//Chamada tradicional de uma função
function func1(){}

//Atribuindo uma função a uma variavel
const func2 = function teste(){}

//Criando um array de funções
const array = [function teste002(a, b){ return a + b}, func1]
console.log(array[0](2,4))

//Atribuindo uma função para um atributo através de associação 
const obj = {}
obj.falar = function teste003(){return "opa"}
console.log(obj.falar()) 

//Função que recebe outra função como parametro
function func3(funcao){
    funcao()
}
func3(function func4(){
    console.log("Executando...")
})

//Retornando uma função
function somaDeValores(a,b){
    return function resultado(c){
        console.log(`A soma de todos os valores é: ${a+b+c}`)
    }
}

somaDeValores(2,4)(8)       //O primeiro parenteses corresponde a primeira função, o segundo, a segunda função
const resultado = somaDeValores(5,6)    //O resultado da primeira função eu armazeno em uma variavel
resultado(9)    //E uso a variavel para passar o 3 paramtro, para a outra função retornada