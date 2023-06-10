function getPreco (imposto = 0, moeda = "R$"){
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'notebook',
    preco: 4589,
    desc: 0.15,
    getPreco    //Aqui ele cria um atributo chamado "getPreco" e atribui o metodo "getPreco" dentro dele
}

console.log(getPreco())     //Chamada convencional
console.log(produto.getPreco())     //acessando o atributo do objeto que possui o metodo

const carro = { preco: 49000, desc: 0.20}   //Só vai funcionar se o nome dos atributos forem iguai aos da função, ex: carro preco e getPreco deve ter uma variavel chamada preco, pois a referencia da variavel vai ser quem o contexto de quem o chamou

console.log(getPreco.call(carro))
console.log(getPreco.call(carro, 0.17, '$')) //Passo os parametros diretamete pela função call, carro = contexto, 0.17 = imposto, $ = moeda, o this.preco na função é referencia para o preço do objeto, assim como o desconto

console.log(getPreco.apply(carro, [0.17,'$'])) //A diferença que eu envio os demais parametros dentro de um array, (Carro é o contexto)