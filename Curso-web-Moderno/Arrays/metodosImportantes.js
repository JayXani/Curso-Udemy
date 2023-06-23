const pessoas = ['bia','marcos','josias', 'sei la']
pessoas.pop()  //Remove o último elemento do array
console.log(pessoas)

pessoas.shift() //Remove o primeiro elemento do vetor
console.log(pessoas)

pessoas.unshift('Sei la de novo') //Adiciona na 1º posição do array, um novo elemento
console.log(pessoas)

const pessoas2 = pessoas.slice(0,2) //Pega um pedaço do array, a partir do indice 0 até o indice 2, não inclui o 2
console.log(pessoas2)