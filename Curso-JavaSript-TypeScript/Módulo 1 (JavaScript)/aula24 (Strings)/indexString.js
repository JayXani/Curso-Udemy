const testeComStrings = 'um texto com sla o que' 
console.log(testeComStrings.charAt(5))         //Retorna o caracter que está na posição informada
console.log(testeComStrings.indexOf('texto'))//Retorna a posição que a palavra começa
console.log(testeComStrings.indexOf('o', 3))//Retorna a posição que a palavra/caracter começa, a partir da posição informada
console.log(testeComStrings.lastIndexOf('o'))//Retorna a posição que a palavra/caracter começa, procurando do último elemento para "trás"
console.log(testeComStrings.match(/[a-z]/g))
console.log(testeComStrings.search(/[a-z]/))
console.log(testeComStrings.replace('um','outra'))
console.log(testeComStrings.slice(-1))