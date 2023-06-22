let aprovados = ['Bia','Carlos','Ana']
console.log(aprovados)
delete aprovados[1]     //Não vai ser deletado, apenas vai ser colocado um valor 'undefined' no indice informado
console.log(aprovados)

aprovados = ['Bia','Carlos','Ana']
aprovados.sort()    //Ordena o array
console.log(aprovados)

aprovados.splice(1,1, 'Elemento1', 'Elemento2')
console.log(aprovados)