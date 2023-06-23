const alunos = [
    {nome: 'josias', nota: 5.5, bolsista: false},
    {nome: 'joss', nota: 8.5, bolsista: false},
    {nome: 'marley', nota: 9.5, bolsista: true},
    {nome: 'maria', nota: 10, bolsista: false}
]

//verificando se todos os alunos são bolsistas
const verifybolsista = (resultado, bolsista) => resultado && bolsista // true && true == true...
console.log(alunos.map(a => a.bolsista).reduce(verifybolsista))        //tabela verdade, pega o anterior e verifica com atual

//verificando quem são os bolsistas
const algumBolsista = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista))