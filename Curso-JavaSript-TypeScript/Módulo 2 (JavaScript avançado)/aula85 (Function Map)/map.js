const pessoas = [
    {nome: 'Danilo', idade: 19},
    {nome: 'Marcos', idade: 32},
    {nome: 'Lucas', idade: 34},
    {nome: 'Bia', idade: 12},
    {nome: 'Maria', idade: 55},
]
const numbers = [1,23,35,346,765,23,12,3423,12]

//Map
const elementsMap = numbers.map(element => element * 2)

const namePeople = pessoas.map(e => e.nome)
const removeName = pessoas.map(e => e.idade)
const addIdInPessoas = pessoas.map((e,indice) => {
    const newObject = {...e}    //Assim ele não altera o array original
    newObject.id = indice + 1
    return newObject
})
const teste = pessoas.flatMap(element => element.idade) //Apenas percorrre o array e concatena os resultados
console.log(teste)
// console.log(namePeople)
// console.log(removeName)
// console.log(addIdInPessoas)
// console.log(pessoas)