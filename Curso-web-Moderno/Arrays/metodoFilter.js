Array.prototype.filter2 = function(callback){
    const newArray = []
    for(let i = 0; i < this.length; i++){
        if(callback(this[i],i,this)){       //Caso a função retorne true, ou seja, se estiver dentro daquilo que voçê queira filtrar
            newArray.push(this[i])
        }
    }
    return newArray
}

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

console.log(produtos.filter2(caro).filter2(fragilizado))