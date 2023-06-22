const produto = Object.preventExtensions({      //Permite excluir e modificar objetos, mas não adicionar
    nome: 'teste',preco: 44, tag:'Sla'
})
console.log('Extensivel: ', Object.isExtensible(produto))
produto.descricao = 'Ola'
delete produto.tag

console.log(produto)

const pessoa = {
    nome: 'marileine',
    idade: 190
}
Object.seal(pessoa) //Permite alterar, mas não permite excluir ou adicionar
console.log('Selado: ', Object.isSealed(pessoa))
delete pessoa.nome
pessoa.descricao = 'new'
console.log(pessoa)

//Object.freeze(pessoa) = seal + valores constantes, ou seja, não podem ser alterados