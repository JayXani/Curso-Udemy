Array.prototype.map2 = function(callback){
    const array = []
    for(let i = 0; i < this.length; i++){
        array.push(callback(this[i],i,this))        //vai ser adicionado o preço a cada chamada
    }
    return array
}

const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de Lapis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}'
]
let resultado = carrinho.map2(function(elemento){
    return JSON.parse(elemento).preco
})
console.log(resultado)

//2º Modo de realizar
const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

resultado = carrinho.map(paraObjeto).map(apenasPreco)

console.log(resultado)