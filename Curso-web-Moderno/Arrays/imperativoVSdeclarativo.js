const alunos = [
    {nome: 'Danilo', nota: 8.8},
    {nome: 'Mohamed', nota: 7.7}
]

//Modo imperativo, visa o como deve ser feito
let resultado = 0
for(let i = 0; i < alunos.length; i++){
    resultado += alunos[i].nota
}
console.log(resultado / alunos.length)

//Modo declarativo, visa no que deve ser feito
const getNota = aluno => aluno.nota
const somaNotas = (acumulador, nota) => acumulador + nota
const total = alunos.map(getNota).reduce(somaNotas)
console.log(total / alunos.length)