const pessoa = {
    nome: 'Danilo',
    idade: 19,
    peso: 55
}
console.log(Object.keys(pessoa))    //Trás todas as chaves/nome dos atributos
console.log(Object.values(pessoa))  //Trás todos os valores atrelados as chaves
console.log(Object.entries(pessoa)) //Trás as chaves e valores em arrays

Object.entries(pessoa).forEach(([chave,valor]) => { //Percorrendo o array usando a fução destructuring 
    console.log(`${chave}, ${valor}`)
})

Object.defineProperty(pessoa, 'dataNascimento',{ //Altera/Cria propriedades novas para os atributos
    enumerable: true,   //permitido listar
    writable: false,    // não permitido alterar
    value: '01/01/2023'
})
console.log(Object.values(pessoa))

const destino = {a : 1}
const o1 = {b:2}
const o2 = {c:3, a:4}
const Objeto = Object.assign(destino, o1,o2)    //concatena os atributos que estão depois do 1 parametro, os valores para o 1º
console.log(destino)