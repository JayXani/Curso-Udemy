const produto = new Object
produto.nome = 'Cadeira'
produto['marca teste'] = 'teste001'
produto.preco = 220

console.log(produto)
delete produto.preco
delete produto['marca teste'] //Uma vez definida desta forma, só posso acessar dessa mesma forma
console.log(produto)

const carro = {
    modelo:'A4',
    valor: 89000,

    prorietario: {
        nome: 'Raul',
        idade: 56,

        endereco: {
            logadrouro: 'Rua ABC',
            numero: 123
        }
    },
    condutores:[{
        nome: 'junior',
        idade: 19
    },{
        nome: 'Ana',
        idade: 33
    }],
    calcularValorSeguro: function(){
        //...
    }
}
console.log(carro)
delete carro.condutores
delete carro.calcularValorSeguro
carro.modelo = 'BMW'
console.log(carro)