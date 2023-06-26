function somaDespesas(array){
    let getPreco = array.reduce(function(acumulador, priceAtual){
        return acumulador.preco + priceAtual.preco
    })
    return getPreco
}
console.log(somaDespesas([
    {nome: "Jornal Online", categoria: "Informação", preco: 89.99},
    {nome: "Cinema", categoria: "Entretenimento", preco: 150}
]))