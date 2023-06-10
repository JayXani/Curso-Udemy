function produto(nomeProduto, precoProduto){
    const descontoProduto = 0.5
    return{
        nomeProduto,
        precoProduto: precoProduto * descontoProduto
    }
}

console.log('Produto descontado ',produto("Arroz", 16.10))