let valor
console.log(valor)  //undefined = não inicializada

valor = null        //Variavel nicializada porém com ausencia de valor
console.log(valor) 

const produto = {}  //Definido, retorna vazio
console.log(produto)

produto.preco = 2.3
console.log(produto.preco)

delete produto.preco //Apaga um atributo que está dentro do objeto
console.log(produto.preco)

produto.preco = null //Ausencia de valor
console.log(!!produto.preco)

//Retorna false, pois produto não está setado, como eu neguei 2 vezes, ele retorna false