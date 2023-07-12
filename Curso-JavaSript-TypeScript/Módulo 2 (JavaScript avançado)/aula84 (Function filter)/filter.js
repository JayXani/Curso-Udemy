const numbers = [1,23,35,346,765,23,12,3423,12]

//Filter
const filterELements = numbers.filter(element => {
    return element < 10
})
//Map
const elementsMap = numbers.map(element => element * 2)

//Filter with object
const pessoas = [
    {nome: 'Danilo', idade: 19},
    {nome: 'Marcos', idade: 32},
    {nome: 'Lucas', idade: 34},
    {nome: 'Bia', idade: 12},
    {nome: 'Maria', idade: 55},
]
const filterPeople = pessoas.filter(element => element.idade > 50)
const filterName = pessoas.filter(element => element.nome.toLowerCase().endsWith('a'))