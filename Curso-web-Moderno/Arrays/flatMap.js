const escola = [
    {
        nome: 'Turma1',
        alunos: [
            {nome: 'Ana',nota: 8.8},
            {nome: 'Marcos', nota: 7.9}
        ]
    }, 
    {
        nome: 'Turma2',
        alunos: [
            {nome: 'Josias', nota: 6.5},
            {nome: 'Mohamed', nota: 6}
        ]
    }
]
const getNotaDoAluno = aluno => aluno.nota //função para pegar a nota do aluno
const getNotaDaTurma = turmas => turmas.alunos.map(getNotaDoAluno) //Vai pegar em turmas as notas dos alunos
const resultado = escola.flatMap(getNotaDaTurma)    //percorre o array inteiro e concatena os resultados
console.log(resultado)