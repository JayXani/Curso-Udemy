const pessoa = {
    nome: "Danilo",
    idade: 19,
    endereco:{
        rua:"Rua de teste",
        numero:43
    }
}

const {nome, idade } = pessoa
console.log(nome, idade)

const {teste, bemHumorado = true} = pessoa //bemHumorado, é undefined, porem eu setei um valor padão para ele (true)
console.log(teste, bemHumorado)

const{nome: n, idade: i} = pessoa //n e i são variaveis que estou criando e armazenando o valor de nome e idade nelas
console.log(n, i)

const{endereco: {rua, numero}} = pessoa //endereco é um objeto dentro de pessoa
console.log(rua,numero)
