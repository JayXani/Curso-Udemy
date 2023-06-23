const alunos = [
    {nome: 'josias', nota: 5.5, bolsista: false},
    {nome: 'joss', nota: 8.5, bolsista: false},
    {nome: 'marley', nota: 9.5, bolsista: true},
    {nome: 'maria', nota: 10, bolsista: false}
]

const resultado = alunos.map(a => a.nota).reduce(function(acumulador,atual){ //quase igual fibonnacci, pega o anterior "concatena" com atual e joga para a próxima interação
    return acumulador + atual
})
console.log(resultado)