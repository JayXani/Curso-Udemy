const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'iPad Pro', preco: 4199, fragil: true},
    {nome: 'Copo de vidro', preco: 12.49, fragil: true},
    {nome: 'Copo de Plástico', preco: 18.99, fragil: false}
]
console.log(produtos.filter(function(produto){
    return produto.fragil == true && produto.preco >= 500
}))

//2 modo de fazer
const caro = produto => produto.preco >= 500
const fragilizado = produto => produto.fragil

console.log(produtos.filter(caro).filter(fragilizado))