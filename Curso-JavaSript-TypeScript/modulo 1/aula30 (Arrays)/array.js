const array = ['josias','marcos','mohamed']
array.push('lucas') //adiciona um elemento no final do array
array.unshift('teste') //adiciona um elemento no inicio do array
array.pop()         //remove o elemento que está no inicio do array
array.shift()       //remove um elemento que está no fim do array
console.log(array.slice(0,2) )  //trás os elementos entre os indices 0 e 2, mas não inclui o indice 2 (NÃO ALTERA O ARRAY)