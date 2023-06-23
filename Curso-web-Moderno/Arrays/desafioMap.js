const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de Lapis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}'
]
let resultado = carrinho.map(function(elemento){
    return JSON.parse(elemento).preco
})
console.log(resultado)

//2º Modo de realizar
const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

resultado = carrinho.map(paraObjeto).map(apenasPreco)

console.log(resultado)