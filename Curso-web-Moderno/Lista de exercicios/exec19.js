function productRestaurant(code, amount){
    switch(code){
        case 100:
            console.log(`Pedido: Cachorro quente \nPreço total a pagar: R$ ${(amount * 3.00).toFixed(2).toString().replace('.',',')}\n`)
            break

        case 200:
            console.log(`Pedido: Hambúrguer Simples \nPreço total a pagar: R$ ${(amount * 5.00).toFixed(2).toString().replace('.',',')}\n`)
            break

        case 300:
            console.log(`Pedido: Cheesburguer \nPreço total a pagar: R$ ${(amount * 5.50).toFixed(2).toString().replace('.',',')}\n`)
            break

        case 400:
            console.log(`Pedido: Bauru \nPreço total a pagar: R$ ${(amount * 7.50).toFixed(2).toString().replace('.',',')}\n`)
            break
        case 500:
            console.log(`Pedido: Refrigerante \nPreço total a pagar R$ ${(amount * 3.50).toFixed(2).toString().replace('.',',')}\n`)
            break
        case 600:
            console.log(`Pedido: Suco \nPreço total a pagar: R$ ${(amount * 2.80).toFixed(2).toString().replace('.',',')}\n`)
            break
        default:
            console.log('Produto não encontrado')
    }
}
productRestaurant(100,3)
productRestaurant(200,1)
productRestaurant(300,5)
productRestaurant(400,2)
productRestaurant(500,4)
productRestaurant(600,7)
productRestaurant(700,7)